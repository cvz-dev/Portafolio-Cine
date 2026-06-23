/* ───────────────────────────────────────────────────────────────────────
   Carga de contenido en Markdown — un .md por película.
   Lee el archivo, lo parte por encabezados "## Sección" y convierte cada
   bloque a HTML con marked. Cachea por ruta para no recargar.
   Exporta a window: useMovieContent
   ─────────────────────────────────────────────────────────────────────── */

const _mdCache = {};   // ruta -> { Reseña: "<html>", Opinión: "...", Actividad: "..." }

function parseMarkdownSections(md) {
  const out = {};
  // separa por "## Título" al inicio de línea
  const parts = md.split(/^##\s+/m);
  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const nl = trimmed.indexOf("\n");
    const title = (nl === -1 ? trimmed : trimmed.slice(0, nl)).trim();
    const body = nl === -1 ? "" : trimmed.slice(nl + 1).trim();
    out[title] = window.marked ? window.marked.parse(body) : body;
  }
  return out;
}

async function loadMovieContent(path) {
  if (!path) return {};
  if (_mdCache[path]) return _mdCache[path];
  const res = await fetch(path);
  if (!res.ok) throw new Error("No se pudo cargar " + path + " (" + res.status + ")");
  const md = await res.text();
  const sections = parseMarkdownSections(md);
  _mdCache[path] = sections;
  return sections;
}

// Hook: devuelve { sections, status }  status ∈ "loading" | "ready" | "error"
function useMovieContent(ev) {
  const [state, setState] = React.useState({ sections: null, status: "loading" });
  React.useEffect(() => {
    if (!ev || !ev.contenido) { setState({ sections: {}, status: "ready" }); return; }
    let alive = true;
    setState({ sections: null, status: "loading" });
    loadMovieContent(ev.contenido)
      .then((sections) => { if (alive) setState({ sections, status: "ready" }); })
      .catch((err) => { if (alive) { console.error(err); setState({ sections: {}, status: "error" }); } });
    return () => { alive = false; };
  }, [ev && ev.contenido]);
  return state;
}

Object.assign(window, { useMovieContent, loadMovieContent, parseMarkdownSections });

/* ───────────────────────────────────────────────────────────────────────
   Sala de cine — pantalla 2.35:1 proyectada, haz de proyector, polvo,
   butacas en silueta y letrero SALIDA verde.
   Exporta a window: Sala
   ─────────────────────────────────────────────────────────────────────── */

function Dust({ count = 26 }) {
  const motes = React.useMemo(
    () => Array.from({ length: count }).map(() => ({
      left: 30 + Math.random() * 40,
      top: Math.random() * 100,
      size: 1 + Math.random() * 2.4,
      dur: 9 + Math.random() * 12,
      delay: -Math.random() * 16,
      drift: (Math.random() * 2 - 1) * 26,
    })),
    [count]
  );
  return (
    <div className="dust">
      {motes.map((m, i) => (
        <span key={i} className="mote" style={{
          left: m.left + "%", top: m.top + "%",
          width: m.size, height: m.size,
          "--drift": m.drift + "px",
          animationDuration: m.dur + "s",
          animationDelay: m.delay + "s",
        }} />
      ))}
    </div>
  );
}

function Seats() {
  return (
    <div className="seats" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="seat" />
      ))}
    </div>
  );
}

function ExitSign({ onExit }) {
  return (
    <button className="exit-sign" onClick={onExit} title="Salir de la sala (Esc)">
      <span className="exit-glow" />
      <span className="exit-arrow" />
      <span className="exit-word">SALIDA</span>
    </button>
  );
}

// Renderiza un bloque de Markdown ya convertido a HTML
function MdBlock({ html }) {
  return <div className="sc-md" dangerouslySetInnerHTML={{ __html: html || "" }} />;
}

function Sala({ ev, onExit }) {
  if (!ev) return null;
  const { sections, status } = useMovieContent(ev);
  const sec = sections || {};
  return (
    <div className="sala" role="dialog" aria-label={"Sala — " + ev.title}>
      <div className="room-bg" />
      <div className="beam"><Dust /></div>

      <div className="screen-stage">
        <div className="screen" data-screen-label={"Sala " + ev.num}>
          <div className="screen-flicker" />
          <div className="screen-vignette" />
          <div className="screen-scroll">
            <h2 className="sc-title">{ev.title}</h2>

            <div className="sc-rating">
              <span className="sc-rating-label">Calificación</span>
              <Stars value={ev.rating} />
              <span className="sc-rating-num">{ev.rating.toFixed(1)} / 5</span>
            </div>

            {status === "loading" && <p className="sc-loading">Cargando reseña…</p>}
            {status === "error" && <p className="sc-loading">No se pudo cargar el contenido.</p>}

            {status === "ready" && (() => {
              const actKey = Object.keys(sec).find(k => k !== "Reseña" && k !== "Opinión");
              return (
                <>
                  <div className="sc-grid">
                    <div className="sc-col">
                      <div className="sc-block">
                        <div className="sc-h">Reseña</div>
                        <MdBlock html={sec["Reseña"]} />
                      </div>

                      <div className="sc-block">
                        <div className="sc-h">Opinión</div>
                        <MdBlock html={sec["Opinión"]} />
                      </div>
                    </div>

                    <div className="sc-col">
                      <div className="sc-block sc-ficha">
                        <div className="sc-h">Ficha técnica</div>
                        <dl className="ficha-list">
                          {Object.entries(ev.ficha).map(([k, v]) => (
                            <div className="ficha-row" key={k}>
                              <dt>{k}</dt>
                              <dd className={k === "Título" ? "ficha-titulo" : ""}>{v}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  </div>

                  {actKey && (
                    <div className="sc-block sc-actividad">
                      <div className="sc-h">{actKey}</div>
                      <MdBlock html={sec[actKey]} />
                    </div>
                  )}
                </>
              );
            })()}

            <div className="fin">— FIN —</div>
          </div>
        </div>
        <div className="screen-cast" />
      </div>

      <Seats />
      <ExitSign onExit={onExit} />
    </div>
  );
}

Object.assign(window, { Dust, Seats, ExitSign, Sala, MdBlock });

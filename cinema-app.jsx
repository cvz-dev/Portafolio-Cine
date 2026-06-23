/* ───────────────────────────────────────────────────────────────────────
   App — orquesta Cartelera ⇄ Sala, transiciones, paletas, tipografías,
   grano y panel de Tweaks.
   ─────────────────────────────────────────────────────────────────────── */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "ambar",
  "typography": "cartel",
  "transition": "zoom",
  "grain": true,
  "grainAmt": 45,
  "bulbs": true
}/*EDITMODE-END*/;

const PALETTE_KEYS = ["ambar", "terciopelo", "proyector", "sepia"];
const swatchOf = (k) => [window.PALETTES[k].bg2, window.PALETTES[k].gold, window.PALETTES[k].ink];

function screenTarget() {
  const W = window.innerWidth, H = window.innerHeight;
  let width = Math.min(W * 0.97, 1760);
  let height = width / 2;
  if (height > H * 0.90) { height = H * 0.90; width = height * 2; }
  return {
    left: (W - width) / 2,
    top: (H - height) / 2 - Math.min(40, H * 0.04),
    width, height,
  };
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const restore = (() => {
    try { return JSON.parse(localStorage.getItem("cine_state") || "{}"); }
    catch (e) { return {}; }
  })();
  const [view, setView] = React.useState(restore.view === "sala" ? "sala" : "cartelera");
  const [ev, setEv] = React.useState(() =>
    window.EVIDENCES.find((e) => e.id === restore.evId) || null);

  // transición
  const [zoom, setZoom] = React.useState(null);
  const [black, setBlack] = React.useState(0);
  const [curtain, setCurtain] = React.useState("open");
  const timers = React.useRef([]);
  const after = (ms, fn) => timers.current.push(setTimeout(fn, ms));
  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const pal = window.PALETTES[t.palette] || window.PALETTES.ambar;
  const font = window.FONTS[t.typography] || window.FONTS.cartel;

  // persistencia
  React.useEffect(() => {
    localStorage.setItem("cine_state", JSON.stringify({ view, evId: ev && ev.id }));
  }, [view, ev]);

  // Esc para salir
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape" && view === "sala") exit(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [view]);

  function open(evidence, posterEl) {
    setEv(evidence);
    const mode = t.transition;
    if (mode === "zoom" && posterEl) {
      const from = posterEl.getBoundingClientRect();
      setZoom({ ev: evidence, from: { left: from.left, top: from.top, width: from.width, height: from.height }, to: screenTarget(), run: false });
      requestAnimationFrame(() => requestAnimationFrame(() =>
        setZoom((z) => z && { ...z, run: true })));
      after(760, () => { setView("sala"); setZoom(null); });
    } else if (mode === "telon") {
      setCurtain("closed");
      after(720, () => { setView("sala"); after(60, () => setCurtain("open")); });
    } else { // fundido
      setBlack(1);
      after(620, () => { setView("sala"); after(40, () => setBlack(0)); });
    }
  }

  function exit() {
    setBlack(1);
    after(420, () => { setView("cartelera"); after(40, () => setBlack(0)); });
  }

  const rootStyle = {
    "--bg": pal.bg, "--bg2": pal.bg2, "--panel": pal.panel, "--panel-edge": pal.panelEdge,
    "--ink": pal.ink, "--muted": pal.muted, "--faint": pal.faint,
    "--gold": pal.gold, "--gold-hi": pal.goldHi, "--bulb": pal.bulb, "--glow": pal.glowRGB,
    "--font-display": font.display, "--font-head": font.head, "--font-body": font.body,
    "--disp-spacing": font.dispSpacing, "--disp-weight": font.dispWeight,
    "--bulb-anim": t.bulbs ? "running" : "paused",
  };

  return (
    <div className="cine-root" style={rootStyle} data-screen-label="Portafolio Cartelera">
      {view === "cartelera" && <Cartelera evidences={window.EVIDENCES} onOpen={open} />}
      {view === "sala" && <Sala ev={ev} onExit={exit} />}

      {/* Zoom: el póster se convierte en la pantalla */}
      {zoom && (
        <>
          <div className="zoom-dim" style={{ opacity: zoom.run ? 1 : 0 }} />
          <div
            className={"zoomer" + (zoom.run ? " run" : "")}
            style={{
              left: (zoom.run ? zoom.to.left : zoom.from.left) + "px",
              top: (zoom.run ? zoom.to.top : zoom.from.top) + "px",
              width: (zoom.run ? zoom.to.width : zoom.from.width) + "px",
              height: (zoom.run ? zoom.to.height : zoom.from.height) + "px",
            }}
          >
            <MoviePoster ev={zoom.ev} />
            <div className="zoomer-flash" />
          </div>
        </>
      )}

      {/* Fundido a negro */}
      <div className="blackout" style={{ opacity: black, pointerEvents: black ? "auto" : "none" }} />

      {/* Telón */}
      <div className={"curtains " + curtain} aria-hidden="true">
        <div className="curtain curtain-l" />
        <div className="curtain curtain-r" />
      </div>

      {/* Grano de película */}
      {t.grain && <div className="grain" style={{ opacity: t.grainAmt / 100 }} />}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Atmósfera" />
        <TweakColor label="Paleta"
          value={swatchOf(t.palette)}
          options={PALETTE_KEYS.map(swatchOf)}
          onChange={(arr) => {
            const k = PALETTE_KEYS.find((key) => JSON.stringify(swatchOf(key)) === JSON.stringify(arr));
            if (k) setTweak("palette", k);
          }} />
        <TweakRadio label="Tipografía"
          value={t.typography}
          options={[{ value: "cartel", label: "Cartel" }, { value: "clasica", label: "Clásica" }, { value: "neon", label: "Neón" }]}
          onChange={(v) => setTweak("typography", v)} />
        <TweakRadio label="Transición"
          value={t.transition}
          options={[{ value: "zoom", label: "Zoom" }, { value: "fundido", label: "Fundido" }, { value: "telon", label: "Telón" }]}
          onChange={(v) => setTweak("transition", v)} />

        <TweakSection label="Textura" />
        <TweakToggle label="Luces de marquesina" value={t.bulbs}
          onChange={(v) => setTweak("bulbs", v)} />
        <TweakToggle label="Grano de película" value={t.grain}
          onChange={(v) => setTweak("grain", v)} />
        <TweakSlider label="Intensidad del grano" value={t.grainAmt} min={0} max={100} unit="%"
          onChange={(v) => setTweak("grainAmt", v)} />

        <TweakSection label="Sala" />
        <TweakButton label="Volver a la cartelera"
          onClick={() => { setView("cartelera"); setBlack(0); }} secondary />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/* ───────────────────────────────────────────────────────────────────────
   Cartelera — Marquesina art déco + grid de pósters
   Exporta a window: Placeholder, Marquee, PosterCard, Cartelera
   ─────────────────────────────────────────────────────────────────────── */

// Placeholder de imagen con franjas + leyenda monoespaciada (sin SVG dibujado a mano)
function Placeholder({ label, ghost, className = "", style = {} }) {
  return (
    <div className={"ph " + className} style={style}>
      <div className="ph-stripes" />
      {ghost && <div className="ph-ghost">{ghost}</div>}
      {label && <div className="ph-label">{label}</div>}
    </div>
  );
}

// Hilera de bombillas con "luz viajera" (chase) para la marquesina
function Bulbs({ count, vertical, total, startSeq, reverse }) {
  const arr = Array.from({ length: count });
  return (
    <div className={"bulbs " + (vertical ? "bulbs-v" : "bulbs-h")}>
      {arr.map((_, i) => {
        const idx = reverse ? (count - 1 - i) : i;
        const seq = startSeq + idx;
        return (
          <span key={i} className="bulb"
                style={{ animationDelay: `${-(seq / total) * 4}s` }} />
        );
      })}
    </div>
  );
}

function Marquee({ title, kicker }) {
  // Perímetro continuo en sentido horario: arriba(L→R) → derecha(T→B) → abajo(R→L) → izq.(B→T)
  const T = 16, S = 6;
  const total = T * 2 + S * 2;
  return (
    <header className="marquee-wrap">
      <div className="marquee">
        <div className="m-edge m-top"><Bulbs count={T} total={total} startSeq={0} /></div>
        <div className="m-edge m-right"><Bulbs count={S} vertical total={total} startSeq={T} /></div>
        <div className="m-edge m-bottom"><Bulbs count={T} total={total} startSeq={T + S} reverse /></div>
        <div className="m-edge m-left"><Bulbs count={S} vertical total={total} startSeq={T * 2 + S} reverse /></div>

        <div className="m-inner">
          <div className="m-kicker">{kicker}</div>
          <h1 className="m-title">{title}</h1>
          <div className="m-rule"><span /><b>EN CARTELERA</b><span /></div>
        </div>
      </div>
      <div className="marquee-shadow" />
    </header>
  );
}

// Calificación con estrellas (0–5, admite medias)
function Stars({ value = 0, max = 5 }) {
  const star = (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2.2l2.95 5.98 6.6.96-4.78 4.66 1.13 6.58L12 17.27 6.1 20.38l1.13-6.58L2.45 9.14l6.6-.96L12 2.2z"/>
    </svg>
  );
  return (
    <div className="stars-row" role="img" aria-label={`${value} de ${max} estrellas`}>
      {Array.from({ length: max }).map((_, i) => {
        const pct = Math.max(0, Math.min(1, value - i)) * 100;
        return (
          <span key={i} className="star">
            {star}
            <span className="star-fill" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>{star}</span>
          </span>
        );
      })}
    </div>
  );
}

// Póster: placeholder de fondo + imagen real encima (si existe el archivo).
// Si la imagen no está aún, onError la oculta y se ve el placeholder.
function MoviePoster({ ev }) {
  const [ok, setOk] = React.useState(true);
  return (
    <React.Fragment>
      <Placeholder ghost={ev.num} />
      {ev.poster && ok && (
        <img className="poster-img" src={ev.poster} alt={"Póster de " + ev.title}
             loading="lazy" onError={() => setOk(false)}
             style={{
               objectPosition: ev.focalPoint || "50% 50%",
               transform: ev.posterZoom ? `scale(${ev.posterZoom})` : undefined,
               transformOrigin: ev.focalPoint || "50% 50%",
             }} />
      )}
    </React.Fragment>
  );
}

function PosterCard({ ev, index, onOpen }) {
  const ref = React.useRef(null);
  return (
    <button
      ref={ref}
      className="poster"
      style={{ animationDelay: `${index * 70}ms` }}
      onClick={() => onOpen(ev, ref.current)}
    >
      <div className="poster-art">
        <MoviePoster ev={ev} />
        <div className="poster-spot" />
      </div>
      <div className="poster-plate">
        <div className="poster-genre">{ev.genre}</div>
        <div className="poster-title">{ev.title}</div>
      </div>
    </button>
  );
}

function Cartelera({ evidences, onOpen }) {
  return (
    <main className="cartelera">
      <Marquee kicker="Portafolio de Evidencias · Taller de Cine" title="CINÉFILO" />

      <section className="hall">
        <div className="hall-head">
          <h2 className="hall-title">Funciones disponibles</h2>
          <p className="hall-sub">
            Elige la película para comenzar la función
          </p>
        </div>

        <div className="poster-grid">
          {evidences.map((ev, i) => (
            <PosterCard key={ev.id} ev={ev} index={i} onOpen={onOpen} />
          ))}
        </div>

        <footer className="hall-foot">
          <span className="foot-dot" />
          Sebastian Rodríguez Arellano
          <span className="foot-dot" />
        </footer>
      </section>
    </main>
  );
}

Object.assign(window, { Placeholder, Marquee, Bulbs, PosterCard, Cartelera, Stars, MoviePoster });

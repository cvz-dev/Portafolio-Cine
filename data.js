/* ───────────────────────────────────────────────────────────────────────
   Portafolio Cartelera de Cine — datos y tokens de diseño
   Plain JS (no Babel). Expone window.EVIDENCES, window.PALETTES, window.FONTS
   ─────────────────────────────────────────────────────────────────────── */

window.EVIDENCES = [
  {
    id: "ev01", num: "01", title: "BlacKkKlansman",
    genre: "Drama · Comedia biográfica", rating: 3.5,
    poster: "imagenes/blackKKlansman.jpg",
    focalPoint: "50% 60%",
    contenido: "contenido/blackKKlansman.md",
    ficha: { "Título": "BlacKkKlansman", "Género": "Drama / Comedia biográfica / Crimen", "Productor": "J. Blum, S. Lee, R. Mansfield, S. McKittrick, J. Peele, S. Redick", "Casa productora": "Blumhouse / Monkeypaw / QC Ent. / 40 Acres & A Mule/ Legendary Pictures", "Director": "Spike Lee", "Guión": "S. Lee, C. Wachtel, D. Rabinowitz, K. Willmott", "Fotografía": "Chayse Irvin", "Duración": "135 min", "País": "Estados Unidos", "Año": "2018" }
  },
  {
    id: "ev02", num: "02", title: "Django Unchained",
    genre: "Western · Drama", rating: 4,
    poster: "imagenes/djangoUnchained.jpg",
    focalPoint: "50% 10%",
    contenido: "contenido/djangoUnchained.md",
    ficha: { "Título": "Django Unchained", "Género": "Western / Drama", "Productor": "Stacey Sher, Reginald Hudlin, Pilar Savone", "Casa productora": "Columbia Pictures / The Weinstein Company / A Band Apart", "Director": "Quentin Tarantino", "Guión": "Quentin Tarantino", "Fotografía": "Robert Richardson", "Duración": "165 min", "País": "Estados Unidos", "Año": "2012" }
  },
  {
    id: "ev03", num: "03", title: "Thelma & Louise",
    genre: "Road movie · Drama", rating: 3.5,
    poster: "imagenes/thelma&Louise.jpg",
    focalPoint: "50% 30%",
    posterZoom: 1.1,
    contenido: "contenido/ThelmaLouise.md",
    ficha: { "Título": "Thelma & Louise", "Género": "Road movie / Drama / Thriller", "Productor": "Ridley Scott, Mimi Polk Gitlin", "Casa productora": "MGM / Pathé Entertainment", "Director": "Ridley Scott", "Guión": "Callie Khouri", "Fotografía": "Adrian Biddle", "Duración": "130 min", "País": "Estados Unidos", "Año": "1991" }
  },
  {
    id: "ev04", num: "04", title: "Arrival",
    genre: "Ciencia ficción · Drama", rating: 4.5,
    poster: "imagenes/arrival.jpg",
    focalPoint: "50% 40%",
    contenido: "contenido/Arrival.md",
    ficha: { "Título": "Arrival (La llegada)", "Género": "Ciencia ficción / Drama / Misterio", "Productor": "Shawn Levy, Dan Levine, Aaron Ryder, David Linde", "Casa productora": "FilmNation Entertainment / 21 Laps Entertainment / Lava Bear Films", "Director": "Denis Villeneuve", "Guión": "Eric Heisserer (basado en 'Story of Your Life' de Ted Chiang)", "Fotografía": "Bradford Young", "Duración": "116 min", "País": "Estados Unidos / Canadá", "Año": "2016" }
  },
  {
    id: "ev05", num: "05", title: "Moonrise Kingdom",
    genre: "Comedia romántica · Drama", rating: 4.5,
    poster: "imagenes/moonriseKingdom.jpg",
    focalPoint: "50% 95%",
    contenido: "contenido/MoonriseKingdom.md",
    ficha: { "Título": "Moonrise Kingdom", "Género": "Comedia romántica / Drama / Aventura", "Productor": "Wes Anderson, Scott Rudin, Jeremy Dawson, Steven Rales", "Casa productora": "American Empirical Pictures / Indian Paintbrush / Focus Features", "Director": "Wes Anderson", "Guión": "Wes Anderson, Roman Coppola", "Fotografía": "Robert D. Yeoman", "Duración": "94 min", "País": "Estados Unidos", "Año": "2012" }
  },
  {
    id: "ev06", num: "06", title: "District 9",
    genre: "Ciencia ficción · Thriller", rating: 4,
    poster: "imagenes/district9.jpg",
    focalPoint: "50% 83%",
    contenido: "contenido/District9.md",
    ficha: { "Título": "District 9", "Género": "Ciencia ficción / Acción / Thriller", "Productor": "Peter Jackson, Carolynne Cunningham", "Casa productora": "WingNut Films / Block/Hanson Productions / TriStar Pictures", "Director": "Neill Blomkamp", "Guión": "Neill Blomkamp, Terri Tatchell", "Fotografía": "Trent Opaloch", "Duración": "112 min", "País": "Nueva Zelanda / Sudáfrica / Canadá", "Año": "2009" }
  },
  {
    id: "ev07", num: "07", title: "Children of Men",
    genre: "Ciencia ficción · Thriller distópico", rating: 5,
    poster: "imagenes/childrenOfMen.jpg",
    focalPoint: "50% 30%",
    contenido: "contenido/childrenOfMen.md",
    ficha: { "Título": "Children of Men (Hijos de los hombres)", "Género": "Ciencia ficción / Thriller / Drama distópico", "Productor": "Marc Abraham, Eric Newman, Hilary Shor, Iain Smith, Tony Smith", "Casa productora": "Universal Pictures / Strike Entertainment / Hit & Run Productions", "Director": "Alfonso Cuarón", "Guión": "A. Cuarón, T. J. Sexton, D. Arata, M. Fergus, H. Ostby (basado en la novela de P. D. James)", "Fotografía": "Emmanuel Lubezki", "Duración": "109 min", "País": "Reino Unido / Estados Unidos", "Año": "2006" }
  },
  {
    id: "ev08", num: "08", title: "The Silence of the Lambs",
    genre: "Thriller · Terror psicológico", rating: 5,
    poster: "imagenes/silenceOfTheLambs.jpg",
    focalPoint: "50% 30%",
    contenido: "contenido/silenceOfTheLambs.md",
    ficha: { "Título": "The Silence of the Lambs (El silencio de los inocentes)", "Género": "Thriller / Terror psicológico / Drama", "Productor": "Edward Saxon, Kenneth Utt, Ron Bozman", "Casa productora": "Strong Heart Productions / Orion Pictures", "Director": "Jonathan Demme", "Guión": "Ted Tally (basado en la novela de Thomas Harris)", "Fotografía": "Tak Fujimoto", "Duración": "118 min", "País": "Estados Unidos", "Año": "1991" }
  },
  {
    id: "ev09", num: "09", title: "Isle of Dogs",
    genre: "Animación · Comedia · Aventura", rating: 4,
    poster: "imagenes/isleOfDogs.jpg",
    focalPoint: "50% 90%",
    contenido: "contenido/isleOfDogs.md",
    ficha: { "Título": "Isle of Dogs (La isla de los perros)", "Género": "Animación / Comedia / Aventura", "Productor": "Wes Anderson, Scott Rudin, Steven Rales, Jeremy Dawson", "Casa productora": "American Empirical Pictures / Indian Paintbrush / Fox Searchlight Pictures", "Director": "Wes Anderson", "Guión": "Wes Anderson", "Fotografía": "Tristan Oliver", "Duración": "101 min", "País": "Estados Unidos / Alemania", "Año": "2018" }
  },
  {
    id: "ev10", num: "10", title: "The Wolfpack",
    genre: "Documental", rating: 4,
    poster: "imagenes/theWolfpack.jpg",
    focalPoint: "50% 75%",
    contenido: "contenido/wolfpack.md",
    ficha: { "Título": "The Wolfpack", "Género": "Documental", "Productor": "Crystal Moselle, Protagonist Pictures", "Casa productora": "Radius-TWC / Dolce Content", "Director": "Crystal Moselle", "Guión": "Crystal Moselle", "Fotografía": "Crystal Moselle", "Duración": "90 min", "País": "Estados Unidos", "Año": "2015" }
  },
  {
    id: "ev11", num: "11", title: "Only Lovers Left Alive",
    genre: "Drama · Terror romántico", rating: 4.5,
    poster: "imagenes/onlyLoversLeftAlive.jpg",
    focalPoint: "50% 20%",
    contenido: "contenido/onlyLoversLeftAlive.md",
    ficha: { "Título": "Only Lovers Left Alive", "Género": "Drama / Terror romántico / Fantasía", "Productor": "Reinhard Brundig, Jeremy Thomas", "Casa productora": "Recorded Picture Company / Pandora Film / Dezenove Som e Imagens", "Director": "Jim Jarmusch", "Guión": "Jim Jarmusch", "Fotografía": "Yorick Le Saux", "Duración": "123 min", "País": "Reino Unido / Alemania / Francia / Grecia / Chipre", "Año": "2013" }
  }
];

/* ── Paletas (Tweak: color_mood) ─────────────────────────────────────────── */
window.PALETTES = {
  ambar: {
    label: "Ámbar clásico",
    bg: "#0a0806", bg2: "#15100a", panel: "#171109", panelEdge: "#2a1f10",
    ink: "#f3e7cf", muted: "#b69e76", faint: "#6f5f44",
    gold: "#e7b24c", goldHi: "#ffd277", bulb: "#ffd486",
    glowRGB: "255,196,96"
  },
  terciopelo: {
    label: "Terciopelo rojo",
    bg: "#0a0506", bg2: "#160a0c", panel: "#190a0d", panelEdge: "#311318",
    ink: "#f2dede", muted: "#bd9092", faint: "#6e4346",
    gold: "#df3a52", goldHi: "#ff6478", bulb: "#ff7080",
    glowRGB: "255,90,108"
  },
  proyector: {
    label: "Luz de proyector",
    bg: "#05080c", bg2: "#0b1320", panel: "#0a1019", panelEdge: "#14233a",
    ink: "#e7f1fb", muted: "#90a8c2", faint: "#4f6680",
    gold: "#5fc8ff", goldHi: "#a6e4ff", bulb: "#c2ecff",
    glowRGB: "120,210,255"
  },
  sepia: {
    label: "Celuloide sepia",
    bg: "#0d0a06", bg2: "#1a140c", panel: "#1c150d", panelEdge: "#352815",
    ink: "#efe2c8", muted: "#bda77f", faint: "#776346",
    gold: "#c99f59", goldHi: "#e6c483", bulb: "#e9cd92",
    glowRGB: "210,170,100"
  }
};

/* ── Tipografías (Tweak: typography) ─────────────────────────────────────── */
window.FONTS = {
  cartel:  { label: "Cartel", display: "'Bebas Neue', sans-serif", head: "'Oswald', sans-serif", body: "'EB Garamond', serif", dispSpacing: "0.02em", dispWeight: 400 },
  clasica: { label: "Clásica", display: "'Playfair Display', serif", head: "'Playfair Display', serif", body: "'EB Garamond', serif", dispSpacing: "0", dispWeight: 800 },
  neon:    { label: "Neón", display: "'Monoton', cursive", head: "'Oswald', sans-serif", body: "'EB Garamond', serif", dispSpacing: "0.03em", dispWeight: 400 }
};

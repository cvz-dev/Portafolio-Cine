# Imágenes / Pósters

Coloca aquí los pósters de las películas con EXACTAMENTE estos nombres:

- `blackkklansman.jpg`   → BlacKkKlansman
- `django-unchained.jpg` → Django Unchained

## Reglas
- Formato recomendado: **.jpg** (o .png, pero entonces cambia la extensión en `data.js`).
- Proporción ideal: **vertical 2:3** (póster de cine). Ej. 800 × 1200 px.
- Peso: comprime a menos de ~300 KB cada una para que la web cargue rápido
  (puedes usar tinypng.com o squoosh.app).

## ¿Cómo se conecta?
La ruta está definida en `data.js`, en el campo `poster` de cada película:

    poster: "imagenes/blackkklansman.jpg",

Mientras no exista el archivo, la web muestra un placeholder con el número.
En cuanto subas la imagen con el nombre correcto, aparece automáticamente.

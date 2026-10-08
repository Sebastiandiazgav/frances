# Ma famille — Présentation interactive

Presentación interactiva (HTML + CSS + JS) para la tarea de francés "Ma famille".
Diapositivas con **solo imágenes y palabras clave** (sin frases), para hablar y no leer.

## Cómo usarla

1. Abre `index.html` en el navegador (doble click).
2. Navega:
   - **Flechas ← →** o botones de abajo
   - **Puntos** para saltar a una slide
   - **F** o el botón **⛶** para pantalla completa
3. **Haz click en las tarjetas** para voltearlas y revelar la palabra clave.
4. Botón **FR / ES**: cambia el idioma de las palabras clave (practica en francés).
5. Slide de **quiz** interactivo antes del cierre.

> El guion para hablar está en `guion.md` (frases en francés + traducción). Eso NO se muestra en pantalla.

## Estructura

```
frances/
├─ index.html   → estructura
├─ style.css    → diseño
├─ script.js    → interactividad (slides, flip, quiz, idioma)
├─ data.js      → datos de la familia (edítalo aquí)
├─ guion.md     → guion para hablar (no se proyecta)
└─ README.md
```

## Editar los datos

Todo está en `data.js`. Cambia nombres, edades, textos FR/ES o las preguntas del quiz ahí.

## Desplegar (opcional, link público)

Funciona 100% offline, pero si quieres un link para compartir:

- **Netlify Drop**: entra a app.netlify.com/drop y arrastra la carpeta `frances`. Link al instante.
- **GitHub Pages**: sube la carpeta a un repo → Settings → Pages → Branch `main` → `/root`.
- **Vercel**: `vercel` en la carpeta, o importa el repo en vercel.com.

Recomendación: el día de la presentación úsala **offline** (abriendo `index.html`) para no depender del wifi. El link es un extra.

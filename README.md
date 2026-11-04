# Tarjetas digitales

Un solo proyecto, una carpeta por cliente:

    tutarjeta.com/penelope
    tutarjeta.com/estilista

## Crear una tarjeta nueva (1 minuto)

1. Copia la carpeta `plantilla/` y ponle el nombre del cliente en minúsculas, sin espacios ni tildes
   (ejemplo: `maria-reiki`). Ese nombre será la dirección: `tutarjeta.com/maria-reiki`.
2. Abre `datos.js` de esa carpeta y cambia los datos (nombre, teléfono, servicios, enlaces, horario, dirección, colores).
3. Cambia el título y la descripción en `index.html` (líneas con `<title>` y `<meta>`); son los que se ven al compartir el enlace en WhatsApp.
4. Pon la foto del cliente como `foto.jpg` en su carpeta (o cambia el nombre en `datos.js`).
5. Edita `contacto.vcf` con los datos del cliente. Si no lo quieres, agrega `vcf: false,` en `datos.js`.
6. Sube los cambios (ver abajo).

## Qué se edita y qué no

| Archivo | ¿Se edita? |
|---|---|
| `NOMBRE/datos.js` | Sí, por cliente |
| `NOMBRE/index.html` | Solo título y descripción |
| `NOMBRE/contacto.vcf`, `foto.jpg` | Sí, por cliente |
| `assets/style.css` | Solo para cambiar el diseño de TODAS las tarjetas |
| `assets/card.js` | Solo para agregar funciones nuevas a TODAS las tarjetas |

## Publicar en Cloudflare Pages (gratis)

1. Sube esta carpeta a un repositorio de GitHub.
2. En Cloudflare: Workers & Pages → Create → Pages → Connect to Git → elige el repositorio.
3. Framework: None. Build command: vacío. Output directory: `/` (la raíz).
4. Cada vez que subas cambios a GitHub, se publican solos.
5. Dominio propio: Pages → tu proyecto → Custom domains.

(Alternativa sin Git: en Cloudflare Pages usa "Upload assets" y arrastra la carpeta.)

## Probar en tu computadora

Haz doble clic en `NOMBRE/index.html` y funciona, pero el botón de guardar contacto y algunas rutas
se comportan mejor con un servidor local:

    python3 -m http.server 8000

y abre http://localhost:8000/penelope/

## Notas
- La carpeta `plantilla/` queda publicada también; si no la quieres visible, bórrala del repositorio o guárdala fuera del proyecto.
- Las fuentes e íconos se cargan de internet (Google Fonts y cdnjs), así que se necesita conexión.

# Tarjetas digitales

Un solo proyecto, una carpeta por cliente:

    tu-tarjeta.com/penelope
    tu-tarjeta.com/maria-reiki

## Hay dos plantillas

| | `plantilla-basica` | `plantilla-avanzada` |
|---|---|---|
| Diseño | Sencillo: banner, foto, botones, servicios | Más elaborado: tipografía serif, luna y hojas decorativas, iconos por servicio, cinta de oferta, botones tipo píldora |
| Se recolorea | Sí (`tema` en datos.js) | Sí: con un solo color (`tema.principal`) todo el diseño se ajusta |
| Ideal para | Entrega rápida, paquete económico | Paquete Plus, clientes que quieren algo más personalizado |

Ambas se llenan de la misma forma: **solo se edita `datos.js`**.

## Crear una tarjeta nueva (1 minuto)

1. Copia la carpeta `plantilla-basica/` o `plantilla-avanzada/` y ponle el nombre del cliente en
   minúsculas, sin espacios ni tildes (ejemplo: `maria-reiki`). Ese nombre será la dirección.
2. Abre `datos.js` de esa carpeta y cambia los datos.
3. En `index.html` cambia el título y la descripción (`<title>` y `<meta>`); son los que se ven al compartir el enlace.
4. Pon la foto como `foto.jpg` (o cambia el nombre en `datos.js`) y edita `contacto.vcf`.
5. Sube los cambios a GitHub. Cloudflare los publica solo en uno o dos minutos.

## Reglas de datos.js (lo que más se rompe)

- Entre un bloque `{ }` y el siguiente va una **coma**. El último no lleva coma.
- Las comillas siempre se cierran.
- Si algo está mal, la página muestra el error y la línea.
- Los teléfonos van **sin** código de país: `5639399007`. El código se agrega solo con `codigoPais: "52"`.
- Si un campo no aplica, bórralo y esa parte no aparece.

## Campos de datos.js

| Campo | Qué hace |
|---|---|
| `nombre`, `cargo`, `eslogan` | Encabezado básico |
| `credenciales` | Líneas con letra espaciada bajo el nombre |
| `marca {nombre, lema}` | Bloque de nombre del negocio y frase |
| `descripcion` | Párrafo corto de presentación |
| `foto`, `agendaAbierta` | Foto y puntito verde |
| `codigoPais`, `telefono`, `whatsapp`, `llamar` | Contacto (`llamar: false` oculta el botón) |
| `textoWhatsapp`, `subtextoWhatsapp`, `mensajeWhatsapp` | Textos del botón y mensaje precargado |
| `servicios [...]` | Cada uno: `icono`, `nombre`, `etiqueta`, `descripcion`, `extra`, `precio`, `cinta`, `destacado` |
| `cinta` (en un servicio) | Cinta en la esquina para ofertas, ej. `"Precio especial"`. Solo aparece si la pones |
| `nota {icono, texto}` | Aviso bajo los servicios |
| `enlaces [...]` | Redes sociales (`texto`, `url`, `icono`, `color`) |
| `horario {titulo, lineas}` | Caja de horario |
| `direccion` | Genera el mapa de Google automáticamente |
| `tema {principal, texto, textoSuave}` | Colores |
| `vcf: false` | Oculta el botón "Guardar contacto" |

Íconos: fontawesome.com/icons (filtra por **Free**). Ejemplo: `fas fa-spa`, `fab fa-tiktok`.

## Qué archivos se editan

| Archivo | ¿Se edita? |
|---|---|
| `NOMBRE/datos.js`, `foto.jpg`, `contacto.vcf` | Sí, por cliente |
| `NOMBRE/index.html` | Solo título y descripción |
| `assets/style.css` | Cambia el diseño BÁSICO y la base de TODAS las tarjetas |
| `assets/avanzado.css` | Cambia el diseño de todas las tarjetas AVANZADAS |
| `assets/card.js` | Solo para agregar funciones nuevas a todas |

Para dar un diseño propio a UN solo cliente: crea `estilo.css` en su carpeta y enlázalo en su
`index.html` después de los demás `<link rel="stylesheet">`.

## Publicar en Cloudflare

El repositorio de GitHub está conectado a Cloudflare (Workers). Los archivos `wrangler.jsonc` y
`.assetsignore` deben estar en la **raíz** del repositorio (junto a `index.html` y `assets/`).
`.assetsignore` evita que se publiquen el README y las plantillas.

## Probar en tu computadora

    python3 -m http.server 8000

y abre http://localhost:8000/penelope/

## Notas
- Las fuentes e íconos se cargan de internet (Google Fonts y cdnjs).
- Las plantillas no se publican (están en `.assetsignore`).

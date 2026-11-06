/* ==========================================================
   DATOS DEL CLIENTE - PLANTILLA AVANZADA
   - Si un campo no aplica, bórralo y esa parte no aparece.
   - Entre un bloque { } y el siguiente va una COMA (el último no lleva).
   - Los teléfonos van SIN código de país; se agrega solo con codigoPais.
   ========================================================== */
window.TARJETA = {
  nombre: "Nombre del Cliente",
  credenciales: ["Título o especialidad", "Segunda línea (opcional)"],
  marca: {
    nombre: "Nombre del negocio",
    lema: "Frase corta que describe el negocio."
  },
  descripcion: "Una o dos frases sobre tu experiencia o lo que ofreces.",
  foto: "foto.svg",              // cambia por foto.jpg cuando tengas la del cliente
  agendaAbierta: false,         // true = puntito verde de "agenda abierta"

  codigoPais: "52",             // 52 México, 502 Guatemala, 57 Colombia...
  telefono: "5500000000",
  whatsapp: "5500000000",
  llamar: true,                 // false = oculta el botón Llamar
  textoWhatsapp: "Agenda por WhatsApp",
  subtextoWhatsapp: "+52 55 0000 0000",
  mensajeWhatsapp: "Hola, me gustaría más información.",

  tituloServicios: "Servicios",
  iconoServicios: "fas fa-star",   // ícono junto al título (fontawesome.com/icons -> Free)
  servicios: [
    {
      icono: "fas fa-heart",
      nombre: "Servicio 1",
      descripcion: "Descripción breve del servicio.",
      precio: "$000 MXN"
    },
    {
      icono: "fas fa-leaf",
      nombre: "Servicio 2",
      cinta: "Precio especial",          // cinta en la esquina (solo si hay oferta; si no, bórrala)
      descripcion: "Descripción breve del servicio.",
      precio: "$000 MXN"
    },
    {
      icono: "fas fa-moon",
      nombre: "Servicio 3",
      descripcion: "Descripción breve del servicio.",
      extra: "Texto destacado opcional bajo la descripción.",
      precio: "$000 MXN"
    }
  ],
  nota: { icono: "far fa-calendar", texto: "Tu cita se confirma con el pago anticipado." },

  enlaces: [
    { texto: "@usuario", url: "https://instagram.com/usuario", icono: "fab fa-instagram", color: "#e4405f" },
    { texto: "Comunidad en Facebook", url: "https://facebook.com/usuario", icono: "fab fa-facebook", color: "#1877f2" }
  ],

  // Horario y mapa son opcionales: borra el bloque completo si no aplican.
  horario: {
    titulo: "Horario de atención",
    lineas: ["Lunes a Viernes 9:00 - 18:00", "Con previa cita"]
  },
  direccion: "Calle y número, Colonia, Ciudad, País",

  pie: "Nombre del Cliente  |  Negocio",

  // Un solo color y todo el diseño se ajusta. Texto y textoSuave son opcionales.
  tema: {
    principal: "#8e6bc9",
    texto: "#2b1650",
    textoSuave: "#4a3a6b"
  }
};

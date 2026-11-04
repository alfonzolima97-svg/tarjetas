window.TARJETA = {
  tituloPagina: "Penélope Covarrubias - Psicoterapia | Magia & Caos",
  nombre: "Penélope Covarrubias",
  credenciales: ["Licenciada en Psicología", "Maestra en Psicopedagogía"],
  marca: {
    nombre: "Magia & Caos",
    lema: "Donde el caos se transforma en magia y conciencia."
  },
  descripcion: "Más de 10 años acompañando a mujeres a fortalecer su autonomía, seguridad y confianza.",
  foto: "foto.jpg",
  agendaAbierta: false,

  // Los números van SIN el 52; la tarjeta lo agrega sola con codigoPais
  codigoPais: "52",
  telefono: "5639399007",
  whatsapp: "5639399007",
  llamar: false,                        // true = muestra el botón Llamar, false = lo oculta
  textoWhatsapp: "Agenda por WhatsApp",
  subtextoWhatsapp: "+52 56 3939 9007",
  mensajeWhatsapp: "Hola Penélope, me gustaría agendar una sesión.",

  tituloServicios: "Psicoterapia",
  iconoServicios: "fas fa-spa",
  servicios: [
    {
      icono: "fas fa-brain",
      nombre: "Sesión individual",
      descripcion: "Un espacio de escucha sin juicios para comprenderte y construir herramientas para tu día a día.",
      precio: "$555 MXN"
    },
    {
      icono: "fas fa-leaf",
      nombre: "Paquete de 5 sesiones",
      cinta: "Precio especial",
      descripcion: "Sesiones semanales o quincenales.",
      precio: "$2,222 MXN"
    }
  ],
  nota: { icono: "far fa-calendar", texto: "Tu cita se confirma con el pago total anticipado." },

  // OJO: entre un bloque { } y el siguiente va una COMA (la última no lleva)
  enlaces: [
    { texto: "@penelope.magiaycaos", url: "https://instagram.com/penelope.magiaycaos", icono: "fab fa-instagram", color: "#e4405f" },
    { texto: "Comunidad en Facebook", url: "https://www.facebook.com/profile.php?id=100064049319044", icono: "fab fa-facebook", color: "#1877f2" },
    { texto: "Agenda tu cita", url: "https://www.facebook.com/profile.php?id=100064049319044", icono: "fab fa-calendar", color: "#8e6bc9" }
  ],

  pie: "Penélope  |  Magia & Caos",

  // Un solo color y todo el diseño se ajusta. Texto y textoSuave son opcionales.
  tema: {
    principal: "#8e6bc9",
    texto: "#2b1650",
    textoSuave: "#4a3a6b"
  }
};

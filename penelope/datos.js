window.TARJETA = {
  tituloPagina: "Penélope Covarrubias - Psicoterapia | Magia & Caos",
  nombre: "Penélope Covarrubias",
  credenciales: ["Licenciada en Psicología", "Maestra en Psicopedagogía"],
  marca: {
    nombre: "Magia & Caos",
    lema: "Donde el caos se transforma en magia y conciencia."
  },
  descripcion: "Acompaño a mujeres desde hace 10 años que han aprendido a resolverlo todo, pero que en sus relaciones afectivas siguen encontrándose con situaciones que no saben cómo manejar.",
  foto: "foto.jpg",
  agendaAbierta: false,
  
  decoracion: {
  luna: "🌙",
  hojas: "🍃",
  destellos: "✦ ✧"
},

  // Los números van SIN el 52; la tarjeta lo agrega sola con codigoPais
  codigoPais: "52",
  telefono: "5639299007",
  whatsapp: "5639299007",
  llamar: false,                        // true = muestra el botón Llamar, false = lo oculta
  textoWhatsapp: "¿Tienes dudas? Escríbeme por WhatsApp",
  iconoWhatsapp:  "far fa-comment",
  mensajeWhatsapp: "Hola Penélope, me gustaría agendar una sesión.",

  tituloServicios: "Psicoterapia",
  iconoServicios: "fas fa-spa",
  servicios: [
    {
      icono: "fas fa-brain",
      nombre: "Sesión individual",
      descripcion: "Un espacio para comprender los patrones que se repiten en tus relaciones, reconocer qué está influyendo en tus decisiones y desarrollar nuevas formas de relacionarte contigo y con los demás.",
      precio: "$999 MXN"
    },
    {
      icono: "fas fa-leaf",
      nombre: "Paquete de 4 sesiones",
      cinta: "Precio especial",
      descripcion: "Invierte en tu proceso con una tarifa preferencial.",
      precio: "$2,999 MXN"
    }
  ],
  nota: { icono: "far fa-calendar", texto: "Tu cita se confirma con el pago total anticipado." },

  // OJO: entre un bloque { } y el siguiente va una COMA (la última no lleva)
  //enlaces: [
   // { texto: "@penelope.magiaycaos", url: "https://instagram.com/penelope.magiaycaos", icono: "fab fa-instagram", color: "#e4405f" },
  //  { texto: "Comunidad en Facebook", url: "https://www.facebook.com/profile.php?id=100064049319044", icono: "fab fa-facebook", color: "#1877f2" },
   // { texto: "Agenda tu cita", url: "https://www.facebook.com/profile.php?id=100064049319044", icono: "fab fa-calendar", color: "#8e6bc9" }
  //],
  agenda: { texto: "Agenda tu cita", 
    subtexto: "Da el primer paso en tu proceso",
    url: "https://calendly.com/penelopecovarrubias/30min" },

tituloRedes: "Conoce más de Magia & Caos",
  redes: [
    { nombre: "Instagram", url: "https://instagram.com/penelope.magiaycaos", icono: "fab fa-instagram", color: "#e4405f" },
    { nombre: "Facebook",  url: "https://www.facebook.com/profile.php?id=100064049319044", icono: "fab fa-facebook", color: "#1877f2" }
  ],

  pie: "Penélope  |  Magia & Caos",

  // Un solo color y todo el diseño se ajusta. Texto y textoSuave son opcionales.
  tema: {
    principal: "#8e6bc9",
    texto: "#2b1650",
    textoSuave: "#4a3a6b"
  }
};

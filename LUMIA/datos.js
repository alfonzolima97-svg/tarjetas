
window.TARJETA = {
  tituloPagina: "LUMIA Studio",
  nombre: "LUMIA Studio",
  credenciales: ["Empresa de Programación"],
  marca: {
    nombre: "Innovación que conecta, diseño que destaca.",
    //descripcion: "Innovación que conecta, diseño que destaca."
  },
  //descripcion: "Creamos soluciones digitales que impulsan tu presencia en internet. Diseñamos tarjetas de presentación digitales, páginas web y herramientas personalizadas para ayudarte a conectar con todos tus clientes.",
  foto: "foto.JPG",              // cambia por foto.jpg cuando tengas la del cliente
  agendaAbierta: true,         // true = puntito verde de "agenda abierta"

   // Personaliza la forma de la foto: circular, cuadrada, redondeada, ovalada, hexagonal, arco o diamante.
  fotoEstilo: {
    forma: "redondeada",
    tamano: 170,  // píxeles (80 a 300)
    borde: 5,     // grosor del borde (0 a 20)
    sombra: true
  },

  decoracion: {
  elementos: [
    // Luna
    {
      tipo: "icono",
      contenido: "fa-solid fa-laptop-code",
      posicion: "banner-izquierda",
      tamano: 40,
      moverX: -20,
      moverY: 0,
      rotacion: 0,
      opacidad: 1,
      color: "#388DFF",
      capa: 3
    },

    // Hoja izquierda
    {
      tipo: "icono",
      contenido: "fa-solid fa-file-code",
      posicion: "foto-izquierda",
      tamano: 20,
      moverX: 20,
      //moverY: 0,
      //rotacion: 0,
      //opacidad: 0,
      //color: "",
      //capa: 0
    },

    // Hoja derecha
    {
      tipo: "icono",
      contenido: "fa-solid fa-code",
      posicion: "foto-derecha",
      tamano: 20,
      moverX: -20,
      //moverY: -50,
      //rotacion: 0,
      //opacidad: 0,
      //color: "",
      //capa: 0
    },

    // deracion superior derecha
    {
      tipo: "icono",
      contenido: "fa-solid fa-laptop-code",
      posicion: "banner-derecha",
      tamano: 40,
      moverX: 20,
      moverY: 5,
      rotacion: 0,
      opacidad: 1,
      color: "#388DFF",
      capa: 3
    }
  ]
},

  codigoPais: "52",             // 52 México, 502 Guatemala, 57 Colombia...
  telefono: "5579770527",
  whatsapp: "5579770527",
  llamar: false,                 // false = oculta el botón Llamar
  textoWhatsapp: "¿Tienes dudas? Escríbeme por WhatsApp",
  iconoWhatsapp:  "far fa-comment",
  mensajeWhatsapp: "Hola, me gustaría más información.",

  tituloServicios: "Servicios",
  iconoServicios: "fas fa-star",   // ícono junto al título (fontawesome.com/icons -> Free)
  servicios: [
    {
      icono: "fa-regular fa-circle-user",
      nombre: "Tarjeta Digital Básica",
      descripcion: "Creación de tu tarjeta digital con diseños y estructura basica (sin cambios mensuales, incluye dominio y hosting).",
      precio: "$299 MXN"
    },
    {
      icono: "fa-solid fa-circle-user",
      nombre: "Tarjeta Digital Ejecutiva",
      //cinta: "Precio especial",          // cinta en la esquina ( Solo si hay oferta; si no, bórrala)
      descripcion: "Creación de tu tarjeta digital con diseños y estructuras más avanzadas, integración de mapa (incluye 1 cambio mensual, dominio y hosting gratis).",
      precio: "$499 MXN"
    },
    {
      icono: "fa-solid fa-code",
      nombre: "Página Web",
      cinta: "Precio especial",
      descripcion: "Creación de su pagina web para aumentar el alcance de su negocio.",
      //extra: "Texto destacado opcional bajo la descripción.",
      precio: "Desde $1,899 MXN"
    },
    {
      icono: "fa-solid fa-palette",
      nombre: "Diseños Personalizados",
      //cinta: "Precio especial",
      descripcion: "Creación de su página web o tarjeta digital interactiva con estilo propio.",
      extra: "Que tu diseño deje huella.",
      precio: "Desde $799"
    }
  ],
  //nota: { icono: "far fa-calendar", texto: "Tu cita se confirma con el pago anticipado." },

  //enlaces: [
    //{ texto: "@usuario", url: "https://instagram.com/usuario", icono: "fab fa-instagram", color: "#e4405f" },
    //{ texto: "Comunidad en Facebook", url: "https://facebook.com/usuario", icono: "fab fa-facebook", color: "#1877f2" }
 // ],

    //agenda: { texto: "Agenda tu cita", 
    //subtexto: "Da el primer paso en tu proceso",
    //url: "https://calendly.com/" },

  // Horario y mapa son opcionales: borra el bloque completo si no aplican.
 // horario: {
   // titulo: "Horario de atención",
   // lineas: ["Lunes a Viernes 9:00 - 18:00", "Con previa cita"]
  //},
  //direccion: "Calle y número, Colonia, Ciudad, País",

// tituloRedes: "Conoce más de LUMIA Studio",
 //  redes: [
  //   { nombre: "Instagram", url: "https://instagram.com/", icono: "fab fa-instagram", color: "#e4405f" },
    // { nombre: "Facebook",  url: "https://www.facebook.com/", icono: "fab fa-facebook", color: "#1877f2" }
 //  ],

  pie: "LUMIA Studio",

  // Un solo color y todo el diseño se ajusta. Texto y textoSuave son opcionales.
  tema: {
    principal: "#388DFF",
    texto: "#5E9FF7",
    textoSuave: "#478DFF"
  }
};

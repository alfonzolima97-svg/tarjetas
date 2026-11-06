/* ==========================================================
   DATOS DEL CLIENTE  (único archivo que se edita por cliente)
   - Si un campo no aplica, bórralo y esa sección no aparece.
   - Los teléfonos van sin código de país ni signos; se agrega solo con codigoPais.
   - Entre un bloque { } y el siguiente va una COMA (el último no lleva).
   ========================================================== */
window.TARJETA = {
  nombre: "Alfonso Lima",
  cargo: "Creador de Paginas Web",
  eslogan: "Se crean todo tipo de paginas Web desde tarjetas digitales a tiendas en linea avanzadas.",
  foto: "foto.jpg",            // pon aquí foto.jpg cuando tengas la del cliente
  agendaAbierta: true,         // true = puntito verde de "agenda abierta"

  codigoPais: "52",            // 52 México, 502 Guatemala, 57 Colombia...
  telefono: "5579770527",      // sin código de país; botón Llamar
  whatsapp: "5579770527",      // botón WhatsApp (si lo omites usa el teléfono)
  mensajeWhatsapp: "Hola, me gustaría más información.",

  // vcf: false,               // descomenta para ocultar el botón "Guardar contacto"

  tituloServicios: "Servicios",
  iconoServicios: "fas fa-star",   // cualquier ícono de fontawesome.com/icons
  servicios: [
    { nombre: "Tarjeta Digital Basica.", descripcion: "Se genera una tarjeta digitalm con diseños y estructura basica.(sin cambios mensuales, incuye dominio y hosting gratis)", precio: "$299" },
    { nombre: "Targeta Digital Ejecutiva.", descripcion: "Se genera una tarjeta digital con diseños y estructuras mas avanzadas, integracion de mapa.(incluye 1 cambio mensual, dominio y hosting gratis)", precio: "$499" },
    { nombre: "Pagina Web", descripcion: "Creacion de su pagina web para aumentar el alcance de su negocio.", precio: "Desde $1899" }
  ],

  enlaces: [
    { texto: "Instagram", url: "https://instagram.com/usuario",  icono: "fab fa-instagram", color: "#e4405f" },
    { texto: "Facebook",  url: "https://facebook.com/usuario",   icono: "fab fa-facebook",  color: "#1877f2" }
    // Otros íconos: "fab fa-tiktok", "fab fa-youtube", "fas fa-globe"
  ],

  horario: {
    titulo: "Horario",
    lineas: ["Lunes a Viernes 12:00 - 20:00", "Contacto via Whatsapp"]
  },

  // Escribe la dirección tal como la buscarías en Google Maps. Bórrala si no hay local.
  // direccion: "Calle y número, Colonia, Ciudad, País",

  pie: "Tarjeta Digital Interactiva",

  // Colores opcionales. Bórralos para usar el morado por defecto.
  tema: {
    principal: "#57A7FF"
  }
};

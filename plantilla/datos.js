/* ==========================================================
   DATOS DEL CLIENTE  (único archivo que se edita por cliente)
   - Si un campo no aplica, bórralo y esa sección no aparece.
   - Los teléfonos van con código de país, sin espacios ni signos.
   ========================================================== */
window.TARJETA = {
  nombre: "Nombre del Cliente",
  cargo: "Profesión o especialidad",
  eslogan: "Frase corta que describe el servicio",
  foto: "foto.svg",            // pon aquí foto.jpg cuando tengas la del cliente
  agendaAbierta: true,         // true = puntito verde de "agenda abierta"

  telefono: "525500000000",    // botón Llamar
  whatsapp: "525500000000",    // botón WhatsApp (si lo omites usa el teléfono)
  mensajeWhatsapp: "Hola, me gustaría más información.",

  // vcf: false,               // descomenta para ocultar el botón "Guardar contacto"

  tituloServicios: "Servicios",
  iconoServicios: "fas fa-star",   // cualquier ícono de fontawesome.com/icons
  servicios: [
    { nombre: "Servicio 1", descripcion: "Descripción breve.", precio: "$000" },
    { nombre: "Servicio 2", descripcion: "Descripción breve.", precio: "$000" },
    { nombre: "Servicio 3", descripcion: "Descripción breve.", precio: "$000" }
  ],

  enlaces: [
    { texto: "Instagram", url: "https://instagram.com/usuario",  icono: "fab fa-instagram", color: "#e4405f" },
    { texto: "Facebook",  url: "https://facebook.com/usuario",   icono: "fab fa-facebook",  color: "#1877f2" }
    // Otros íconos: "fab fa-tiktok", "fab fa-youtube", "fas fa-globe"
  ],

  horario: {
    titulo: "Horario",
    lineas: ["Lunes a Viernes 9:00 - 18:00", "Con previa cita"]
  },

  // Escribe la dirección tal como la buscarías en Google Maps. Bórrala si no hay local.
  direccion: "Calle y número, Colonia, Ciudad, País",

  pie: "Tarjeta Digital Interactiva",

  // Colores opcionales. Bórralos para usar el morado por defecto.
  tema: {
    principal: "#9333ea",
    banner: "linear-gradient(135deg, #9333ea 0%, #c084fc 100%)"
  }
};

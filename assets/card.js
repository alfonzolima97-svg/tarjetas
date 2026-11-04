/* ==========================================================
   MOTOR COMPARTIDO DE TARJETAS
   Lee el objeto TARJETA (definido en datos.js de cada cliente)
   y construye la tarjeta. No hace falta editar este archivo
   para crear tarjetas nuevas.
   ========================================================== */

(function () {
  const d = window.TARJETA;
  if (!d) {
    document.body.textContent = 'Falta el archivo datos.js';
    return;
  }

  // Escapa texto para que nunca se interprete como HTML
  const esc = (s = '') =>
    String(s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));

  // Solo dígitos: 5215639299007
  const soloDigitos = (s = '') => String(s).replace(/\D/g, '');

  // ---------- Tema (colores) ----------
  if (d.tema) {
    const mapa = {
      principal: '--primary',
      texto: '--text-main',
      textoSuave: '--text-muted',
      fondo: '--bg-gradient',
      banner: '--banner-gradient',
      superficie: '--surface',
      superficieHover: '--surface-hover',
      etiqueta: '--tag-bg',
      borde: '--border-color',
      botonOscuro: '--dark-btn',
      botonOscuroHover: '--dark-btn-hover'
    };
    for (const [clave, variable] of Object.entries(mapa)) {
      if (d.tema[clave]) document.documentElement.style.setProperty(variable, d.tema[clave]);
    }
  }

  // ---------- Título de la pestaña ----------
  document.title = d.tituloPagina || `${d.nombre} - ${d.cargo || ''}`.trim();

  // ---------- Piezas de la tarjeta ----------
  const piezas = [];

  piezas.push('<div class="card-banner"></div>');

  // Perfil
  piezas.push(`
    <div class="profile">
      <div class="avatar-wrapper">
        <img src="${esc(d.foto || 'foto.jpg')}" alt="${esc(d.nombre)}" class="profile-pic">
        ${d.agendaAbierta !== false ? '<span class="status-badge" title="Agenda abierta"></span>' : ''}
      </div>
      <h1>${esc(d.nombre)}</h1>
      ${d.cargo ? `<p class="title">${esc(d.cargo)}</p>` : ''}
      ${d.eslogan ? `<p class="tagline">${esc(d.eslogan)}</p>` : ''}
    </div>`);

  // Botones de acción (WhatsApp / Llamar)
  const tel = soloDigitos(d.telefono);
  const wa = soloDigitos(d.whatsapp || d.telefono);
  const botones = [];
  if (wa) {
    const msg = d.mensajeWhatsapp ? `?text=${encodeURIComponent(d.mensajeWhatsapp)}` : '';
    botones.push(`<a href="https://wa.me/${wa}${msg}" target="_blank" rel="noopener" class="btn btn-whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</a>`);
  }
  if (tel) {
    botones.push(`<a href="tel:+${tel}" class="btn btn-call"><i class="fas fa-phone-alt"></i> Llamar</a>`);
  }
  if (botones.length) {
    piezas.push(`<div class="action-grid${botones.length === 1 ? ' single' : ''}">${botones.join('')}</div>`);
  }

  // Guardar contacto (archivo contacto.vcf en la carpeta del cliente)
  if (d.vcf !== false) {
    piezas.push(`
      <section>
        <a href="${esc(d.vcf || 'contacto.vcf')}" download class="btn btn-save">
          <i class="fas fa-address-book"></i> Guardar contacto
        </a>
      </section>`);
  }

  // Servicios
  if (d.servicios && d.servicios.length) {
    const items = d.servicios.map((s) => `
      <div class="service-item">
        <div class="service-info">
          <span class="service-name">${esc(s.nombre)}</span>
          ${s.descripcion ? `<span class="service-desc">${esc(s.descripcion)}</span>` : ''}
        </div>
        ${s.precio ? `<span class="service-price">${esc(s.precio)}</span>` : ''}
      </div>`).join('');
    piezas.push(`
      <section class="services">
        <h2><i class="${esc(d.iconoServicios || 'fas fa-spa')}"></i> ${esc(d.tituloServicios || 'Servicios')}</h2>
        ${items}
      </section>`);
  }

  // Enlaces (redes sociales, sitio web, etc.)
  if (d.enlaces && d.enlaces.length) {
    const links = d.enlaces.map((e) => `
      <a href="${esc(e.url)}" target="_blank" rel="noopener" class="link-card">
        <i class="${esc(e.icono)}" ${e.color ? `style="color:${esc(e.color)}"` : ''}></i> ${esc(e.texto)}
      </a>`).join('');
    piezas.push(`<section class="links">${links}</section>`);
  }

  // Horario
  if (d.horario) {
    piezas.push(`
      <section>
        <div class="info-box">
          <h3><i class="far fa-clock"></i> ${esc(d.horario.titulo || 'Horario')}</h3>
          <p>${(d.horario.lineas || []).map(esc).join('<br>')}</p>
        </div>
      </section>`);
  }

  // Mapa (se genera a partir de la dirección, sin necesidad de API key)
  if (d.direccion) {
    const src = `https://www.google.com/maps?q=${encodeURIComponent(d.direccion)}&output=embed`;
    piezas.push(`
      <section>
        <div class="map-container">
          <iframe src="${src}" title="Ubicación" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>`);
  }

  // Pie
  if (d.pie) {
    piezas.push(`<div class="card-footer">${esc(d.pie)}</div>`);
  }

  document.getElementById('tarjeta').innerHTML = piezas.join('');
})();

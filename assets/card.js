/* ==========================================================
   MOTOR COMPARTIDO DE TARJETAS
   Lee el objeto TARJETA (definido en datos.js de cada cliente)
   y construye la tarjeta. No hace falta editar este archivo
   para crear tarjetas nuevas.
   ========================================================== */

(function () {
  const d = window.TARJETA;
  if (!d) {
    const url = new URL('datos.js', location.href).href;
    document.body.innerHTML =
      '<div style="font-family:sans-serif;max-width:480px;margin:2rem auto;padding:0 1rem;line-height:1.6">' +
      '<h2>No se pudo cargar datos.js</h2>' +
      '<p>La página lo buscó en:<br><code id="dg-url" style="word-break:break-all"></code></p>' +
      '<p id="dg-st">Comprobando…</p></div>';
    document.getElementById('dg-url').textContent = url;
    if (window.__errDatos) {
      document.getElementById('dg-st').textContent =
        'Hay un error de escritura dentro de datos.js: ' + window.__errDatos +
        '. Casi siempre es una coma que falta entre dos bloques { } o una comilla sin cerrar.';
      return;
    }
    fetch(url).then(function (r) {
      return r.text().then(function (t) {
        document.getElementById('dg-st').textContent = r.ok
          ? 'El servidor responde ' + r.status + ' pero el contenido no define la tarjeta. Empieza con: ' + JSON.stringify(t.slice(0, 50))
          : 'El servidor responde ' + r.status + ': el archivo NO existe en esa dirección.';
      });
    }).catch(function (e) {
      document.getElementById('dg-st').textContent = 'No se pudo consultar: ' + e;
    });
    return;
  }

  // Escapa texto para que nunca se interprete como HTML
  const esc = (s = '') =>
    String(s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));

// ---------- Sistema de decoraciones ----------
const POSICIONES_DECORACION = [
  "banner-izquierda",
  "banner-derecha",
  "foto-izquierda",
  "foto-derecha"
];

const numeroSeguro = (valor, defecto, minimo, maximo) => {
  const n = Number(valor);
  return Number.isFinite(n) ? Math.min(maximo, Math.max(minimo, n)) : defecto;
};

const colorSeguro = (valor) =>
  typeof valor === "string" && /^(#[0-9a-f]{3,8}|[a-z]{3,20}|rgba?\([\d\s.,%]+\))$/i.test(valor)
    ? valor
    : "";


const renderDecoracion = (elemento = {}) => {
  if (!elemento || !POSICIONES_DECORACION.includes(elemento.posicion)) return "";

  const clase = `decoracion-item ${elemento.posicion}`;
  const contenido = String(elemento.contenido || "");

  const tamano = numeroDecoracion(elemento.tamano, 32, 8, 400);
  const moverX = numeroDecoracion(elemento.moverX, 0);
  const moverY = numeroDecoracion(elemento.moverY, 0);
  const rotacion = numeroDecoracion(elemento.rotacion, 0, -360, 360);
  const opacidad = Math.min(1, Math.max(0, Number(elemento.opacidad ?? 1)));
  const capa = numeroDecoracion(elemento.capa, 3, 0, 20);

  const colorValido = /^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(elemento.color || "");
  const color = colorValido ? elemento.color : "currentColor";

  const estilo = `
    --deco-size:${tamano}px;
    --deco-x:${moverX}px;
    --deco-y:${moverY}px;
    --deco-rotate:${rotacion}deg;
    --deco-opacity:${Number.isFinite(opacidad) ? opacidad : 1};
    --deco-layer:${capa};
    --deco-color:${color};
  `;

  if (elemento.tipo === "emoji") {
    return `<span class="${clase}" style="${estilo}">${esc(contenido)}</span>`;
  }

  if (elemento.tipo === "icono") {
    return `<i class="${clase} ${esc(contenido)}" style="${estilo}" aria-hidden="true"></i>`;
  }

  if (elemento.tipo === "imagen") {
    const esRutaLocal =
      /^(?:\.\.\/assets\/decoraciones\/|assets\/decoraciones\/)?[\w./-]+\.(svg|png|jpe?g|webp)$/i.test(contenido)
      && !contenido.includes("\\")
      && !contenido.startsWith("/")
      && !contenido.split("/").includes("..")
      || /^\.\.\/assets\/decoraciones\/[\w.-]+\.(svg|png|jpe?g|webp)$/i.test(contenido);

    const esUrlSegura = /^https:\/\/[^\s"'<>]+$/i.test(contenido);

    if (!esRutaLocal && !esUrlSegura) return "";

    if (elemento.colorear && colorValido) {
      return `<span
        class="${clase} decoracion-coloreada"
        style="${estilo};--deco-mask:url('${esc(contenido)}')"
        aria-hidden="true"></span>`;
    }

    return `<img class="${clase}" style="${estilo}" src="${esc(contenido)}" alt="" aria-hidden="true">`;
  }

  return "";
};


const decoraciones = Array.isArray(d.decoracion?.elementos)
  ? d.decoracion.elementos
  : [];

const decoracionesBanner = decoraciones
  .filter(e => e && e.posicion?.startsWith("banner-"))
  .map(renderDecoracion)
  .join("");

const decoracionesFoto = decoraciones
  .filter(e => e && e.posicion?.startsWith("foto-"))
  .map(renderDecoracion)
  .join("");

  // Solo dígitos: 5215639299007
  const soloDigitos = (s = '') => String(s).replace(/\D/g, '');

  // Si el número viene sin código de país (10 dígitos o menos) se le agrega codigoPais (por defecto 52 = México)
  const conPais = (s = '') => {
    const x = soloDigitos(s);
    return x && x.length <= 10 ? String(d.codigoPais || '52') + x : x;
  };

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

  // ---------- Forma y tamaño de la fotografía ----------
  const fotoEstilo = d.fotoEstilo || {};
  const formasFoto = ["circular", "cuadrada", "redondeada", "ovalada", "hexagonal", "arco", "diamante"];
  const formaFoto = formasFoto.includes(fotoEstilo.forma) ? fotoEstilo.forma : "circular";
  const fotoTamano = numeroSeguro(fotoEstilo.tamano, 170, 80, 300);
  const fotoBorde = numeroSeguro(fotoEstilo.borde, 5, 0, 20);
  const fotoSombra = fotoEstilo.sombra === false ? "none" : "";
  const fotoVars = `--foto-size:${fotoTamano}px;--foto-border:${fotoBorde}px;${fotoSombra ? `--foto-shadow:${fotoSombra};` : ""}`;

  // ---------- Piezas de la tarjeta ----------
  const piezas = [];



piezas.push(`
  <div class="card-banner">
    ${decoracionesBanner}
  </div>
`);

  // Perfil
  piezas.push(`
    <div class="profile">
      <div class="avatar-wrapper">
      ${decoracionesFoto}
        <img src="${esc(d.foto || 'foto.jpg')}" alt="${esc(d.nombre)}" class="profile-pic foto-forma-${formaFoto}" style="${fotoVars}">
        ${d.agendaAbierta !== false ? '<span class="status-badge" title="Agenda abierta"></span>' : ''}
      </div>
      <h1>${esc(d.nombre)}</h1>
      ${d.cargo ? `<p class="title">${esc(d.cargo)}</p>` : ''}
      ${d.eslogan ? `<p class="tagline">${esc(d.eslogan)}</p>` : ''}
      ${d.credenciales && d.credenciales.length ? `<p class="credentials">${d.credenciales.map(esc).join('<br>')}</p>` : ''}
      ${d.marca ? `<div class="brand"><h2>${esc(d.marca.nombre)}</h2>${d.marca.lema ? `<p>${esc(d.marca.lema)}</p>` : ''}</div>` : ''}
      ${d.descripcion ? `<p class="about">${esc(d.descripcion)}</p>` : ''}
    </div>`);

  // Botones de acción (WhatsApp / Llamar)
  const tel = conPais(d.telefono);
  const wa = conPais(d.whatsapp || d.telefono);
  const botones = [];
  if (wa) {
    const msg = d.mensajeWhatsapp ? `?text=${encodeURIComponent(d.mensajeWhatsapp)}` : '';
    const waTexto = d.textoWhatsapp
      ? `<span class="btn-text"><strong>${esc(d.textoWhatsapp)}</strong>${d.subtextoWhatsapp ? `<small>${esc(d.subtextoWhatsapp)}</small>` : ''}</span>`
      : 'WhatsApp';
    botones.push(`<a href="https://wa.me/${wa}${msg}" target="_blank" rel="noopener" class="btn btn-whatsapp"><i class="${esc(d.iconoWhatsapp || 'fab fa-whatsapp')}"></i> ${waTexto}</a>`);
  }
    if (d.agenda && /^https?:\/\//i.test(d.agenda.url || '')) {
        botones.push(`<a href="${esc(d.agenda.url)}" target="_blank" rel="noopener" class="btn btn-agenda"><span class="agenda-titulo"><i class="${esc(d.agenda.icono || 'far fa-calendar-check')}"></i> ${esc(d.agenda.texto || 'Agenda tu cita')}</span>${d.agenda.subtexto ? `<small>${esc(d.agenda.subtexto)}</small>` : ''}</a>`);
  }
  if (tel && d.llamar !== false) {
    botones.push(`<a href="tel:+${tel}" class="btn btn-call"><i class="fas fa-phone-alt"></i> Llamar</a>`);
  }
  if (botones.length) {
    piezas.push(`<div class="action-grid${botones.length === 1 ? ' single' : ''}">${botones.join('')}</div>`);
  }

  // Guardar contacto (archivo contacto.vcf en la carpeta del cliente)
  if (d.vcf !== false) {
    piezas.push(`
      <section class="save">
        <a href="${esc(d.vcf || 'contacto.vcf')}" download class="btn btn-save">
          <i class="fas fa-address-book"></i> Guardar contacto
        </a>
      </section>`);
  }

  // Servicios
  if (d.servicios && d.servicios.length) {
    const items = d.servicios.map((s) => `
      <div class="service-item${s.destacado ? ' featured' : ''}${s.cinta ? ' con-cinta' : ''}">
        ${s.cinta ? `<span class="service-ribbon">${esc(s.cinta)}</span>` : ''}
        ${s.icono ? `<span class="service-icon"><i class="${esc(s.icono)}"></i></span>` : ''}
        <div class="service-info">
          <span class="service-name">${esc(s.nombre)}</span>
          ${s.etiqueta ? `<span class="service-tag">${esc(s.etiqueta)}</span>` : ''}
          ${s.descripcion ? `<span class="service-desc">${esc(s.descripcion)}</span>` : ''}
          ${s.extra ? `<span class="service-extra">${esc(s.extra)}</span>` : ''}
        </div>
        ${s.precio ? `<span class="service-price">${esc(s.precio)}</span>` : ''}
      </div>`).join('');
    piezas.push(`
      <section class="services">
        <h2><i class="${esc(d.iconoServicios || 'fas fa-spa')}"></i> ${esc(d.tituloServicios || 'Servicios')}</h2>
        ${items}
        ${d.nota ? `<p class="service-note"><i class="${esc(d.nota.icono || 'far fa-calendar')}"></i> ${esc(d.nota.texto)}</p>` : ''}
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
      <section class="horario">
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
      <section class="mapa">
        <div class="map-container">
          <iframe src="${src}" title="Ubicación" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>`);
  }
  // Redes sociales: solo íconos circulares
  if (d.redes && d.redes.length) {
    const iconos = d.redes
      .filter((r) => /^https?:\/\//i.test(r.url || ''))
      .map((r) => `<a href="${esc(r.url)}" target="_blank" rel="noopener" class="social-icon" aria-label="${esc(r.nombre || 'Red social')}" title="${esc(r.nombre || '')}"><i class="${esc(r.icono)}"${r.color ? ` style="color:${esc(r.color)}"` : ''}></i></a>`)
      .join('');
        piezas.push(`<section class="redes">${d.tituloRedes ? `<h3>${esc(d.tituloRedes)}</h3>` : ''}<div class="redes-iconos">${iconos}</div></section>`);
  }


  // Pie
  if (d.pie) {
    piezas.push(`<div class="card-footer">${esc(d.pie)}</div>`);
  }

  document.getElementById('tarjeta').innerHTML = piezas.join('');
})();

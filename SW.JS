/* ANTIBULLAS — script mejorado
   Mejoras aplicadas:
   - Filtro de días con botones
   - Indicador EN CURSO con hora real
   - Etiquetas SALE/LLEGA en programa
   - Día en cada hermandad del programa
   - Scroll al top al cambiar vista
   - role="list" en contenedor
   - Botón limpiar búsqueda
   - Coordenadas en bullas para Leaflet
*/

/* ============================================================
   DATOS COMPLETOS
   ============================================================ */
const DATA = {
    bullas: [
        {
            d: "DOMINGO DE RAMOS",
            z: "CUESTA DEL ROSARIO / FRANCOS",
            h: "16:30 - 19:30",
            l: "CRÍTICO",
            c: "Confluencia de La Borriquita y El Amor. Bloqueo total de acceso al centro.",
            e: "Use Plaza del Pan hacia Puente y Pellón. Evite el eje Francos.",
            img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Calle_Sierpes_%28Sevilla%29_01.jpg",
            lat: 37.3917, lng: -5.9916
        },
        {
            d: "DOMINGO DE RAMOS",
            z: "POSTIGO / ALMIRANTAZGO",
            h: "17:00 - 21:00",
            l: "ALTO",
            c: "Paso de Jesús Despojado y La Paz. Tapón de acceso al Arenal.",
            e: "Use el Paseo Colón y acceda por la calle Antonia Díaz.",
            img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Torre_del_Oro_%28Sevilla%29_--_02.jpg",
            lat: 37.3839, lng: -5.9963
        },
        {
            d: "DOMINGO DE RAMOS",
            z: "SAN JUAN DE LA PALMA / FERIA",
            h: "19:00 - 23:00",
            l: "CRÍTICO",
            c: "Salida de La Amargura. Cangrejada histórica en la calle Feria.",
            e: "La Alameda de Hércules es el único pulmón de escape real.",
            img: "https://upload.wikimedia.org/wikipedia/commons/0/08/SevillaNazarenoHSanRoque02.JPG",
            lat: 37.3984, lng: -5.9905
        },
        {
            d: "LUNES SANTO",
            z: "PUERTA CARMONA / ÁGUILAS",
            h: "15:30 - 19:00",
            l: "ALTO",
            c: "Cruce de San Pablo y La Redención. Flujo ininterrumpido.",
            e: "Use el Muro de los Navarros hacia Puerta de Osario para bordear.",
            img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Semana_santa-capataz_sevilla.JPG",
            lat: 37.3912, lng: -5.9754
        },
        {
            d: "LUNES SANTO",
            z: "ORFILA / JAVIER LASSO",
            h: "18:30 - 21:30",
            l: "ALTO",
            c: "Santa Marta. Paso lento y respetuoso con gran aforo en calle estrecha.",
            e: "Corte por calle Amor de Dios hacia la Alameda.",
            img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Sevilla._Vista_desde_la_calle_de_Mateos_Gago.jpg",
            lat: 37.3946, lng: -5.9902
        },
        {
            d: "LUNES SANTO",
            z: "GARCÍA DE VINUESA / ARENAL",
            h: "20:00 - 00:00",
            l: "ALTO",
            c: "Regreso de Las Aguas y El Museo hacia el Postigo.",
            e: "No intente cruzar el Arco. Use calle Arfe hacia el río.",
            img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Guadalquivir_%26_Torre_del_Oro_in_Seville.JPG",
            lat: 37.3853, lng: -5.9968
        },
        {
            d: "MARTES SANTO",
            z: "ALFALFA / ÁGUILAS",
            h: "17:30 - 22:00",
            l: "CRÍTICO",
            c: "San Esteban, El Cerro y Candelaria confluyen en el mismo eje.",
            e: "Zona impracticable. Rodee por Menéndez Pelayo obligatoriamente.",
            img: "https://upload.wikimedia.org/wikipedia/commons/7/72/SemanaSantaSevillaGenoveva2.jpg",
            lat: 37.3920, lng: -5.9882
        },
        {
            d: "MARTES SANTO",
            z: "PUERTA DE JEREZ",
            h: "18:00 - 21:30",
            l: "ALTO",
            c: "Entrada de Los Estudiantes. Tapón en San Gregorio.",
            e: "Bordee por el Paseo Cristina hacia la Torre del Oro.",
            img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Torre_del_Oro_%28Sevilla%29_--_02.jpg",
            lat: 37.3826, lng: -5.9933
        },
        {
            d: "MIÉRCOLES SANTO",
            z: "ORFILA / SAN ANDRÉS",
            h: "20:30 - 01:00",
            l: "CRÍTICO",
            c: "Paso de Los Panaderos. Ratonera sin salida por estrechez.",
            e: "Use calle Imagen hacia la Encarnación para ganar espacio.",
            img: "https://upload.wikimedia.org/wikipedia/commons/0/08/SevillaNazarenoHSanRoque02.JPG",
            lat: 37.3956, lng: -5.9898
        },
        {
            d: "MIÉRCOLES SANTO",
            z: "PUENTE SAN BERNARDO",
            h: "15:00 - 19:00",
            l: "ALTO",
            c: "San Bernardo hacia el centro. Puerta de la Carne colapsada.",
            e: "Use la pasarela ferroviaria si viene del Prado.",
            img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Guadalquivir_and_Triana_in_Seville.JPG",
            lat: 37.3844, lng: -5.9798
        },
        {
            d: "LA MADRUGÁ",
            z: "MAGDALENA / SAN PABLO",
            h: "02:00 - 07:30",
            l: "MÁXIMO",
            c: "Cruce Esperanza de Triana y Gran Poder. Riesgo de movilidad.",
            e: "Use Puente de San Telmo. El Puente de Triana estará bloqueado.",
            img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Semana_santa-capataz_sevilla.JPG",
            lat: 37.3882, lng: -5.9948
        },
        {
            d: "LA MADRUGÁ",
            z: "ARCO DE LA MACARENA",
            h: "23:00 - 13:30",
            l: "CRÍTICO",
            c: "Salida y recogida de la Macarena. Masificación extrema.",
            e: "Resolana hacia la Barqueta para evacuar el barrio.",
            img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Sevilla._Puerta_de_la_Macarena.jpg",
            lat: 37.4008, lng: -5.9895
        },
        {
            d: "LA MADRUGÁ",
            z: "CUNA / SALVADOR",
            h: "01:30 - 06:30",
            l: "ALTO",
            c: "Regreso del Silencio hacia San Antonio Abad.",
            e: "Busque calle Sierpes. Mantenga silencio absoluto.",
            img: "https://upload.wikimedia.org/wikipedia/commons/5/53/La_Giralda._Sevilla._01.JPG",
            lat: 37.3927, lng: -5.9924
        }
    ],

    programa: [
        { n: "LA BORRIQUITA",        dia: "DOMINGO DE RAMOS",     s: "14:35", e: "19:00", r: "Salvador, Cuna, Orfila, Javier Lasso de la Vega, Trajano, Duque, Campana.",      img: "https://upload.wikimedia.org/wikipedia/commons/0/08/SevillaNazarenoHSanRoque02.JPG" },
        { n: "LA PAZ",               dia: "DOMINGO DE RAMOS",     s: "12:45", e: "00:50", r: "Río de la Plata, Parque María Luisa, Palos de la Frontera, Arfe, Postigo.",      img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Torre_del_Oro_%28Sevilla%29_--_02.jpg" },
        { n: "LA HINIESTA",          dia: "DOMINGO DE RAMOS",     s: "13:00", e: "02:00", r: "San Julián, Relator, Feria, Alameda, Trajano, Duque, Campana.",                  img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Calle_Sierpes_%28Sevilla%29_01.jpg" },
        { n: "LA AMARGURA",          dia: "DOMINGO DE RAMOS",     s: "19:40", e: "01:10", r: "San Juan de la Palma, Feria, Trajano, Duque, Campana.",                         img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Semana_santa-capataz_sevilla.JPG" },
        { n: "EL AMOR",              dia: "DOMINGO DE RAMOS",     s: "20:55", e: "01:20", r: "Salvador, Cuna, Orfila, Javier Lasso de la Vega, Trajano.",                     img: "https://upload.wikimedia.org/wikipedia/commons/5/53/La_Giralda._Sevilla._01.JPG" },
        { n: "SAN PABLO",            dia: "LUNES SANTO",          s: "11:30", e: "01:50", r: "Polígono San Pablo, Luis Montoto, Puerta Carmona, Águilas, Alfalfa.",             img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Sevilla._Vista_desde_la_calle_de_Mateos_Gago.jpg" },
        { n: "LA REDENCIÓN",         dia: "LUNES SANTO",          s: "14:45", e: "23:20", r: "Santiago, Juan de Mesa, Almirante Apodaca, Laraña, Orfila.",                    img: "https://upload.wikimedia.org/wikipedia/commons/0/08/SevillaNazarenoHSanRoque02.JPG" },
        { n: "SANTA MARTA",          dia: "LUNES SANTO",          s: "18:10", e: "22:20", r: "San Andrés, Amor de Dios, San Miguel, Trajano, Duque.",                         img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Guadalquivir_%26_Torre_del_Oro_in_Seville.JPG" },
        { n: "LA ESTRELLA",          dia: "LUNES SANTO",          s: "17:00", e: "03:15", r: "San Jacinto, Puente Triana, Reyes Católicos, San Pablo, Rioja.",                img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Guadalquivir_and_Triana_in_Seville.JPG" },
        { n: "SAN ESTEBAN",          dia: "MARTES SANTO",         s: "14:50", e: "23:25", r: "San Esteban, Águilas, Alfalfa, Cuesta del Rosario, Salvador.",                  img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Semana_santa-capataz_sevilla.JPG" },
        { n: "SAN GONZALO",          dia: "MARTES SANTO",         s: "15:00", e: "03:00", r: "San Jacinto, Puente Triana, Reyes Católicos, San Pablo, Rioja.",                img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Sevilla._Triana._Plaza_del_Altozano.jpg" },
        { n: "LOS PANADEROS",        dia: "MIÉRCOLES SANTO",      s: "19:45", e: "03:15", r: "Orfila, Daóiz, García Tassara, Amor de Dios, San Miguel, Trajano.",              img: "https://upload.wikimedia.org/wikipedia/commons/0/08/SevillaNazarenoHSanRoque02.JPG" },
        { n: "EL SILENCIO",          dia: "LA MADRUGÁ",           s: "01:00", e: "06:20", r: "Alfonso XII, Plaza del Duque, Campana, Sierpes, Salvador, Cuna.",               img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Semana_santa-capataz_sevilla.JPG" },
        { n: "GRAN PODER",           dia: "LA MADRUGÁ",           s: "01:00", e: "07:45", r: "San Lorenzo, Conde de Barajas, Jesús del Gran Poder, Trajano.",                 img: "https://upload.wikimedia.org/wikipedia/commons/5/53/La_Giralda._Sevilla._01.JPG" },
        { n: "LA MACARENA",          dia: "LA MADRUGÁ",           s: "00:00", e: "13:00", r: "Resolana, Feria, Correduría, Amor de Dios, Trajano, Duque.",                    img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Sevilla._Puerta_de_la_Macarena.jpg" },
        { n: "ESPERANZA DE TRIANA",  dia: "LA MADRUGÁ",           s: "01:40", e: "14:00", r: "Pureza, Plaza Altozano, Puente Isabel II, Reyes Católicos.",                    img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Sevilla._Triana._Plaza_del_Altozano.jpg" },
        { n: "LOS GITANOS",          dia: "LA MADRUGÁ",           s: "02:30", e: "13:30", r: "Verónica, Gallos, Pinto, Escuelas Pías, Orfila, Laraña.",                      img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Calle_Sierpes_%28Sevilla%29_01.jpg" },
        { n: "RESURRECCIÓN",         dia: "DOMINGO RESURRECCIÓN", s: "08:30", e: "17:15", r: "Santa Marina, San Luis, Feria, Amor de Dios, Trajano, Duque.",                  img: "https://upload.wikimedia.org/wikipedia/commons/5/53/La_Giralda._Sevilla._01.JPG" }
    ]
};

/* ============================================================
   ESTADO
   ============================================================ */
let currentView   = 'bullas';
let currentDay    = 'TODOS';
const appContent  = document.getElementById('app-content');
const searchInput = document.getElementById('global-search');
const searchClear = document.getElementById('search-clear');
const dayFilter   = document.getElementById('day-filter');

/* ============================================================
   UTILIDADES
   ============================================================ */
const debounce = (fn, ms = 250) => {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
};

function safeText(s){
    return String(s || '').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* Parsea "HH:MM" → minutos desde medianoche */
function timeToMin(str){
    const [h, m] = str.split(':').map(Number);
    return h * 60 + m;
}

/* Devuelve true si la hora actual está dentro del rango "HH:MM - HH:MM" */
function isLive(rangeStr){
    const now = new Date();
    const current = now.getHours() * 60 + now.getMinutes();
    const [startStr, endStr] = rangeStr.split(' - ').map(s => s.trim());
    const start = timeToMin(startStr);
    let   end   = timeToMin(endStr);
    // Si termina a las 00:xx o antes que el inicio → cruza medianoche
    if(end < start) end += 24 * 60;
    const adjusted = (current < start && end > 24 * 60) ? current + 24 * 60 : current;
    return adjusted >= start && adjusted <= end;
}

/* ============================================================
   MAPA (Leaflet)
   ============================================================ */
let map;
const mapModal = document.getElementById('map-modal');
const mapClose = document.getElementById('map-close');

function openMapAt(lat, lng, title){
    mapModal.setAttribute('aria-hidden','false');
    setTimeout(() => {
        if(!map){
            map = L.map('map', { zoomControl:true }).setView([lat, lng], 16);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom:19, attribution:'© OpenStreetMap'
            }).addTo(map);
        } else {
            map.setView([lat, lng], 16);
        }
        L.marker([lat, lng]).addTo(map).bindPopup(`<strong>${title}</strong>`).openPopup();
        // Leaflet necesita invalidateSize cuando el contenedor era display:none
        map.invalidateSize();
    }, 50);
}

if(mapClose){
    mapClose.addEventListener('click', () => {
        mapModal.setAttribute('aria-hidden','true');
    });
}
mapModal.addEventListener('click', (e) => {
    if(e.target === mapModal) mapModal.setAttribute('aria-hidden','true');
});

/* ============================================================
   RENDER
   ============================================================ */
function render(){
    const search = (searchInput.value || '').toLowerCase().trim();
    appContent.innerHTML = '';
    const frag = document.createDocumentFragment();

    if(currentView === 'bullas'){
        let filtered = DATA.bullas.filter(b => {
            const matchDay    = currentDay === 'TODOS' || b.d === currentDay;
            const matchSearch = !search || b.z.toLowerCase().includes(search) || b.d.toLowerCase().includes(search);
            return matchDay && matchSearch;
        });

        // Sección header
        const secHeader = document.createElement('div');
        secHeader.className = 'section-header';
        secHeader.innerHTML = `<h2 class="section-title">Zonas conflictivas</h2><span class="section-count">${filtered.length} zonas</span>`;
        frag.appendChild(secHeader);

        if(filtered.length === 0){
            frag.appendChild(emptyState('fa-shield-halved','No se han encontrado bullas para esta búsqueda.'));
        } else {
            const list = document.createElement('ul');
            list.className = 'cards-list';
            list.setAttribute('role','list');

            filtered.forEach(b => {
                const live = isLive(b.h);
                const card = document.createElement('li');
                card.className = 'bulla-card';
                card.setAttribute('role','listitem');
                card.tabIndex = 0;
                card.setAttribute('aria-label', `${b.z} — ${b.d} — Nivel ${b.l}`);

                const img = document.createElement('img');
                img.className = 'bulla-img';
                img.alt = `${b.z} — ${b.d}`;
                img.loading = 'lazy';
                img.src = b.img;

                const top = document.createElement('div');
                top.className = 'card-top';

                const topLeft = document.createElement('div');
                topLeft.className = 'card-top-left';
                topLeft.innerHTML = `<span class="day-tag">${safeText(b.d)}</span>${live ? '<span class="live-badge"><span class="live-dot"></span>EN CURSO</span>' : ''}`;

                top.appendChild(topLeft);
                top.innerHTML += `<span class="lvl ${safeText(b.l)}">${safeText(b.l)}</span>`;
                top.insertBefore(topLeft, top.firstChild);

                const body = document.createElement('div');
                body.className = 'card-body';
                body.innerHTML = `
                    <h3>${safeText(b.z)}</h3>
                    <span class="hour"><i class="fa-regular fa-clock" aria-hidden="true"></i> HORARIO CRÍTICO: ${safeText(b.h)}</span>
                    <p class="desc">${safeText(b.c)}</p>
                    <div class="escape-box">
                        <strong><i class="fa-solid fa-route" aria-hidden="true"></i> RUTA DE ESCAPE</strong>
                        <p>${safeText(b.e)}</p>
                    </div>
                `;

                const btns = document.createElement('div');
                btns.className = 'card-actions';

                if(b.lat && b.lng){
                    const mapBtn = document.createElement('button');
                    mapBtn.className = 'btn-mapa';
                    mapBtn.setAttribute('aria-label', `Ver ${b.z} en mapa`);
                    mapBtn.innerHTML = '<i class="fa-solid fa-map-pin" aria-hidden="true"></i> VER EN MAPA';
                    mapBtn.addEventListener('click', () => openMapAt(b.lat, b.lng, b.z));
                    btns.appendChild(mapBtn);
                }

                const extLink = document.createElement('a');
                extLink.className = 'btn-mapa secondary';
                extLink.href = `https://www.google.com/maps/search/${encodeURIComponent(b.z + ' Sevilla')}`;
                extLink.target = '_blank';
                extLink.rel = 'noopener noreferrer';
                extLink.innerHTML = '<i class="fa-brands fa-google" aria-hidden="true"></i> Google Maps';
                btns.appendChild(extLink);

                body.appendChild(btns);

                card.appendChild(img);
                card.appendChild(top);
                card.appendChild(body);
                list.appendChild(card);
            });

            frag.appendChild(list);
        }

    } else {
        // ---- PROGRAMA ----
        let filtered = DATA.programa.filter(p => {
            return !search ||
                p.n.toLowerCase().includes(search) ||
                (p.dia && p.dia.toLowerCase().includes(search)) ||
                p.r.toLowerCase().includes(search);
        });

        const secHeader = document.createElement('div');
        secHeader.className = 'section-header';
        secHeader.innerHTML = `<h2 class="section-title">Hermandades</h2><span class="section-count">${filtered.length} hermandades</span>`;
        frag.appendChild(secHeader);

        if(filtered.length === 0){
            frag.appendChild(emptyState('fa-clock','No se han encontrado hermandades.'));
        } else {
            const list = document.createElement('div');
            list.setAttribute('role','list');

            filtered.forEach(p => {
                const item = document.createElement('div');
                item.className = 'prog-item';
                item.tabIndex = 0;
                item.setAttribute('role','button');
                item.setAttribute('aria-expanded','false');
                item.setAttribute('aria-label', `${p.n} — Sale ${p.s}, llega ${p.e}`);

                const main = document.createElement('div');
                main.className = 'prog-main-info';

                main.innerHTML = `
                    <div class="prog-info">
                        <span class="prog-day-tag">${safeText(p.dia || '')}</span>
                        <h4>${safeText(p.n)}</h4>
                        <span class="prog-hint">
                            <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
                            Ver itinerario completo
                        </span>
                    </div>
                    <div class="time-box">
                        <span class="time-label">SALE</span>
                        <span class="time-val">${safeText(p.s)}</span>
                        <span class="time-label" style="margin-top:6px">LLEGA</span>
                        <span class="time-val llegada">${safeText(p.e)}</span>
                    </div>
                `;

                const details = document.createElement('div');
                details.className = 'prog-details';

                if(p.img){
                    const thumb = document.createElement('img');
                    thumb.className = 'prog-thumb';
                    thumb.alt = `${p.n} — itinerario`;
                    thumb.loading = 'lazy';
                    thumb.src = p.img;
                    details.appendChild(thumb);
                }

                const recorrido = document.createElement('div');
                recorrido.innerHTML = `
                    <strong>RECORRIDO OFICIAL MMXXVI</strong>
                    <div class="itinerario-full">${safeText(p.r)}</div>
                    <a class="btn-mapa" href="https://www.google.com/maps/search/Sevilla+Hermandad+${encodeURIComponent(p.n)}" target="_blank" rel="noopener noreferrer">
                        <i class="fa-solid fa-map-location-dot" aria-hidden="true"></i> MAPA TIEMPO REAL
                    </a>
                `;
                details.appendChild(recorrido);

                item.appendChild(main);
                item.appendChild(details);

                item.addEventListener('click', () => {
                    const open = item.classList.toggle('open');
                    item.setAttribute('aria-expanded', open ? 'true' : 'false');
                });
                item.addEventListener('keydown', (ev) => {
                    if(ev.key === 'Enter' || ev.key === ' '){
                        ev.preventDefault();
                        item.click();
                    }
                });

                list.appendChild(item);
            });

            frag.appendChild(list);
        }
    }

    appContent.appendChild(frag);
}

/* ============================================================
   EMPTY STATE
   ============================================================ */
function emptyState(icon, msg){
    const div = document.createElement('div');
    div.className = 'empty';
    div.innerHTML = `<i class="fa-solid fa-${icon}" aria-hidden="true"></i><p>${msg}</p>`;
    return div;
}

/* ============================================================
   CAMBIO DE VISTA
   ============================================================ */
function switchView(v, element){
    currentView = v;
    document.querySelectorAll('.nav-item').forEach(i => {
        i.classList.remove('active');
        i.setAttribute('aria-pressed','false');
    });
    if(element){
        element.classList.add('active');
        element.setAttribute('aria-pressed','true');
    } else {
        const id = v === 'bullas' ? 'btn-bullas' : 'btn-prog';
        const el = document.getElementById(id);
        if(el){ el.classList.add('active'); el.setAttribute('aria-pressed','true'); }
    }

    // Mostrar/ocultar filtro de días según vista
    dayFilter.style.display = v === 'bullas' ? 'flex' : 'none';

    // Reset scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });

    render();
}

/* ============================================================
   FILTRO DE DÍAS
   ============================================================ */
document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.day-btn').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed','false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed','true');
        currentDay = btn.dataset.day;
        render();
    });
});

/* ============================================================
   BUSCADOR
   ============================================================ */
searchInput.addEventListener('input', () => {
    searchClear.style.display = searchInput.value ? 'block' : 'none';
    debouncedRender();
});

searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.style.display = 'none';
    searchInput.focus();
    render();
});

/* ============================================================
   MAPA EXTERNO
   ============================================================ */
function openExternalMap(){
    window.open('https://www.google.com/maps/search/Iglesias+Sevilla+centro', '_blank', 'noopener');
}

/* ============================================================
   INIT
   ============================================================ */
const debouncedRender = debounce(render, 250);

document.addEventListener('DOMContentLoaded', () => {
    render();

    // Shortcut "/" para el buscador
    document.addEventListener('keydown', (e) => {
        if(e.key === '/' && document.activeElement !== searchInput){
            e.preventDefault();
            searchInput.focus();
        }
    });

    // Service Worker
    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('/sw.js').catch(() => {/* no crítico */});
    }
});
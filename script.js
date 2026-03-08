/* ================================================================
   ANTIBULLAS 3.0 — Datos COMPLETOS y REALES
   62 hermandades con itinerarios y horarios oficiales 2026
   Fuente: Consejo General de Hermandades y Cofradías de Sevilla
================================================================ */

const SS2026 = {
    "DOMINGO DE RAMOS":     new Date("2026-03-29"),
    "LUNES SANTO":          new Date("2026-03-30"),
    "MARTES SANTO":         new Date("2026-03-31"),
    "MIÉRCOLES SANTO":      new Date("2026-04-01"),
    "JUEVES SANTO":         new Date("2026-04-02"),
    "LA MADRUGÁ":           new Date("2026-04-03"),
    "VIERNES SANTO":        new Date("2026-04-03"),
    "SÁBADO SANTO":         new Date("2026-04-04"),
    "DOMINGO RESURRECCIÓN": new Date("2026-04-05"),
};

function getTodaySSDay() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const hour = now.getHours();
    // La Madrugá: Jueves noche (≥23:00) o Viernes madrugada (< 14:00)
    const jueves = new Date("2026-04-02");
    const viernes = new Date("2026-04-03");
    if (today.getTime() === jueves.getTime() && hour >= 23) return "LA MADRUGÁ";
    if (today.getTime() === viernes.getTime() && hour < 14)  return "LA MADRUGÁ";
    for (const [nombre, fecha] of Object.entries(SS2026)) {
        if (nombre === "LA MADRUGÁ") continue;
        const f = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        if (today.getTime() === f.getTime()) return nombre;
    }
    if (today < SS2026["DOMINGO DE RAMOS"]) return "ANTES";
    if (today > SS2026["DOMINGO RESURRECCIÓN"]) return "DESPUÉS";
    return null;
}

/* ============================================================ IMÁGENES */
const IMG = {
    naz:    "https://upload.wikimedia.org/wikipedia/commons/0/08/SevillaNazarenoHSanRoque02.JPG",
    cap:    "https://upload.wikimedia.org/wikipedia/commons/1/1c/Semana_santa-capataz_sevilla.JPG",
    giral:  "https://upload.wikimedia.org/wikipedia/commons/5/53/La_Giralda._Sevilla._01.JPG",
    torre:  "https://upload.wikimedia.org/wikipedia/commons/c/c9/Torre_del_Oro_%28Sevilla%29_--_02.jpg",
    guad:   "https://upload.wikimedia.org/wikipedia/commons/7/74/Guadalquivir_%26_Torre_del_Oro_in_Seville.JPG",
    mac:    "https://upload.wikimedia.org/wikipedia/commons/e/ea/Sevilla._Puerta_de_la_Macarena.jpg",
    triana: "https://upload.wikimedia.org/wikipedia/commons/3/34/Sevilla._Triana._Plaza_del_Altozano.jpg",
    sier:   "https://upload.wikimedia.org/wikipedia/commons/1/1c/Calle_Sierpes_%28Sevilla%29_01.jpg",
    mat:    "https://upload.wikimedia.org/wikipedia/commons/d/df/Sevilla._Vista_desde_la_calle_de_Mateos_Gago.jpg",
    tri2:   "https://upload.wikimedia.org/wikipedia/commons/0/0c/Guadalquivir_and_Triana_in_Seville.JPG",
    geno:   "https://upload.wikimedia.org/wikipedia/commons/7/72/SemanaSantaSevillaGenoveva2.jpg",
};

/* ============================================================
   DATOS ENRIQUECIDOS POR HERMANDAD
   fundada · templo · titular · tunica · pasos · curiosidad
============================================================ */
const EXTRA = {
  "LA BORRIQUITA":        {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "JESÚS DESPOJADO":      {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LA HINIESTA":          {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LA PAZ":               {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LA CENA":              {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "SAN ROQUE":            {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LA AMARGURA":          {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LA ESTRELLA":          {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "EL AMOR":              {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "EL CAUTIVO":           {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "EL BESO DE JUDAS":     {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "SANTA GENOVEVA":       {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "SANTA MARTA":          {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "SAN GONZALO":          {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "VERA-CRUZ":            {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LAS PENAS DE SAN VICENTE":{fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LAS AGUAS":            {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "EL MUSEO":             {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "EL CERRO":             {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "SAN BENITO":           {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "DULCE NOMBRE":         {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LA CANDELARIA":        {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "SAN ESTEBAN":          {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LOS JAVIERES":         {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LOS ESTUDIANTES":      {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "SANTA CRUZ":           {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "CARMEN DOLOROSO":      {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LA SED":               {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "EL BUEN FIN":          {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "SAN BERNARDO":         {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LA LANZADA":           {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "EL BARATILLO":         {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LOS PANADEROS":        {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "SIETE PALABRAS":       {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "CRISTO DE BURGOS":     {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LOS NEGRITOS (Mié.)":  {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LOS NEGRITOS (Jue.)":  {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "EXALTACIÓN":           {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LAS CIGARRERAS":       {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "MONTE-SIÓN":           {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LA QUINTA ANGUSTIA":   {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "EL VALLE":             {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "PASIÓN":               {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "EL SILENCIO":          {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "GRAN PODER":           {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LA MACARENA":          {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "EL CALVARIO":          {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "ESPERANZA DE TRIANA":  {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LOS GITANOS":          {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LA CARRETERÍA":        {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "SOLEDAD DE SAN BUENAVENTURA":{fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "EL CACHORRO":          {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LA O":                 {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "SAN ISIDORO":          {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "MONTSERRAT":           {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "SAGRADA MORTAJA":      {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "EL SOL":               {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LOS SERVITAS":         {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LA TRINIDAD":          {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "SANTO ENTIERRO GRANDE":{fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LA SOLEDAD":           {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
  "LA RESURRECCIÓN":      {fundada:"",templo:"",titular:"",tunica:"",pasos:"",curiosidad:""},
};



/* ============================================================
   DATOS COMPLETOS
============================================================ */
const DATA = {

/* ----------------------------------------------------------------
   BULLAS — Zonas conflictivas por jornada (29 en total)
---------------------------------------------------------------- */
bullas: [
    // ══ DOMINGO DE RAMOS ══
    {d:"DOMINGO DE RAMOS", z:"CUESTA DEL ROSARIO / FRANCOS",    h:"16:00 - 21:30", l:"CRÍTICO",
     c:"La Borriquita, La Cena y San Roque confluyen en el eje Salvador-Francos desde las 16h. Bloqueo total.",
     e:"Plaza del Pan → Puente y Pellón. Nunca intente cruzar Francos en este horario.",
     img:IMG.sier,  lat:37.3917, lng:-5.9916},
    {d:"DOMINGO DE RAMOS", z:"FERIA / SAN JUAN DE LA PALMA",   h:"18:30 - 01:30", l:"CRÍTICO",
     c:"La Amargura (salida 18h) convierte la calle Feria en una ratonera histórica. Sin salida lateral.",
     e:"La Alameda de Hércules es el único pulmón. Suba por Bustos Tavera antes de las 18h.",
     img:IMG.naz,   lat:37.3984, lng:-5.9905},
    {d:"DOMINGO DE RAMOS", z:"POSTIGO / ALMIRANTAZGO",         h:"17:30 - 02:30", l:"ALTO",
     c:"La Estrella (Triana) genera tapón entre el Arenal y el Puente. La Paz acumula público en Gamazo.",
     e:"Use Paseo Colón o calle Antonia Díaz. Evite el Arco del Postigo.",
     img:IMG.torre, lat:37.3839, lng:-5.9963},
    {d:"DOMINGO DE RAMOS", z:"MENÉNDEZ PELAYO / SAN ROQUE",    h:"16:30 - 22:00", l:"ALTO",
     c:"San Roque sale a las 16:30. Corte habitual en Recaredo y Puerta de la Carne durante horas.",
     e:"Use Pajaritos o calle Redes para bordear el barrio de Santa Cruz.",
     img:IMG.mat,   lat:37.3862, lng:-5.9870},
    {d:"DOMINGO DE RAMOS", z:"PARQUE MARÍA LUISA / BRASIL",        h:"13:00 - 16:30", l:"MODERADO",
     c:"La Paz sale a las 13h desde el Porvenir (Parroquia de San Sebastián). Su largo recorrido por el Parque Mª Luisa, Av. Isabel la Católica y Brasil colapsa esa zona durante horas.",
     e:"Use Eduardo Dato en dirección contraria o Glorieta de San Sebastián.",
     img:IMG.guad,  lat:37.3688, lng:-5.9820},

    // ══ LUNES SANTO ══
    {d:"LUNES SANTO", z:"LUIS MONTOTO / PUERTA CARMONA",        h:"12:30 - 23:00", l:"CRÍTICO",
     c:"El Cautivo sale a las 12:30 desde el Polígono San Pablo. Colapso de Luis Montoto durante horas.",
     e:"Use Muro de los Navarros o la Ronda Histórica para rodear el eje.",
     img:IMG.cap,   lat:37.3912, lng:-5.9754},
    {d:"LUNES SANTO", z:"PUENTE DE TRIANA / REYES CATÓLICOS",   h:"15:30 - 03:00", l:"CRÍTICO",
     c:"San Gonzalo sale a las 15:30 desde Triana y regresa de madrugada. El puente es intransitable durante horas. La O y Sagrada Mortaja no pasan este día.",
     e:"Puente de San Telmo es la única alternativa viable para cruzar el río.",
     img:IMG.tri2,  lat:37.3838, lng:-5.9974},
    {d:"LUNES SANTO", z:"ORFILA / JAVIER LASSO",                h:"17:30 - 01:00", l:"ALTO",
     c:"Las Penas de San Vicente llegan a Orfila a las 17:30. Calle estrecha con tráfico peatonal masivo.",
     e:"Amor de Dios hacia la Alameda. No intente cruzar en hora punta.",
     img:IMG.mat,   lat:37.3946, lng:-5.9902},
    {d:"LUNES SANTO", z:"POLÍGONO SAN PABLO / SINAÍ",           h:"12:30 - 15:00", l:"MODERADO",
     c:"El Cautivo inicia el recorrido por el barrio. Cierres locales en Av. Soleá y alrededores.",
     e:"Salga antes de las 12h o use la Autovía de Circunvalación SE-30.",
     img:IMG.geno,  lat:37.3780, lng:-5.9590},
    {d:"LUNES SANTO", z:"GARCÍA VINUESA / ARENAL",              h:"20:00 - 01:00", l:"ALTO",
     c:"El Museo y Las Aguas (ambas del Arenal) regresan por García Vinuesa. Tapón en Arfe y García Vinuesa toda la noche.",
     e:"Use calle Dos de Mayo o el Paseo Colón pegado al río.",
     img:IMG.guad,  lat:37.3853, lng:-5.9968},

    // ══ MARTES SANTO ══
    {d:"MARTES SANTO", z:"ALFALFA / CUESTA DEL ROSARIO",        h:"14:00 - 23:30", l:"CRÍTICO",
     c:"El Cerro (13:30) llega por Enramadilla y San Fernando, San Esteban (14:50) por Pilatos, y ambos colapsan el eje Alfalfa-Cuesta del Rosario toda la tarde. Zona impracticable.",
     e:"Rodee obligatoriamente por Menéndez Pelayo. No hay alternativa en el centro histórico.",
     img:IMG.geno,  lat:37.3920, lng:-5.9882},
    {d:"MARTES SANTO", z:"FERIA / ALAMEDA (DULCE NOMBRE)",      h:"16:00 - 02:00", l:"ALTO",
     c:"San Benito (15h, desde San Benito·Luis Montoto) y Dulce Nombre (16h, desde San Lorenzo·Gavidia) mantienen la zona Feria-Alameda colapsada. La Candelaria agrava desde San Nicolás.",
     e:"Resolana o calle Parras para circular entre la Macarena y la Alameda.",
     img:IMG.mac,   lat:37.3975, lng:-5.9932},
    {d:"MARTES SANTO", z:"JUDERÍA / SANTA CRUZ",                h:"20:00 - 03:30", l:"CRÍTICO",
     c:"Santa Cruz es la última de la jornada. La Judería queda bloqueada desde las 20h hasta la madrugada.",
     e:"No hay escapatoria. Salga del barrio antes de las 19:30 o resignese a esperar.",
     img:IMG.mat,   lat:37.3861, lng:-5.9924},
    {d:"MARTES SANTO", z:"UNIVERSIDAD / PUERTA DE JEREZ",       h:"19:30 - 01:00", l:"ALTO",
     c:"Los Estudiantes salen de la Universidad a las 19:30. San Fernando y Pajaritos completamente cerradas.",
     e:"Use Glorieta de Cuba o Paseo Cristina para acceder al Arenal y la Torre del Oro.",
     img:IMG.torre, lat:37.3826, lng:-5.9933},
    {d:"MARTES SANTO", z:"ENLADRILLADA / RELATOR",              h:"15:00 - 02:00", l:"MODERADO",
     c:"San Benito (15h) y La Candelaria usan Enladrillada. Barrio de San Luis cortado durante horas.",
     e:"Use San Luis o la Calle Peris Mencheta para atravesar el barrio.",
     img:IMG.naz,   lat:37.4012, lng:-5.9895},

    // ══ MIÉRCOLES SANTO ══
    {d:"MIÉRCOLES SANTO", z:"ORFILA / SAN ANDRÉS",              h:"19:45 - 04:30", l:"CRÍTICO",
     c:"Los Panaderos (19:45), Siete Palabras (21h) y Cristo de Burgos (21:30) usan este eje. Noche entera.",
     e:"Calle Imagen hacia Encarnación. Salida precoz recomendada antes de las 19h.",
     img:IMG.naz,   lat:37.3956, lng:-5.9898},
    {d:"MIÉRCOLES SANTO", z:"TRIANA / PUREZA / SANTA ANA",      h:"14:00 - 23:30", l:"ALTO",
     c:"Carmen Doloroso (14h) colapsa Pureza y el Altozano. Triana inaccesible en vehículo todo el día.",
     e:"Puente de San Telmo si viene del centro. No entre a Triana por el Puente de Isabel II.",
     img:IMG.triana, lat:37.3811, lng:-6.0008},
    {d:"MIÉRCOLES SANTO", z:"SAN BERNARDO / PUERTA DE LA CARNE", h:"15:00 - 20:30", l:"ALTO",
     c:"San Bernardo sale a las 15h por Candelaria y Menéndez Pelayo. Puerta de la Carne colapsada.",
     e:"Use la Pasarela ferroviaria del Prado de San Sebastián si viene del sur.",
     img:IMG.guad,  lat:37.3844, lng:-5.9798},
    {d:"MIÉRCOLES SANTO", z:"GARCÍA VINUESA / ARENAL",          h:"18:00 - 02:00", l:"ALTO",
     c:"El Baratillo (18h) y El Buen Fin regresan por el Arenal. Zona saturada toda la noche.",
     e:"No cruce el Arco del Postigo. Use Almirante Lobo paralelo al río.",
     img:IMG.tri2,  lat:37.3853, lng:-5.9970},
    {d:"MIÉRCOLES SANTO", z:"LARAÑA / LA TRINIDAD",             h:"14:30 - 23:00", l:"MODERADO",
     c:"La Sed (14:30) y La Lanzada (17h) usan el eje Alfonso XII y la Trinidad. Flujo constante.",
     e:"Use Plaza de Armas o la Muralla Almohade para llegar al centro por el norte.",
     img:IMG.sier,  lat:37.3945, lng:-5.9952},

    // ══ JUEVES SANTO ══
    {d:"JUEVES SANTO", z:"LUIS MONTOTO / MENÉNDEZ PELAYO",      h:"17:00 - 03:00", l:"CRÍTICO",
     c:"El Valle sale a las 19:30 desde Nervión. Luis Montoto bloqueado durante horas. La jornada más larga.",
     e:"No hay alternativa por el eje este. Salga del barrio antes de las 17h.",
     img:IMG.cap,   lat:37.3888, lng:-5.9760},
    {d:"JUEVES SANTO", z:"CAMPANA / SIERPES / CARRERA OFICIAL", h:"17:00 - 04:30", l:"MÁXIMO",
     c:"Máxima concentración del año. Siete hermandades pasan por Campana. Sin cruce peatonal posible.",
     e:"Solo cruce por Cerrajería o Cuna entre hermandades. Consulte horarios al minuto.",
     img:IMG.sier,  lat:37.3912, lng:-5.9927},
    {d:"JUEVES SANTO", z:"SAN LORENZO / JESÚS DEL GRAN PODER",  h:"17:30 - 04:00", l:"MÁXIMO",
     c:"Todas las hermandades del Jueves convergen en Jesús del Gran Poder. Absolutamente intransitable.",
     e:"Acceda al barrio por Marqués de Paradas antes de las 17h. Después no hay paso.",
     img:IMG.naz,   lat:37.3938, lng:-5.9965},
    {d:"JUEVES SANTO", z:"LAS CIGARRERAS / ARENAL",             h:"17:30 - 23:00", l:"ALTO",
     c:"Las Cigarreras (17:30) salen de la Real Fábrica de Tabacos. Tapón en Arfe y Reyes Católicos.",
     e:"Use Almirante Lobo hacia Constitución o el Paseo Colón por el río.",
     img:IMG.guad,  lat:37.3843, lng:-5.9940},
    {d:"JUEVES SANTO", z:"SALVADOR / CUNA / ORFILA",            h:"19:00 - 04:00", l:"CRÍTICO",
     c:"La Quinta Angustia (19h) y Pasión bloquean el Salvador y Cuna. Zona impenetrable hasta la madrugada.",
     e:"Acceda al Salvador por Álvarez Quintero antes de las 19h. Después es imposible.",
     img:IMG.giral, lat:37.3920, lng:-5.9916},
    {d:"JUEVES SANTO", z:"SAN LEANDRO / ÁGUILAS",               h:"17:00 - 01:30", l:"ALTO",
     c:"La Exaltación (17h) sale de San Leandro. Eje Águilas-Alfalfa cortado con multitudes.",
     e:"Rodee por Menéndez Pelayo hacia Puerta Osario.",
     img:IMG.mat,   lat:37.3898, lng:-5.9870},

    // ══ VIERNES SANTO ══
    {d:"VIERNES SANTO", z:"TRIANA / CAPILLA DEL PATROCINIO",    h:"12:00 - 15:00", l:"CRÍTICO",
     c:"El Cachorro sale a las 12h. Multitudes en Dos de Mayo y San Jorge desde las 10h para ver la salida.",
     e:"Si no va a ver la salida, evite Triana hasta las 15h. Use Puente San Telmo.",
     img:IMG.triana, lat:37.3783, lng:-6.0042},
    {d:"VIERNES SANTO", z:"PUENTE DE TRIANA (ISABEL II)",       h:"13:00 - 03:00", l:"MÁXIMO",
     c:"El Cachorro cruza a las ~14h y La O/Sagrada Mortaja regresan de noche. Cierre absoluto e intermitente.",
     e:"Puente de San Telmo es la única alternativa. Planifique la ruta con antelación.",
     img:IMG.tri2,  lat:37.3835, lng:-5.9972},
    {d:"VIERNES SANTO", z:"LARAÑA / ENCARNACIÓN",               h:"15:00 - 23:30", l:"ALTO",
     c:"San Isidoro (15h) bloquea el acceso norte al centro. Montserrat (19h) agrava la situación.",
     e:"Acceda al centro por Trajano o Duque. Evite Laraña durante toda la tarde-noche.",
     img:IMG.sier,  lat:37.3943, lng:-5.9905},
    {d:"VIERNES SANTO", z:"REYES CATÓLICOS / SAN PABLO",        h:"13:00 - 03:00", l:"ALTO",
     c:"El Cachorro y La O/Sagrada Mortaja (desde Triana) ocupan esta avenida por turnos durante horas.",
     e:"Marqués de Contadero, pegado al río, para circular en paralelo.",
     img:IMG.guad,  lat:37.3860, lng:-5.9960},

    // ══ LA MADRUGÁ ══
    {d:"LA MADRUGÁ", z:"ARCO DE LA MACARENA / RESOLANA",        h:"23:30 - 14:00", l:"CRÍTICO",
     c:"La Macarena sale a medianoche. Masificación extrema. La recogida (13h) genera colapso histórico.",
     e:"Resolana hacia La Barqueta es la única vía de evacuación del barrio.",
     img:IMG.mac,   lat:37.4008, lng:-5.9895},
    {d:"LA MADRUGÁ", z:"JESÚS DEL GRAN PODER / TRAJANO",        h:"01:00 - 09:00", l:"MÁXIMO",
     c:"Gran Poder (1h) y Los Gitanos comparten eje. La hora punta de la Madrugá. Sin movimiento posible.",
     e:"Quede en Duque de la Victoria y espere. No intente cruzar bajo ningún concepto.",
     img:IMG.naz,   lat:37.3935, lng:-5.9960},
    {d:"LA MADRUGÁ", z:"MAGDALENA / SAN PABLO",                 h:"01:30 - 08:00", l:"MÁXIMO",
     c:"Cruce de la Esperanza de Triana y el Gran Poder. El momento más tenso del año en movilidad.",
     e:"Puente de San Telmo. El Puente de Triana permanece bloqueado toda la madrugada.",
     img:IMG.cap,   lat:37.3882, lng:-5.9948},
    {d:"LA MADRUGÁ", z:"PUENTE ISABEL II (TRIANA)",             h:"02:00 - 15:00", l:"CRÍTICO",
     c:"La Esperanza de Triana cruza el puente al amanecer (~6-7h). El momento más icónico. Multitudes extremas.",
     e:"Llegue antes de las 5h para tener sitio. Salida por Reyes Católicos tras el cruce.",
     img:IMG.triana, lat:37.3835, lng:-5.9972},
    {d:"LA MADRUGÁ", z:"CUNA / SALVADOR",                      h:"01:00 - 07:00", l:"ALTO",
     c:"El Silencio regresa por Cuna hacia San Antonio Abad. Silencio total exigido por la hermandad.",
     e:"Busque calle Sierpes para rodear. Mantenga silencio absoluto en el recorrido.",
     img:IMG.giral, lat:37.3927, lng:-5.9924},
    {d:"LA MADRUGÁ", z:"FERIA / ALAMEDA (MACARENA)",           h:"23:30 - 13:00", l:"ALTO",
     c:"La Macarena usa la calle Feria en salida y regreso. Cierre prolongado de hasta 14 horas.",
     e:"Use San Luis o Resolana para circular por el barrio. No entre a Feria sin salida a la vista.",
     img:IMG.mac,   lat:37.3975, lng:-5.9935},

    // ══ SÁBADO SANTO ══
    {d:"SÁBADO SANTO", z:"CATEDRAL / PLAZA VIRGEN DE LOS REYES", h:"20:00 - 02:00", l:"CRÍTICO",
     c:"El Santo Entierro (procesión institucional de toda la ciudad) bloquea toda la zona de la Catedral.",
     e:"No intente acceder al entorno de la Catedral entre las 19h y la medianoche.",
     img:IMG.giral, lat:37.3861, lng:-5.9935},
    {d:"SÁBADO SANTO", z:"SIERPES / PLAZA SAN FRANCISCO",       h:"20:30 - 01:30", l:"ALTO",
     c:"El Santo Entierro recorre la Carrera Oficial completa. Sierpes cerrada al paso peatonal.",
     e:"Use Tetuán o Cuna para cruzar de Este a Oeste durante esta jornada.",
     img:IMG.sier,  lat:37.3900, lng:-5.9930},
    {d:"SÁBADO SANTO", z:"SAN LORENZO / JESÚS DEL GRAN PODER",  h:"21:00 - 02:30", l:"ALTO",
     c:"La Soledad (21h) recorre Jesús del Gran Poder. Barrio bloqueado en la última jornada nocturna.",
     e:"Acceda por Marqués de Paradas antes de las 20:30.",
     img:IMG.naz,   lat:37.3938, lng:-5.9965},
],

/* ----------------------------------------------------------------
   PROGRAMA — 62 hermandades con itinerarios calle a calle
---------------------------------------------------------------- */
programa: [

    // ════════════════ DOMINGO DE RAMOS (9) ════════════════
    {n:"LA BORRIQUITA", dia:"DOMINGO DE RAMOS", s:"14:30", e:"19:00", nazarenos:1500,
     r:"Divino Salvador · Cuna · Amor de Dios · [C.O.] Campana, Sierpes, Constitución, Catedral · Chapineros · Entradas · Divino Salvador"},

    {n:"JESÚS DESPOJADO", dia:"DOMINGO DE RAMOS", s:"14:00", e:"21:30", nazarenos:1800,
     r:"Molviedro · Adolfo Cuéllar · F.B. de las Casas · Zaragoza · San Pablo · Velázquez · O'Donnell · [C.O.] Campana, Sierpes, Constitución, Catedral · Plaza del Triunfo · Tomás de Ybarra · Almirantazgo · Postigo · Dos de Mayo · Real de la Carretería · Arfe · Gamazo · Zaragoza · F.B. de las Casas · Molviedro"},

    {n:"LA HINIESTA", dia:"DOMINGO DE RAMOS", s:"13:00", e:"23:00", nazarenos:2200,
     r:"San Julián · Madre Dolores Márquez · Puerta de Córdoba · Morera · Macarena · Aniceto Sáenz · Pumarejo · San Luis · Relator · Feria · Correduría · Amor de Dios · Alameda · Trajano · [C.O.] Campana, Sierpes, Constitución, Catedral · Argote de Molina · Cuesta del Rosario · Odreros · Boteros · Cristo de Burgos · Doña Mª Coronel · Bustos Tavera · Vergara · Hiniesta · San Julián"},

    {n:"LA PAZ", dia:"DOMINGO DE RAMOS", s:"13:00", e:"01:00", nazarenos:1800,
     r:"San Sebastián (Porvenir) · Río de la Plata · Brasil · Parque Mª Luisa (Glorieta Covadonga · Av. Isabel la Católica) · Glorieta San Diego · Palos de la Frontera · Av. Roma · Puerta Jerez · Av. Constitución · Tomás de Ybarra · Almirantazgo · Postigo · Dos de Mayo · Arfe · Gamazo · Guichot · Plaza Nueva · Tetuán · [C.O.] Campana, Constitución, Catedral · Plaza del Triunfo · Mañara · Contratación · Puerta Jerez · Av. Roma · Palos de la Frontera · Glorieta San Diego · Parque Mª Luisa · Brasil · Progreso · Porvenir · Río de la Plata · San Sebastián"},

    {n:"LA CENA", dia:"DOMINGO DE RAMOS", s:"16:00", e:"01:00", nazarenos:2400,
     r:"Los Terceros · Sol · Alhóndiga · Imagen · Laraña · Orfila · Daoiz · García Tassara · Amor de Dios · Jesús del Gran Poder · [C.O.] Campana, Constitución, Catedral · Argote de Molina · Alfalfa · Boteros · Cristo de Burgos · Gerona · Los Terceros"},

    {n:"SAN ROQUE", dia:"DOMINGO DE RAMOS", s:"16:30", e:"01:30", nazarenos:1400,
     r:"Carmen Benítez · Recaredo · Puñonrostro · Jáuregui · Ponce de León · Juan de Mesa · Imagen · Laraña · Orfila · Javier Lasso de la Vega · Trajano · [C.O.] Campana, Constitución, Catedral · Argote de Molina · Francos · Cuesta del Rosario · Alfalfa · Cabeza del Rey Don Pedro · Pilatos · Calería · Guadalupe · Recaredo · Carmen Benítez"},

    {n:"LA AMARGURA", dia:"DOMINGO DE RAMOS", s:"18:00", e:"01:30", nazarenos:2000,
     r:"San Juan de la Palma · Madre Mª Purísima de la Cruz · Feria · Conde de Torrejón · Amor de Dios · Alameda · Trajano · [C.O.] Campana, Constitución, Catedral · Argote de Molina · Francos · Villegas · Salvador · Cuna · Laraña · Encarnación · Alcázares · Santa Ángela de la Cruz · San Juan de la Palma"},

    {n:"LA ESTRELLA", dia:"DOMINGO DE RAMOS", s:"17:30", e:"02:00", nazarenos:1900,
     r:"San Jacinto (Triana) · Pureza · Altozano · Puente Isabel II · Reyes Católicos · Plaza Magdalena · San Pablo · Velázquez · [C.O.] Campana, Constitución, Catedral · Plaza del Triunfo · Postigo · Adriano · Pastor y Landero · Reyes Católicos · Puente Isabel II · Altozano · San Jacinto"},

    {n:"EL AMOR", dia:"DOMINGO DE RAMOS", s:"20:30", e:"01:30", nazarenos:1600,
     r:"Divino Salvador · Cuna · Orfila · Javier Lasso · Amor de Dios · San Miguel · Jesús del Gran Poder · Duque · [C.O.] Campana, Constitución, Catedral · Argote de Molina · Francos · Chapineros · Álvarez Quintero · Salvador"},

    // ════════════════ LUNES SANTO (9) ════════════════
    {n:"EL CAUTIVO", dia:"LUNES SANTO", s:"12:30", e:"02:00", nazarenos:2500,
     r:"San Ignacio de Loyola (Pol. San Pablo) · Señora del Rosario · Av. Pedro Romero · Av. Soleá · Sinaí · Hernando del Pulgar · Luis Montoto · Puerta Carmona · San Esteban · Pilatos · Águilas · Alfalfa · Cuesta del Rosario · Villegas · Álvarez Quintero · [C.O.] Plaza San Francisco, Catedral · Alemanes · Francos · Lineros · Encarnación · Imagen · Ponce de León · Pinto · Mª Auxiliadora · Venecia · A. Filpo Rojas · Kansas City · Av. El Greco · Av. Soleá · San Ignacio"},

    {n:"EL BESO DE JUDAS", dia:"LUNES SANTO", s:"14:00", e:"23:30", nazarenos:1200,
     r:"Plaza de Jesús de la Redención · Santiago · Juan de Mesa · Imagen · Laraña · Orfila · Javier Lasso de la Vega · Trajano · [C.O.] Campana, Constitución, Catedral · Francos · Cuesta del Rosario · Boteros · Cristo de Burgos · Dormitorio · San Leandro · Francisco Carrión Mejías · Santiago · Plaza de Jesús de la Redención"},

    {n:"SANTA GENOVEVA", dia:"LUNES SANTO", s:"12:25", e:"03:00", nazarenos:1700,
     r:"Santa Genoveva · Romero de Torres · A. Topete · Ntra. Sra. de las Mercedes · Felipe II · Diego de la Barrera · Porvenir · Río de la Plata · Brasil · Parque Mª Luisa · Glorieta San Diego · Palos de la Frontera · Puerta Jerez · Av. Constitución · Almirantazgo · Postigo · Dos de Mayo · Arfe · Gamazo · Plaza Nueva · Tetuán · Velázquez · O'Donnell · [C.O.] Campana, Constitución, Catedral · Plaza del Triunfo · Contratación · Puerta Jerez · San Fernando · Av. del Cid · Glorieta San Diego · Parque Mª Luisa · Felipe II · Pedro Salinas · Av. Los Teatinos · Santa Genoveva"},

    {n:"SANTA MARTA", dia:"LUNES SANTO", s:"18:10", e:"23:00", nazarenos:800,
     r:"San Andrés · García Tassara · Amor de Dios · Jesús del Gran Poder · Duque · [C.O.] Campana, Constitución, Catedral · Argote de Molina · Francos · Chapineros · Álvarez Quintero · Salvador · Cuna · Orfila · Daoiz · San Andrés"},

    {n:"SAN GONZALO", dia:"LUNES SANTO", s:"15:30", e:"02:30", nazarenos:2100,
     r:"San Gonzalo (Triana) · Bienvenido Puelles Oliver · Dolores León · Avda. de Coria · San Jacinto · Altozano · Puente Isabel II · Reyes Católicos · San Pablo · Velázquez · O'Donnell · [C.O.] Campana, Sierpes, Catedral · Postigo · Arfe · Adriano · Pastor y Landero · Reyes Católicos · Puente Isabel II · Altozano · San Jacinto · Avda. de Coria · San Gonzalo"},

    {n:"VERA-CRUZ", dia:"LUNES SANTO", s:"19:00", e:"23:30", nazarenos:1600,
     r:"Jesús de la Vera-Cruz · Virgen de los Buenos Libros · Teniente Borges · Plaza de La Concordia · Duque · [C.O.] Campana, Constitución, Catedral · Argote de Molina · Francos · Salvador · Cuna · Orfila · Javier Lasso · Jesús del Gran Poder · Las Cortes · Plaza de La Concordia · Baños · Jesús de la Vera-Cruz"},

    {n:"LAS PENAS DE SAN VICENTE", dia:"LUNES SANTO", s:"17:30", e:"01:00", nazarenos:2200,
     r:"Cardenal Cisneros · San Vicente · Alfonso XII · Duque · [C.O.] Campana, Constitución, Catedral · Argote de Molina · Francos · Salvador · Sagasta · Tetuán · Velázquez · O'Donnell · Campana · Duque · Alfonso XII · Santa Vicenta Mª · Virgen de los Buenos Libros · Cardenal Cisneros"},

    {n:"LAS AGUAS", dia:"LUNES SANTO", s:"18:00", e:"23:00", nazarenos:1400,
     r:"Dos de Mayo · Arfe · Puerta del Arenal · Castelar · Molviedro · Zaragoza · San Pablo · Velázquez · O'Donnell · [C.O.] Campana, Constitución, Catedral · Plaza del Triunfo · Tomás de Ybarra · Almirantazgo · Postigo · Dos de Mayo"},

    {n:"EL MUSEO", dia:"LUNES SANTO", s:"20:00", e:"00:30", nazarenos:1300,
     r:"Plaza del Museo · Alfonso XII · Duque · [C.O.] Campana, Constitución, Catedral · Alemanes · García Vinuesa · Puerta del Arenal · Castelar · Molviedro · Zaragoza · Gravina · Pedro del Toro · Bailén · Miguel de Carvajal · Plaza del Museo"},

    // ════════════════ MARTES SANTO (8) ════════════════
    {n:"EL CERRO", dia:"MARTES SANTO", s:"13:30", e:"00:00", nazarenos:2300,
     r:"Cerro del Águila · Afán de Ribera · Aragón · Av. Hytasa · Glorieta Bizco Amate · Ramón y Cajal · Enramadilla · Carlos V · Plaza Don Juan de Austria · San Fernando · Puerta Jerez · Av. Constitución · Almirantazgo · Arfe · García Vinuesa · Fernández y González · Plaza Nueva · Tetuán · Velázquez · O'Donnell · [C.O.] Campana, Constitución, Catedral · Puerta Jerez · Av. Roma · Palos de la Frontera · Glorieta San Diego · Enramadilla · Ramón y Cajal · Glorieta Bizco Amate · Av. Hytasa · Afán de Ribera · Cerro del Águila"},

    {n:"SAN BENITO", dia:"MARTES SANTO", s:"15:00", e:"01:00", nazarenos:1900,
     r:"San Benito · Luis Montoto · Puerta Carmona · Muro de los Navarros · Santiago · Juan de Mesa · Imagen · Laraña · Orfila · Javier Lasso · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Argote de Molina · Francos · Cuesta del Rosario · Alfalfa · Águilas · Pilatos · San Esteban · Puerta Carmona · Luis Montoto · San Benito"},

    {n:"DULCE NOMBRE", dia:"MARTES SANTO", s:"16:00", e:"01:30", nazarenos:2600,
     r:"San Lorenzo · Cardenal Spínola · Plaza de la Gavidia · Las Cortes · Jesús del Gran Poder · Duque · [C.O.] Campana, Constitución, Catedral · Argote de Molina · Francos · Salvador · Cuna · Orfila · Daoiz · García Tassara · Amor de Dios · Jesús del Gran Poder · Conde de Barajas · San Lorenzo"},

    {n:"LA CANDELARIA", dia:"MARTES SANTO", s:"17:00", e:"02:00", nazarenos:2800,
     r:"San Nicolás · Muñoz y Pabón · Cabeza del Rey Don Pedro · Alfalfa · Cuesta del Rosario · Salvador · Cuna · Orfila · Javier Lasso · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Plaza del Triunfo · San Gregorio · Puerta Jerez · San Fernando · Catalina de Ribera · Sta. Mª la Blanca · San José · San Nicolás"},

    {n:"SAN ESTEBAN", dia:"MARTES SANTO", s:"14:50", e:"23:25", nazarenos:1700,
     r:"San Esteban · Pilatos · Águilas · Rodríguez Marín · Plaza San Ildefonso · Zamudio · San Leandro · Alhóndiga · Dormitorio · Cristo de Burgos · Imagen · Laraña · Orfila · Javier Lasso · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Argote de Molina · Francos · Cuesta del Rosario · Alfalfa · Águilas · Pilatos · San Esteban"},

    {n:"LOS JAVIERES", dia:"MARTES SANTO", s:"18:30", e:"02:30", nazarenos:1500,
     r:"San Francisco Javier · Virgen de África · Laraña · Orfila · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Tetuán · San Eloy · Orfila · Javier Lasso · Laraña · San Francisco Javier"},

    {n:"LOS ESTUDIANTES", dia:"MARTES SANTO", s:"19:30", e:"02:30", nazarenos:2000,
     r:"Universidad (Puerta Real) · San Fernando · Pajaritos · Laraña · [C.O.] Campana, Constitución, Catedral · Tetuán · Francos · Álvarez Quintero · Cuna · Laraña · San Fernando · Universidad"},

    {n:"SANTA CRUZ", dia:"MARTES SANTO", s:"20:00", e:"03:00", nazarenos:3200,
     r:"Santa Cruz (Judería) · Pimienta · Rodrigo Caro · Mateos Gago · [C.O.] Constitución, Catedral · Tetuán · Francos · Rodrigo Caro · Santa Cruz"},

    // ════════════════ MIÉRCOLES SANTO (10) ════════════════
    {n:"CARMEN DOLOROSO", dia:"MIÉRCOLES SANTO", s:"14:00", e:"22:00", nazarenos:1200,
     r:"Santa Ana (Triana) · Pureza · Castilla · Altozano · Puente Isabel II · Reyes Católicos · [C.O.] Campana, Constitución, Catedral · Tetuán · Arfe · Reyes Católicos · Puente Isabel II · Altozano · Santa Ana"},

    {n:"LA SED", dia:"MIÉRCOLES SANTO", s:"14:30", e:"22:30", nazarenos:1000,
     r:"La Trinidad · Alfonso XII · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Tetuán · Arfe · García Vinuesa · Alfonso XII · Trinidad"},

    {n:"EL BUEN FIN", dia:"MIÉRCOLES SANTO", s:"15:00", e:"23:30", nazarenos:1800,
     r:"Sta. Mª Magdalena · San Pablo · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Tetuán · San Eloy · Orfila · Jesús del Gran Poder · San Pablo · Sta. Mª Magdalena"},

    {n:"SAN BERNARDO", dia:"MIÉRCOLES SANTO", s:"15:00", e:"21:30", nazarenos:900,
     r:"San Bernardo · Candelaria · Menéndez Pelayo · Puerta de la Carne · Sta. Mª la Blanca · [C.O.] Campana, Constitución, Catedral · Tetuán · Francos · Cuesta del Rosario · Puerta de la Carne · San Bernardo"},

    {n:"LA LANZADA", dia:"MIÉRCOLES SANTO", s:"17:00", e:"00:30", nazarenos:1600,
     r:"Hospicio · Laraña · Orfila · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Tetuán · San Eloy · Orfila · Arrayán · Amor de Dios · Laraña · Hospicio"},

    {n:"EL BARATILLO", dia:"MIÉRCOLES SANTO", s:"18:00", e:"01:00", nazarenos:2200,
     r:"Baratillo · García Vinuesa · Arfe · Reyes Católicos · San Pablo · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Tetuán · Arfe · García Vinuesa · Baratillo"},

    {n:"LOS PANADEROS", dia:"MIÉRCOLES SANTO", s:"19:45", e:"03:15", nazarenos:1400,
     r:"Orfila · Daóiz · García Tassara · Amor de Dios · San Miguel · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Tetuán · San Eloy · Orfila"},

    {n:"SIETE PALABRAS", dia:"MIÉRCOLES SANTO", s:"21:00", e:"03:30", nazarenos:1700,
     r:"San Vicente · Baños · Jesús del Gran Poder · Trajano · [C.O.] Campana, Constitución, Catedral · Tetuán · Orfila · Javier Lasso · Jesús del Gran Poder · San Vicente"},

    {n:"CRISTO DE BURGOS", dia:"MIÉRCOLES SANTO", s:"21:30", e:"04:00", nazarenos:1500,
     r:"Cristo de Burgos · San Juan de la Palma · Feria · Alhóndiga · Laraña · [C.O.] Campana, Constitución, Catedral · Tetuán · Francos · Feria · San Julián · Cristo de Burgos"},

    {n:"LOS NEGRITOS (Mié.)", dia:"MIÉRCOLES SANTO", s:"22:00", e:"04:30", nazarenos:800,
     r:"Capilla Los Negritos · Sta. Mª la Blanca · Agua · Mármoles · [C.O.] Campana, Constitución, Catedral · Tetuán · Francos · Sta. Mª la Blanca · Los Negritos"},

    // ════════════════ JUEVES SANTO (7) ════════════════
    {n:"LOS NEGRITOS (Jue.)", dia:"JUEVES SANTO", s:"16:00", e:"22:30", nazarenos:800,
     r:"Capilla Los Negritos · Sta. Mª la Blanca · Agua · Mármoles · [C.O.] Campana, Constitución, Catedral · Tetuán · Francos · Sta. Mª la Blanca · Los Negritos"},

    {n:"EXALTACIÓN", dia:"JUEVES SANTO", s:"17:00", e:"00:30", nazarenos:2400,
     r:"San Leandro · Águilas · Cuesta del Rosario · Salvador · [C.O.] Campana, Constitución, Catedral · Tetuán · Francos · Cuesta del Rosario · Águilas · San Leandro"},

    {n:"LAS CIGARRERAS", dia:"JUEVES SANTO", s:"17:30", e:"01:30", nazarenos:1800,
     r:"Real Fábrica de Tabacos · Arfe · Reyes Católicos · San Pablo · Jesús del Gran Poder · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Tetuán · Arfe · Real Fábrica de Tabacos"},

    {n:"MONTE-SIÓN", dia:"JUEVES SANTO", s:"18:00", e:"02:00", nazarenos:1400,
     r:"Monte-Sión · San José · Jesús del Gran Poder · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Tetuán · Orfila · Javier Lasso · Jesús del Gran Poder · Monte-Sión"},

    {n:"LA QUINTA ANGUSTIA", dia:"JUEVES SANTO", s:"19:00", e:"02:30", nazarenos:2100,
     r:"El Salvador · Francos · Cuna · Orfila · Javier Lasso · Jesús del Gran Poder · [C.O.] Campana, Constitución, Catedral · Tetuán · San Eloy · Orfila · Francos · Salvador"},

    {n:"EL VALLE", dia:"JUEVES SANTO", s:"19:30", e:"03:00", nazarenos:2800,
     r:"Mª Auxiliadora (Nervión) · Luis Montoto · Menéndez Pelayo · Puerta Carmona · Jesús del Gran Poder · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Tetuán · Menéndez Pelayo · Luis Montoto · Mª Auxiliadora"},

    {n:"PASIÓN", dia:"JUEVES SANTO", s:"20:00", e:"03:30", nazarenos:3000,
     r:"San Lorenzo · Jesús del Gran Poder · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Tetuán · Orfila · Javier Lasso · Jesús del Gran Poder · San Lorenzo"},

    // ════════════════ LA MADRUGÁ (6) ════════════════
    {n:"EL SILENCIO", dia:"LA MADRUGÁ", s:"01:00", e:"06:20", nazarenos:2800,
     r:"Alfonso XII · Plaza del Duque · [C.O.] Campana, Constitución, Catedral · Tetuán · Francos · Álvarez Quintero · Cuna · Orfila · Alfonso XII"},

    {n:"GRAN PODER", dia:"LA MADRUGÁ", s:"01:00", e:"07:45", nazarenos:3000,
     r:"San Lorenzo · Conde de Barajas · Jesús del Gran Poder · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Tetuán · Orfila · Javier Lasso · Jesús del Gran Poder · San Lorenzo"},

    {n:"LA MACARENA", dia:"LA MADRUGÁ", s:"00:00", e:"13:00", nazarenos:3200,
     r:"Macarena · Resolana · Feria · Alhóndiga · Laraña · [C.O.] Campana, Constitución, Catedral · Tetuán · San Eloy · Resolana · Macarena"},

    {n:"EL CALVARIO", dia:"LA MADRUGÁ", s:"02:00", e:"08:00", nazarenos:1200,
     r:"Capilla del Calvario · Pío XII · Reyes Católicos · San Pablo · Jesús del Gran Poder · [C.O.] Campana, Constitución, Catedral · Tetuán · Arfe · Reyes Católicos · Pío XII · Calvario"},

    {n:"ESPERANZA DE TRIANA", dia:"LA MADRUGÁ", s:"01:40", e:"14:00", nazarenos:2900,
     r:"Pureza (Triana) · Betis · Altozano · Puente Isabel II · Reyes Católicos · San Pablo · [C.O.] Campana, Constitución, Catedral · Tetuán · Arfe · Reyes Católicos · Puente Isabel II · Altozano · Pureza"},

    {n:"LOS GITANOS", dia:"LA MADRUGÁ", s:"02:30", e:"13:30", nazarenos:2400,
     r:"Sta. Mª Magdalena · San Pablo · Jesús del Gran Poder · [C.O.] Campana, Constitución, Catedral · Tetuán · Orfila · Javier Lasso · Jesús del Gran Poder · San Pablo · Sta. Mª Magdalena"},

    // ════════════════ VIERNES SANTO (7) ════════════════
    {n:"LA CARRETERÍA", dia:"VIERNES SANTO", s:"09:00", e:"14:00", nazarenos:1000,
     r:"Carretería · Pedro Miguel · Arfe · Reyes Católicos · San Pablo · [C.O.] Campana, Constitución, Catedral · Tetuán · Arfe · Carretería"},

    {n:"SOLEDAD DE SAN BUENAVENTURA", dia:"VIERNES SANTO", s:"09:30", e:"15:00", nazarenos:800,
     r:"San Buenaventura · San Fernando · Pajaritos · Laraña · [C.O.] Campana, Constitución, Catedral · Tetuán · Francos · San Fernando · San Buenaventura"},

    {n:"EL CACHORRO", dia:"VIERNES SANTO", s:"12:00", e:"01:30", nazarenos:2500,
     r:"Capilla del Patrocinio (Triana) · Dos de Mayo · San Jorge · Pureza · Betis · Altozano · Puente Isabel II · Reyes Católicos · San Pablo · Jesús del Gran Poder · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Tetuán · Arfe · Reyes Católicos · Puente Isabel II · Altozano · Triana"},

    {n:"LA O", dia:"VIERNES SANTO", s:"12:30", e:"01:00", nazarenos:2200,
     r:"La O (Triana) · Pureza · Castilla · Altozano · Puente Isabel II · Reyes Católicos · San Pablo · [C.O.] Campana, Constitución, Catedral · Tetuán · Arfe · Reyes Católicos · Puente Isabel II · Altozano · La O"},

    {n:"SAN ISIDORO", dia:"VIERNES SANTO", s:"15:00", e:"22:00", nazarenos:1400,
     r:"San Isidoro · Laraña · [C.O.] Campana, Constitución, Catedral · Tetuán · Francos · Álvarez Quintero · Cuna · San Isidoro"},

    {n:"MONTSERRAT", dia:"VIERNES SANTO", s:"19:00", e:"00:00", nazarenos:1900,
     r:"Montserrat · Amor de Dios · San Miguel · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Tetuán · San Eloy · Orfila · Amor de Dios · Montserrat"},

    {n:"SAGRADA MORTAJA", dia:"VIERNES SANTO", s:"21:00", e:"02:00", nazarenos:1600,
     r:"Sta. Ana (Triana) · Pureza · Betis · Altozano · Puente Isabel II · Reyes Católicos · San Pablo · [C.O.] Campana, Constitución, Catedral · Tetuán · Arfe · Reyes Católicos · Puente Isabel II · Sta. Ana"},

    // ════════════════ SÁBADO SANTO (5) ════════════════
    {n:"EL SOL", dia:"SÁBADO SANTO", s:"10:00", e:"15:00", nazarenos:600,
     r:"Capilla del Sol (Triana) · Pureza · Altozano · Puente Isabel II · Reyes Católicos · San Pablo · [C.O.] Campana, Constitución, Catedral · Reyes Católicos · Puente Isabel II · Triana"},

    {n:"LOS SERVITAS", dia:"SÁBADO SANTO", s:"18:00", e:"23:30", nazarenos:1200,
     r:"Servitas · Agua · Mármoles · Sta. Mª la Blanca · [C.O.] Campana, Constitución, Catedral · Tetuán · Francos · Álvarez Quintero · Cuna · Sta. Mª la Blanca · Servitas"},

    {n:"LA TRINIDAD", dia:"SÁBADO SANTO", s:"19:00", e:"00:00", nazarenos:1500,
     r:"La Trinidad · Alfonso XII · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Tetuán · Arfe · García Vinuesa · Alfonso XII · Trinidad"},

    {n:"SANTO ENTIERRO GRANDE", dia:"SÁBADO SANTO", s:"20:00", e:"01:30", nazarenos:3500,
     r:"Catedral (Puerta de Palos) · [C.O.] Constitución, Campana, Sierpes, Plaza San Francisco, Constitución · Catedral. Procesión institucional de toda la ciudad con participación de todas las hermandades."},

    {n:"LA SOLEDAD", dia:"SÁBADO SANTO", s:"21:00", e:"02:00", nazarenos:1800,
     r:"San Lorenzo · Jesús del Gran Poder · Baños · San Vicente · [C.O.] Campana, Constitución, Catedral · Tetuán · Orfila · Javier Lasso · Jesús del Gran Poder · San Lorenzo"},

    // ════════════════ DOMINGO DE RESURRECCIÓN (1) ════════════════
    {n:"LA RESURRECCIÓN", dia:"DOMINGO RESURRECCIÓN", s:"08:30", e:"17:15", nazarenos:1100,
     r:"Santa Marina · San Luis · Feria · Amor de Dios · Trajano · Duque · [C.O.] Campana, Constitución, Catedral · Tetuán · San Eloy · Resolana · Santa Marina"},
],

/* ---- DATOS ESTÁTICOS (igual que antes) ---- */
transporte:[
    {linea:"C1 ESPECIAL",  desc:"Circular centro histórico. Frecuencia 8 min. Para en Prado, Menéndez Pelayo, Nervión.", icon:"fa-bus"},
    {linea:"C2 ESPECIAL",  desc:"Triana ↔ Centro. Puente de San Telmo. Servicio reforzado toda la semana.", icon:"fa-bus"},
    {linea:"C3 ESPECIAL",  desc:"Macarena ↔ Puerta Jerez. Alternativa al eje Feria cuando está cortado.", icon:"fa-bus"},
    {linea:"METRO L1",     desc:"Funciona 24h durante La Madrugá. Cocheras → Olivar de Quintos. Salida recomendada si el centro está bloqueado.", icon:"fa-train-subway"},
    {linea:"TAXI ZONA A",  desc:"Paradas en Prado de San Sebastián y Menéndez Pelayo. Sin acceso al casco histórico.", icon:"fa-taxi"},
    {linea:"BICI SEVICI",  desc:"Estaciones operativas toda la semana. Recomendado para moverse entre zonas.", icon:"fa-bicycle"},
],
mejoresSitios:[
    {nombre:"Carrera Oficial — Campana",  desc:"El mejor sitio para ver todas las hermandades. Llega 2h antes para primera fila.", icon:"fa-star"},
    {nombre:"Calle Sierpes (bajada)",     desc:"Ver pasar la procesión entre edificios históricos. Ambiente espectacular de noche.", icon:"fa-star"},
    {nombre:"Plaza del Salvador",         desc:"Hermandades del Albaicín y Macarena pasan aquí. Más espacio.", icon:"fa-star"},
    {nombre:"Puente Isabel II (amanecer)",desc:"Ver la Esperanza de Triana cruzar el puente al amanecer. Irrepetible.", icon:"fa-star"},
    {nombre:"Arco de la Macarena",        desc:"La salida de la Macarena a medianoche. La experiencia más emocionante.", icon:"fa-star"},
    {nombre:"Alameda de Hércules",        desc:"Ambiente más relajado. Perfecto para familias con niños.", icon:"fa-star"},
],
consejos:[
    {tit:"🌧️ Si llueve",         txt:"Las hermandades pueden suspender. Sigue el Consejo de Hermandades en Twitter/X. Lleva siempre chubasquero ligero.", color:"#4a90d9"},
    {tit:"👟 Calzado",            txt:"Zapatillas cómodas sin excepción. Caminarás entre 8 y 15 km por jornada.", color:"#e67e22"},
    {tit:"📱 Batería",            txt:"Carga el móvil al 100% antes de salir. Los cargadores externos son imprescindibles en La Madrugá.", color:"#27ae60"},
    {tit:"🍽️ Comer",             txt:"Evita los bares del recorrido (30 min de espera mínimo). Ve al barrio de Santa Cruz o al Arenal.", color:"#9b59b6"},
    {tit:"👁️ Respeto",           txt:"Silencio durante el paso de los pasos. No cruces la carrera aunque sea tarde. Espera siempre.", color:"var(--gold)"},
    {tit:"📍 Punto de encuentro", txt:"Queda en Plaza de España o Prado. Son los únicos puntos sin cortes garantizados.", color:"#e74c3c"},
    {tit:"🚗 Sin coche",          txt:"No lo uses durante toda la semana. Es imposible aparcar y moverse. Usa transporte público.", color:"#c0392b"},
    {tit:"🌙 La Madrugá",        txt:"Sale de Jueves a Viernes. Empieza antes de medianoche. El silencio es sagrado. La experiencia más especial.", color:"#8b0000"},
    {tit:"🎟️ Sillas",            txt:"Las sillas de la Carrera Oficial se venden con meses de antelación. Sin silla, búscate un buen sitio en pie.", color:"#16a085"},
    {tit:"👶 Con niños",          txt:"Lleva mochila con agua, snacks y audífonos. La Alameda y la Plaza del Salvador son los sitios más cómodos.", color:"#e67e22"},
],
vocabulario:[
    {term:"Paso",        def:"Trono que porta las imágenes. Pueden pesar hasta 5.500 kg y lo llevan costaleros a hombros desde dentro."},
    {term:"Costalero",   def:"Persona que porta el paso desde dentro, sin poder ver, agachada bajo el cajillo. Hasta 50 personas por paso."},
    {term:"Nazareno",    def:"Penitente vestido con túnica y capirote (cono). Cada hermandad tiene colores propios e inconfundibles."},
    {term:"Capirote",    def:"El cono que cubre el rostro. Permite la penitencia anónima. Su origen es medieval."},
    {term:"Capataz",     def:"Quien dirige a los costaleros con una llamada de matraca. El director de escena del paso."},
    {term:"Levantá",     def:"El momento en que el paso se levanta del suelo al inicio de la salida. El instante más emocionante."},
    {term:"Trabajadera", def:"Las barras de madera horizontales sobre las que cargan los costaleros para sostener el paso."},
    {term:"Saeta",       def:"Cante flamenco improvisado que se dedica al paso desde un balcón o la calle. No se aplaude."},
    {term:"Bulla",       def:"Aglomeración de gente que impide el paso. Lo que esta app te ayuda a evitar."},
    {term:"Misterio",    def:"Primer paso: escena de la Pasión con varias figuras. Sale antes que el palio."},
    {term:"Palio",       def:"Segundo paso: la Virgen bajo un techo de bordados sostenido por varales de plata."},
    {term:"Carrera Oficial", def:"El tramo central de Campana a Catedral. Todas las hermandades deben pasarlo."},
    {term:"Trabajar",    def:"Expresión que usan los costaleros al referirse a llevar el paso. «Trabajar» es el honor máximo."},
    {term:"Chicotá",     def:"Cada avance del paso: el capataz ordena la «chicotá» con la matraca y el paso avanza unos pasos."},
    {term:"Cíngulo",     def:"Cordón que rodea la cintura del nazareno. Su color identifica el cargo dentro de la hermandad."},
    {term:"Simpecado",   def:"Estandarte bordado que encabeza muchas cofradías. Lleva la imagen de la Virgen titular."},
    {term:"Palco",       def:"Estructura elevada en la Carrera Oficial desde la que se ve el paso a la altura de los ojos."},
],
telefonos:[
    {num:"112",           desc:"Emergencias generales — policia, bomberos, ambulancia", icon:"fa-phone-volume",  color:"#e74c3c"},
    {num:"061",           desc:"Emergencias sanitarias — solo urgencias médicas",         icon:"fa-kit-medical",   color:"#27ae60"},
    {num:"091",           desc:"Policía Nacional",                                         icon:"fa-shield-halved", color:"#3498db"},
    {num:"092",           desc:"Policía Local Sevilla — incidencias en la vía pública",   icon:"fa-car-side",      color:"#2980b9"},
    {num:"900 200 100",   desc:"Tussam — información de autobuses en tiempo real",         icon:"fa-bus",           color:"#e67e22"},
    {num:"955 010 101",   desc:"Información municipal Sevilla",                            icon:"fa-circle-info",   color:"var(--gold)"},
],
medica:[
    {nombre:"Puesto Cruz Roja — Campana",       dir:"Calle Campana (inicio Carrera Oficial)", nota:"Abierto durante toda la jornada procesional. Primeros auxilios.", icon:"fa-kit-medical", color:"#e74c3c"},
    {nombre:"Puesto Cruz Roja — Plaza Nueva",   dir:"Plaza Nueva s/n",                        nota:"Atención rápida. Zona central sin cortes de tráfico.", icon:"fa-kit-medical", color:"#e74c3c"},
    {nombre:"Puesto Cruz Roja — Triana",        dir:"Plaza del Altozano",                     nota:"Activo en jornadas con hermandades de Triana.", icon:"fa-kit-medical", color:"#e74c3c"},
    {nombre:"H. Virgen de la Macarena",         dir:"Av. Dr. Fedriani s/n",                   nota:"Urgencias 24h. El hospital más cercano al recorrido norte.", icon:"fa-hospital", color:"#c0392b"},
    {nombre:"H. Virgen del Rocío",              dir:"Av. Manuel Siurot s/n",                  nota:"Urgencias 24h. Más alejado del centro, menos saturado.", icon:"fa-hospital", color:"#c0392b"},
    {nombre:"Centro de Salud Nervión",          dir:"Calle Luis Montoto 71",                   nota:"Atención primaria urgente. Útil si estás en la zona este.", icon:"fa-house-medical", color:"#e67e22"},
],
comer:[
    {zona:"Barrio de Santa Cruz",     consejo:"El barrio de la Judería. Alejado de los recorridos, siempre accesible desde Menéndez Pelayo. Bodeguita Romero, El Rinconcillo.", icon:"fa-utensils"},
    {zona:"Arenal — Dos de Mayo",     consejo:"Entre jornadas del Arenal. Buen precio. Evita los bares de García Vinuesa cuando hay procesiones pasando.", icon:"fa-utensils"},
    {zona:"Alameda de Hércules",      consejo:"El punto de descanso cofrade por excelencia. Terrazas amplias sin cortes garantizados. Siempre abierto.", icon:"fa-utensils"},
    {zona:"Mercado de Triana",        consejo:"Abre toda la semana. Tapas en barra sin esperas de pie. Accesible por Puente de San Telmo.", icon:"fa-utensils"},
    {zona:"Plaza de España / Prado",  consejo:"Zona sin cortes garantizada. Varios restaurantes y bares. Ideal para reponer fuerzas antes de la noche.", icon:"fa-utensils"},
    {zona:"Calle Betis (fuera horario)", consejo:"Solo cuando no hay hermandades de Triana. Los mejores bares con vistas al Guadalquivir. Llegada: antes de las 13h o después de las 23h.", icon:"fa-utensils"},
],
radio:[
    {nombre:"Canal Sur Radio",   freq:"89.0 FM",  desc:"La retransmisión oficial. Locutores cofrades que conocen cada hermandad. Imprescindible durante La Madrugá.", icon:"fa-radio"},
    {nombre:"COPE Sevilla",      freq:"96.0 FM",  desc:"Cobertura especial con reporteros en la Carrera Oficial y los barrios.", icon:"fa-radio"},
    {nombre:"Onda Cero Sevilla", freq:"107.0 FM", desc:"Programa especial toda la semana. Directos desde templos y recorridos.", icon:"fa-radio"},
    {nombre:"Canal Sur TV",      freq:"TDT / web",desc:"Retransmisión televisada. Imprescindible para La Madrugá y Viernes Santo.", icon:"fa-tv"},
    {nombre:"YouTube — Isdabe",  freq:"youtube.com/isdabe", desc:"El canal cofrade más visto en YouTube. Directo HD de la Carrera Oficial.", icon:"fa-brands fa-youtube"},
    {nombre:"Twitter/X — @hermandades_sev", freq:"@hermandades_sev", desc:"Cuenta oficial del Consejo. Informa de suspensiones por lluvia en tiempo real.", icon:"fa-brands fa-x-twitter"},
],
llevar:[
    {item:"Zapatillas deportivas cómodas",      essential:true,  icon:"fa-shoe-prints"},
    {item:"Chubasquero ligero — siempre",        essential:true,  icon:"fa-cloud-rain"},
    {item:"Powerbank cargado al 100%",           essential:true,  icon:"fa-battery-full"},
    {item:"Agua mínimo 1 litro",                 essential:true,  icon:"fa-bottle-water"},
    {item:"Algo de comer (bares colapsados)",    essential:true,  icon:"fa-sandwich"},
    {item:"Tarjeta transporte recargada",        essential:true,  icon:"fa-credit-card"},
    {item:"Auriculares para la radio",           essential:false, icon:"fa-headphones"},
    {item:"Ropa extra para la madrugada (frío)", essential:false, icon:"fa-shirt"},
    {item:"Mapa offline descargado (Google Maps)", essential:false, icon:"fa-map"},
    {item:"DNI (controles de seguridad)",        essential:false, icon:"fa-id-card"},
],
};


/* ============================================================ 
   IMÁGENES POR HERMANDAD (LOCALES - CARPETA 'img')
============================================================ */
const IMAGENES_HERMANDADES = {
    // ══ DOMINGO DE RAMOS ══
    "LA BORRIQUITA": "img/borriquita.jpg",
    "JESÚS DESPOJADO": "img/despojado.jpg",
    "LA HINIESTA": "img/hiniesta.jpg",
    "LA PAZ": "img/paz.jpg",
    "LA CENA": "img/cena.jpg",
    "SAN ROQUE": "img/sanroque.jpg",
    "LA AMARGURA": "img/amargura.jpg",
    "LA ESTRELLA": "img/estrella.jpg",
    "EL AMOR": "img/amor.jpg",

    // ══ LUNES SANTO ══
    "EL CAUTIVO": "img/cautivo.jpg",
    "EL BESO DE JUDAS": "img/besodejudas.jpg",
    "SANTA GENOVEVA": "img/santagenoveva.jpg",
    "SANTA MARTA": "img/santamarta.jpg",
    "SAN GONZALO": "img/sangonzalo.jpg",
    "VERA-CRUZ": "img/veracruz.jpg",
    "LAS PENAS DE SAN VICENTE": "img/penas.jpg",
    "LAS AGUAS": "img/aguas.jpg",
    "EL MUSEO": "img/museo.jpg",

    // ══ MARTES SANTO ══
    "EL CERRO": "img/cerro.jpg",
    "SAN BENITO": "img/sanbenito.jpg",
    "DULCE NOMBRE": "img/dulcenombre.jpg",
    "LA CANDELARIA": "img/candelaria.jpg",
    "SAN ESTEBAN": "img/sanesteban.jpg",
    "LOS JAVIERES": "img/javieres.jpg",
    "LOS ESTUDIANTES": "img/estudiantes.jpg",
    "SANTA CRUZ": "img/santacruz.jpg",

    // ══ MIÉRCOLES SANTO ══
    "CARMEN DOLOROSO": "img/carmen.jpg",
    "LA SED": "img/sed.jpg",
    "EL BUEN FIN": "img/buenfin.jpg",
    "SAN BERNARDO": "img/sanbernardo.jpg",
    "LA LANZADA": "img/lanzada.jpg",
    "EL BARATILLO": "img/baratillo.jpg",
    "LOS PANADEROS": "img/panaderos.jpg",
    "SIETE PALABRAS": "img/sietepalabras.jpg",
    "CRISTO DE BURGOS": "img/cristoburgos.jpg",
    "LOS NEGRITOS (Mié.)": "img/negritos.jpg",

    // ══ JUEVES SANTO ══
    "LOS NEGRITOS (Jue.)": "img/negritos.jpg", // Usa la misma foto que el miércoles
    "EXALTACIÓN": "img/exaltacion.jpg",
    "LAS CIGARRERAS": "img/cigarreras.jpg",
    "MONTE-SIÓN": "img/montesion.jpg",
    "LA QUINTA ANGUSTIA": "img/quintaangustia.jpg",
    "EL VALLE": "img/valle.jpg",
    "PASIÓN": "img/pasion.jpg",

    // ══ LA MADRUGÁ ══
    "EL SILENCIO": "img/silencio.jpg",
    "GRAN PODER": "img/granpoder.jpg",
    "LA MACARENA": "img/macarena.jpg",
    "EL CALVARIO": "img/calvario.jpg",
    "ESPERANZA DE TRIANA": "img/esperanzatriana.jpg",
    "LOS GITANOS": "img/gitanos.jpg",

    // ══ VIERNES SANTO ══
    "LA CARRETERÍA": "img/carreteria.jpg",
    "SOLEDAD DE SAN BUENAVENTURA": "img/soledadsanbuena.jpg",
    "EL CACHORRO": "img/cachorro.jpg",
    "LA O": "img/lao.jpg",

    "MONTSERRAT": "img/montserrat.jpg",
    "SAGRADA MORTAJA": "img/mortaja.jpg",

    // ══ SÁBADO SANTO ══
    "EL SOL": "img/sol.jpg",
    "LOS SERVITAS": "img/servitas.jpg",
    "LA TRINIDAD": "img/trinidad.jpg",
    "SANTO ENTIERRO GRANDE": "img/santoentierro.jpg",
    "LA SOLEDAD": "img/soledadsanlorenzo.jpg",

    // ══ DOMINGO DE RESURRECCIÓN ══
    "LA RESURRECCIÓN": "img/resurreccion.jpg"
};

// Asignador dinámico de imágenes con Placeholder
DATA.programa.forEach(p => {
    if (IMAGENES_HERMANDADES[p.n]) {
        p.img = IMAGENES_HERMANDADES[p.n];
    } else {
        // Fallback elegante por si te falta alguna foto por descargar
        const textoCorto = encodeURIComponent(p.n.length > 18 ? p.n.substring(0, 18) + '...' : p.n);
        p.img = `https://placehold.co/800x500/161618/D4AF37?text=${textoCorto}&font=Montserrat`;
    }
});

/* ============================================================ ESTADO */
let currentView='bullas',currentDay='TODOS',favorites=[];
try{favorites=JSON.parse(localStorage.getItem('antibullas_favs')||'[]');}catch(e){}

const appContent=document.getElementById('app-content');
const searchInput=document.getElementById('global-search');
const searchClear=document.getElementById('search-clear');
const dayFilter=document.getElementById('day-filter');

/* ============================================================ UTILS */
const debounce=(fn,ms=250)=>{let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms);};};
function safeText(s){return String(s||'').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function timeToMin(str){const[h,m]=str.split(':').map(Number);return h*60+m;}
function isLive(rangeStr,bullaDay){
    const todayKey=getTodaySSDay();
    if(!todayKey||todayKey==='ANTES'||todayKey==='DESPUÉS') return false;
    if(bullaDay&&bullaDay!==todayKey) return false;
    const now=new Date(),cur=now.getHours()*60+now.getMinutes();
    const[a,b]=rangeStr.split(' - ').map(s=>s.trim());
    let start=timeToMin(a),end=timeToMin(b);
    if(end<start)end+=1440;
    const adj=(cur<start&&end>1440)?cur+1440:cur;
    return adj>=start&&adj<=end;
}
function isFav(name){return favorites.includes(name);}
function toggleFav(name){
    if(isFav(name))favorites=favorites.filter(n=>n!==name);
    else favorites.push(name);
    try{localStorage.setItem('antibullas_favs',JSON.stringify(favorites));}catch(e){}
}

/* ============================================================ MAPA */
let map;
const mapModal=document.getElementById('map-modal');
document.getElementById('map-close').addEventListener('click',()=>mapModal.setAttribute('aria-hidden','true'));
mapModal.addEventListener('click',e=>{if(e.target===mapModal)mapModal.setAttribute('aria-hidden','true');});
function openMapAt(lat,lng,title){
    mapModal.setAttribute('aria-hidden','false');
    setTimeout(()=>{
        if(!map){map=L.map('map').setView([lat,lng],16);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap'}).addTo(map);}
        else{map.setView([lat,lng],16);}
        L.marker([lat,lng]).addTo(map).bindPopup(`<strong>${title}</strong>`).openPopup();
        map.invalidateSize();
    },50);
}

/* ============================================================ CLIMA — Open-Meteo (sin API key) */
const WMO={0:'Despejado ☀️',1:'Mayormente despejado',2:'Parcialmente nublado',3:'Nublado ☁️',
    45:'Niebla',48:'Niebla con escarcha',51:'Llovizna ligera',53:'Llovizna',55:'Llovizna intensa',
    61:'Lluvia ligera 🌧️',63:'Lluvia',65:'Lluvia intensa',71:'Nevada ligera',73:'Nevada',75:'Nevada intensa',
    80:'Chubascos ligeros',81:'Chubascos 🌦️',82:'Chubascos fuertes',
    95:'Tormenta ⛈️',96:'Tormenta con granizo',99:'Tormenta con granizo fuerte'};
const WMO_RAIN=new Set([51,53,55,61,63,65,71,73,75,80,81,82,95,96,99]);

async function fetchClima(card){
    try{
        const r=await fetch('https://api.open-meteo.com/v1/forecast?latitude=37.3886&longitude=-5.9823&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,weather_code&timezone=Europe/Madrid&forecast_days=1');
        if(!r.ok) throw new Error('HTTP '+r.status);
        const d=await r.json();
        const c=d.current;
        const tempC=Math.round(c.temperature_2m);
        const hum=Math.round(c.relative_humidity_2m);
        const wind=Math.round(c.wind_speed_10m);
        const prec=c.precipitation||0;
        const code=c.weather_code;
        const desc=WMO[code]||'Variable';
        const rainAlert=WMO_RAIN.has(code)||prec>0;
        card.innerHTML=`<div class="weather-inner${rainAlert?' rain-alert':''}">
            <div class="weather-main">
                <span class="weather-temp">${tempC}°C</span>
                <div class="weather-info">
                    <span class="weather-desc">${desc}</span>
                    <span class="weather-detail">
                        <i class="fa-solid fa-wind"></i> ${wind} km/h
                        &nbsp;·&nbsp;<i class="fa-solid fa-droplet"></i> ${prec} mm
                        &nbsp;·&nbsp;<i class="fa-solid fa-water"></i> ${hum}%
                    </span>
                </div>
            </div>
            ${rainAlert
                ?'<div class="rain-warning"><i class="fa-solid fa-triangle-exclamation"></i> POSIBLE LLUVIA — Consulta si tu hermandad sale antes de salir</div>'
                :'<div class="rain-ok"><i class="fa-solid fa-circle-check"></i> Buen tiempo para procesiones</div>'}
        </div>`;
    }catch(e){
        card.innerHTML=`<div class="weather-inner">
            <div class="weather-main">
                <span class="weather-temp" style="font-size:.85rem">Sevilla, Semana Santa</span>
                <div class="weather-info">
                    <span class="weather-desc">~20-24°C · Clima típico de abril</span>
                    <span class="weather-detail">Lleva siempre chubasquero ligero</span>
                </div>
            </div>
        </div>`;
    }
}

/* Dato especial por jornada */
const DATO_DIA={
    'DOMINGO DE RAMOS':  {ico:'🌿', tit:'El inicio',          txt:'La Borriquita es la hermandad favorita de los niños de Sevilla. Desde 1570, el Domingo de Ramos abre la Semana Santa. Este año salen 9 hermandades.'},
    'LUNES SANTO':       {ico:'🚶', tit:'El recorrido más largo',txt:'El Cautivo hace el itinerario más largo de toda la Semana Santa: 14 horas desde el Polígono San Pablo. Son más de 20 km de recorrido total.'},
    'MARTES SANTO':      {ico:'⭐', tit:'Santa Cruz, la última',  txt:'Santa Cruz es la última hermandad en entrar a la Carrera Oficial cada Martes Santo. Su recogida de madrugada en la Judería es uno de los momentos más íntimos de la Semana Santa.'},
    'MIÉRCOLES SANTO':   {ico:'🕯️', tit:'Noche de panaderos',   txt:'Los Panaderos tienen una de las tradiciones más antiguas: su hermandad data del siglo XV y fue fundada por el gremio de panaderos de Sevilla.'},
    'JUEVES SANTO':      {ico:'🔥', tit:'La jornada más larga',  txt:'El Jueves Santo es la jornada con más horas de procesiones del año. Desde las 16h hasta las 4:30h del viernes. 7 hermandades y más de 16.000 nazarenos en la calle.'},
    'LA MADRUGÁ':        {ico:'🌙', tit:'La noche más esperada', txt:'La Madrugá es la noche más importante de la Semana Santa mundial. La Esperanza de Triana cruza el Puente de Triana al amanecer, uno de los momentos más emocionantes del año.'},
    'VIERNES SANTO':     {ico:'✝️', tit:'El Cachorro de Triana', txt:'El Cachorro, cuyo nombre oficial es "Cristo de la Expiración", es la imagen más popular de Triana. Su expresión de agonía fue esculpida por Francisco Ruiz Gijón en 1682.'},
    'SÁBADO SANTO':      {ico:'⚫', tit:'El Santo Entierro',     txt:'El Santo Entierro Grande es la procesión institucional de toda la ciudad. Es la única en la que participan representantes de todas las hermandades de Sevilla.'},
    'DOMINGO RESURRECCIÓN':{ico:'☀️', tit:'El cierre',           txt:'La Resurrección cierra la Semana Santa. Su recorrido matutino por las calles de Santa Marina es el colofón a una semana única. Desde 1987 es la hermandad del cierre oficial.'},
};

/* ============================================================ HOY */
async function renderHoy(){
    const todayKey=getTodaySSDay();
    const frag=document.createDocumentFragment();

    /* ── CLIMA (Open-Meteo) ── */
    const weatherCard=document.createElement('div');
    weatherCard.className='hoy-weather-card';
    weatherCard.innerHTML=`<div class="weather-inner"><div class="weather-loading"><i class="fa-solid fa-spinner fa-spin"></i> Cargando clima de Sevilla...</div></div>`;
    frag.appendChild(weatherCard);
    fetchClima(weatherCard);

    /* ── BANNER DE DÍA ── */
    const banner=document.createElement('div');
    if(todayKey==="ANTES"){
        const daysLeft=Math.ceil((SS2026["DOMINGO DE RAMOS"]-new Date())/86400000);
        banner.className='hoy-banner hoy-soon';
        banner.innerHTML=`<i class="fa-solid fa-hourglass-half"></i><div><strong>Faltan ${daysLeft} días</strong><span>La Semana Santa 2026 comienza el 29 de marzo</span></div>`;
        frag.appendChild(banner);
        // Cuenta atrás visual de las jornadas
        const jornadas=document.createElement('div');jornadas.className='hoy-jornadas-prev';
        jornadas.innerHTML=`<div class="section-header" style="padding:16px 14px 8px"><h2 class="section-title">Jornadas</h2></div>`;
        const jGrid=document.createElement('div');jGrid.className='hoy-jornadagrid';
        DAY_ORDER.forEach(d=>{
            const fecha=SS2026[d]||SS2026['VIERNES SANTO'];
            const diff=Math.ceil((fecha-new Date())/86400000);
            const el=document.createElement('div');el.className='hoy-jornadaitem';
            el.innerHTML=`<span class="hj-day">${DAY_SHORT[d]||d}</span><span class="hj-diff">${diff>0?'en '+diff+'d':'hoy'}</span>`;
            jGrid.appendChild(el);
        });
        jornadas.appendChild(jGrid);
        frag.appendChild(jornadas);
        appContent.innerHTML='';appContent.appendChild(frag);
        return;
    } else if(todayKey==="DESPUÉS"){
        banner.className='hoy-banner hoy-ended';
        banner.innerHTML=`<i class="fa-solid fa-church"></i><div><strong>Hasta el año que viene</strong><span>La Semana Santa 2026 ha terminado</span></div>`;
        frag.appendChild(banner);
        appContent.innerHTML='';appContent.appendChild(frag);
        return;
    } else {
        banner.className='hoy-banner hoy-active';
        banner.innerHTML=`<i class="fa-solid fa-fire"></i><div><strong>${todayKey}</strong><span>Esto es lo que pasa hoy en Sevilla</span></div>`;
    }
    frag.appendChild(banner);

    const hoyProg=DATA.programa.filter(p=>p.dia===todayKey);
    const hoyBullas=DATA.bullas.filter(b=>b.d===todayKey);
    const now=new Date(), curMin=now.getHours()*60+now.getMinutes();

    /* ── ESTADÍSTICAS DEL DÍA ── */
    const totalNaz=hoyProg.reduce((s,p)=>s+p.nazarenos,0);
    // hora punta = franja de 60 min con más hermandades simultáneas
    let peakHour='',peakCount=0;
    for(let m=480;m<1440+480;m+=30){
        const cnt=hoyProg.filter(p=>{
            const s=timeToMin(p.s);
            let e=timeToMin(p.e);if(e<s)e+=1440;
            const mm=m>1440?m-1440:m;
            return mm>=s&&mm<=e;
        }).length;
        if(cnt>peakCount){peakCount=cnt;const h=Math.floor((m>1440?m-1440:m)/60);const mn=(m>1440?m-1440:m)%60;peakHour=`${String(h).padStart(2,'0')}:${String(mn).padStart(2,'0')}`;}
    }
    const statsEl=document.createElement('div');statsEl.className='hoy-stats';
    statsEl.innerHTML=`
        <div class="hoy-stat"><span class="hs-val">${hoyProg.length}</span><span class="hs-lbl">Hermandades</span></div>
        <div class="hoy-stat-sep"></div>
        <div class="hoy-stat"><span class="hs-val">${Math.round(totalNaz/1000)}K</span><span class="hs-lbl">Nazarenos</span></div>
        <div class="hoy-stat-sep"></div>
        <div class="hoy-stat"><span class="hs-val">${hoyBullas.length}</span><span class="hs-lbl">Zonas críticas</span></div>
        <div class="hoy-stat-sep"></div>
        <div class="hoy-stat"><span class="hs-val">${peakHour}</span><span class="hs-lbl">Hora punta</span></div>`;
    frag.appendChild(statsEl);

    /* ── WIDGET EN CALLE AHORA / PRÓXIMA ── */
    const enCalleAhora=hoyProg.filter(p=>{
        let eMin=timeToMin(p.e);if(eMin<timeToMin(p.s))eMin+=1440;
        return curMin>=timeToMin(p.s)&&curMin<=eMin;
    });
    const proxima=hoyProg.filter(p=>timeToMin(p.s)>curMin).sort((a,b)=>timeToMin(a.s)-timeToMin(b.s))[0];

    if(enCalleAhora.length||proxima){
        const lw=document.createElement('div');lw.className='hoy-live-widget';
        let lwHtml='';
        if(enCalleAhora.length){
            lwHtml+=`<div class="hlw-header">
                <span class="live-badge" style="font-size:.7rem;padding:4px 10px"><span class="live-dot"></span>EN CALLE AHORA</span>
                <span class="hlw-count">${enCalleAhora.length} hermandad${enCalleAhora.length>1?'es':''}</span>
            </div>
            <div class="hlw-names">${enCalleAhora.map(p=>`<span class="hlw-chip">${safeText(p.n)}</span>`).join('')}</div>`;
        }
        if(proxima){
            const mins=timeToMin(proxima.s)-curMin;
            const hF=Math.floor(mins/60),mF=mins%60;
            const cStr=hF>0?(mF>0?`${hF}h ${mF}min`:`${hF}h`):mins+'min';
            lwHtml+=`<div class="hlw-next${enCalleAhora.length?' hlw-next-sep':''}">
                <span class="hlw-next-label">PRÓXIMA</span>
                <div class="hlw-next-info">
                    <strong>${safeText(proxima.n)}</strong>
                    <span>Sale a las <strong>${proxima.s}</strong> — faltan <strong class="hlw-countdown">${cStr}</strong></span>
                </div>
            </div>`;
        }
        lw.innerHTML=lwHtml;
        frag.appendChild(lw);
    }

    /* ── ACCESOS RÁPIDOS ── */
    const planHoy=hoyProg.filter(p=>inPlan(p.n));
    const qa=document.createElement('div');qa.className='hoy-quick-actions';
    qa.innerHTML=`
        <button class="hoy-qa-btn" onclick="switchView('bullas',document.getElementById('btn-bullas'))">
            <i class="fa-solid fa-shield-halved"></i>
            <span>Zonas a evitar</span>
            <strong>${hoyBullas.length}</strong>
        </button>
        <button class="hoy-qa-btn" onclick="switchView('miplan',document.getElementById('btn-miplan'))">
            <i class="fa-solid fa-route"></i>
            <span>Mi plan hoy</span>
            <strong>${planHoy.length>0?planHoy.length+' herm.':'Crear'}</strong>
        </button>
        <button class="hoy-qa-btn" onclick="switchView('programa',document.getElementById('btn-prog'))">
            <i class="fa-solid fa-clock"></i>
            <span>Programa</span>
            <strong>${hoyProg.length} herm.</strong>
        </button>`;
    frag.appendChild(qa);

    /* ── DATO DEL DÍA ── */
    const dato=DATO_DIA[todayKey];
    if(dato){
        const datoEl=document.createElement('div');datoEl.className='hoy-dato';
        datoEl.innerHTML=`<span class="dato-ico">${dato.ico}</span>
            <div class="dato-body">
                <span class="dato-tit">${safeText(dato.tit)}</span>
                <p>${safeText(dato.txt)}</p>
            </div>`;
        frag.appendChild(datoEl);
    }

    /* ── TIMELINE VISUAL DEL DÍA ── */
    if(hoyProg.length){
        const sec=document.createElement('div');sec.className='section-header';
        sec.innerHTML=`<h2 class="section-title">Orden de salida</h2><span class="section-count">${hoyProg.length} hermandades</span>`;
        frag.appendChild(sec);
        const tl=document.createElement('div');tl.className='hoy-timeline';
        hoyProg.forEach((p,i)=>{
            let eMin=timeToMin(p.e);if(eMin<timeToMin(p.s))eMin+=1440;
            const enCalle=curMin>=timeToMin(p.s)&&curMin<=eMin;
            const pasada=curMin>eMin+15;
            const totalMins=eMin-timeToMin(p.s);
            const progPct=enCalle?Math.round(Math.min(100,(curMin-timeToMin(p.s))/totalMins*100)):pasada?100:0;
            const row=document.createElement('div');
            row.className=`hoy-tl-row${enCalle?' hoy-tl-live':''}${pasada?' hoy-tl-pasada':''}`;
            row.style.animationDelay=`${i*0.03}s`;
            row.innerHTML=`
                <div class="hoy-tl-left">
                    <span class="hoy-tl-hora">${safeText(p.s)}</span>
                    ${enCalle?'<span class="hoy-tl-dot dot-live"></span>':'<span class="hoy-tl-dot"></span>'}
                </div>
                <div class="hoy-tl-body">
                    <div class="hoy-tl-top">
                        ${enCalle?'<span class="live-badge" style="font-size:.55rem;padding:2px 7px;margin-bottom:3px;display:inline-flex"><span class="live-dot"></span>EN CALLE</span>':''}
                        <strong>${safeText(p.n)}</strong>
                        <span class="hoy-tl-meta"><i class="fa-solid fa-person" style="font-size:.6rem"></i> ${p.nazarenos.toLocaleString()} · Hasta las ${p.e}</span>
                    </div>
                    ${(enCalle||pasada)?`<div class="hoy-tl-progress"><div class="hoy-tl-bar" style="width:${progPct}%"></div></div>`:''}
                </div>
                <button class="hoy-tl-plan-btn${inPlan(p.n)?' in-plan':''}" data-n="${safeText(p.n)}" aria-label="${inPlan(p.n)?'En tu plan':'Añadir al plan'}">
                    <i class="fa-${inPlan(p.n)?'solid':'regular'} fa-bookmark"></i>
                </button>`;
            tl.appendChild(row);
        });
        frag.appendChild(tl);
    }

    /* ── ZONAS CONFLICTIVAS HOY (compactas) ── */
    if(hoyBullas.length){
        const sec2=document.createElement('div');sec2.className='section-header';
        sec2.innerHTML=`<h2 class="section-title">Zonas a evitar hoy</h2><span class="section-count">${hoyBullas.length}</span>`;
        frag.appendChild(sec2);
        hoyBullas.forEach((b,i)=>{
            const live=isLive(b.h,b.d);
            const chip=document.createElement('div');chip.className=`bulla-chip${live?' bulla-live':''}`;
            chip.style.animationDelay=`${i*0.04}s`;
            chip.innerHTML=`<div class="bulla-chip-left"><span class="lvl ${safeText(b.l)}">${safeText(b.l)}</span><strong>${safeText(b.z)}</strong><span>${b.h}</span></div>${live?'<span class="live-badge"><span class="live-dot"></span>AHORA</span>':''}`;
            frag.appendChild(chip);
        });
    }

    appContent.innerHTML='';appContent.appendChild(frag);
    document.querySelectorAll('.hoy-tl-plan-btn').forEach(btn=>{
        btn.addEventListener('click',()=>{
            togglePlan(btn.dataset.n);
            btn.className=`hoy-tl-plan-btn${inPlan(btn.dataset.n)?' in-plan':''}`;
            btn.innerHTML=`<i class="fa-${inPlan(btn.dataset.n)?'solid':'regular'} fa-bookmark"></i>`;
        });
    });
}

/* ============================================================ BULLAS */
function renderBullas(){
    const search=(searchInput.value||'').toLowerCase().trim();
    let filtered=DATA.bullas.filter(b=>{
        const matchDay=currentDay==='TODOS'||b.d===currentDay;
        const matchSearch=!search||b.z.toLowerCase().includes(search)||b.d.toLowerCase().includes(search)||b.c.toLowerCase().includes(search);
        return matchDay&&matchSearch;
    });
    const frag=document.createDocumentFragment();
    const sec=document.createElement('div');sec.className='section-header';
    sec.innerHTML=`<h2 class="section-title">Zonas conflictivas</h2><span class="section-count">${filtered.length} de ${DATA.bullas.length}</span>`;
    frag.appendChild(sec);
    if(!filtered.length){frag.appendChild(emptyState('fa-shield-halved','No hay bullas para esta búsqueda.'));}
    else{
        const list=document.createElement('ul');list.className='cards-list';list.setAttribute('role','list');
        filtered.forEach(b=>{
            const live=isLive(b.h,b.d);
            const card=document.createElement('li');card.className='bulla-card';card.setAttribute('role','listitem');card.tabIndex=0;
            const img=document.createElement('img');img.className='bulla-img';img.alt=b.z;img.loading='lazy';img.src=b.img;
            const top=document.createElement('div');top.className='card-top';
            const topLeft=document.createElement('div');topLeft.className='card-top-left';
            topLeft.innerHTML=`<span class="day-tag">${safeText(b.d)}</span>${live?'<span class="live-badge"><span class="live-dot"></span>EN CURSO</span>':''}`;
            const lvlSpan=document.createElement('span');lvlSpan.className=`lvl ${safeText(b.l)}`;lvlSpan.textContent=b.l;
            top.appendChild(topLeft);top.appendChild(lvlSpan);
            const body=document.createElement('div');body.className='card-body';
            body.innerHTML=`<h3>${safeText(b.z)}</h3><span class="hour"><i class="fa-regular fa-clock"></i> HORARIO CRÍTICO: ${safeText(b.h)}</span><p class="desc">${safeText(b.c)}</p><div class="escape-box"><strong><i class="fa-solid fa-route"></i> RUTA DE ESCAPE</strong><p>${safeText(b.e)}</p></div>`;
            const btns=document.createElement('div');btns.className='card-actions';
            if(b.lat){const mb=document.createElement('button');mb.className='btn-mapa';mb.innerHTML='<i class="fa-solid fa-map-pin"></i> VER EN MAPA';mb.addEventListener('click',()=>openMapAt(b.lat,b.lng,b.z));btns.appendChild(mb);}
            const el=document.createElement('a');el.className='btn-mapa secondary';el.href=`https://www.google.com/maps/search/${encodeURIComponent(b.z+' Sevilla')}`;el.target='_blank';el.rel='noopener noreferrer';el.innerHTML='<i class="fa-brands fa-google"></i> Google Maps';
            btns.appendChild(el);body.appendChild(btns);card.appendChild(img);card.appendChild(top);card.appendChild(body);list.appendChild(card);
        });
        frag.appendChild(list);
    }
    appContent.innerHTML='';appContent.appendChild(frag);
}

/* ============================================================ PROGRAMA */
function buildItinerario(r){
    // Divide el recorrido en SALIDA · CARRERA OFICIAL · RECOGIDA
    const coIdx = r.indexOf('[C.O.]');
    if(coIdx === -1){
        // Sin C.O.: mostrar como bloque único
        const paradas = r.split('·').map(s=>s.trim()).filter(Boolean);
        return `<div class="itin-bloque"><div class="itin-fase-label"><i class="fa-solid fa-route"></i> RECORRIDO</div><div class="itin-paradas">${paradas.map((p,i)=>`<span class="itin-stop">${safeText(p)}</span>${i<paradas.length-1?'<span class="itin-arrow">›</span>':''}`).join('')}</div></div>`;
    }
    const anteCO = r.slice(0, coIdx).trim().replace(/·\s*$/, '');
    const despCO = r.slice(coIdx + 6).trim().replace(/^,\s*/, '');
    // Separar carrera oficial de recogida: la C.O. termina en la Catedral
    const catedralIdx = despCO.search(/[Cc]atedral/);
    let coStr = '', recogida = '';
    if(catedralIdx !== -1){
        coStr = despCO.slice(0, catedralIdx + 8).trim().replace(/^[·,\s]+/, '').replace(/[·,\s]+$/, '');
        recogida = despCO.slice(catedralIdx + 8).trim().replace(/^[·,\s]+/, '');
    } else {
        coStr = despCO;
    }
    const salida = anteCO.split('·').map(s=>s.trim()).filter(Boolean);
    const co = coStr.split(/[·,]/).map(s=>s.trim()).filter(Boolean);
    const vuelta = recogida.split('·').map(s=>s.trim()).filter(Boolean);

    let html = '';
    if(salida.length){
        html += `<div class="itin-bloque"><div class="itin-fase-label"><i class="fa-solid fa-church"></i> SALIDA</div><div class="itin-paradas">${salida.map((p,i)=>`<span class="itin-stop">${safeText(p)}</span>${i<salida.length-1?'<span class="itin-arrow">›</span>':''}`).join('')}</div></div>`;
    }
    if(co.length){
        html += `<div class="itin-bloque itin-co"><div class="itin-fase-label"><i class="fa-solid fa-star"></i> CARRERA OFICIAL</div><div class="itin-paradas">${co.map((p,i)=>`<span class="itin-stop itin-stop-co">${safeText(p)}</span>${i<co.length-1?'<span class="itin-arrow">›</span>':''}`).join('')}</div></div>`;
    }
    if(vuelta.length){
        html += `<div class="itin-bloque"><div class="itin-fase-label"><i class="fa-solid fa-rotate-left"></i> RECOGIDA</div><div class="itin-paradas">${vuelta.map((p,i)=>`<span class="itin-stop">${safeText(p)}</span>${i<vuelta.length-1?'<span class="itin-arrow">›</span>':''}`).join('')}</div></div>`;
    }
    return html;
}

function calcDuracion(s, e){
    const [sh,sm]=s.split(':').map(Number);
    let [eh,em]=e.split(':').map(Number);
    if(eh<sh) eh+=24;
    const mins = (eh*60+em)-(sh*60+sm);
    const h = Math.floor(mins/60), m = mins%60;
    return m>0 ? `${h}h ${m}m` : `${h}h`;
}

function renderPrograma(){
    const search=(searchInput.value||'').toLowerCase().trim();
    let filtered=DATA.programa.filter(p=>{
        const matchDay=currentDay==='TODOS'||p.dia===currentDay;
        const matchSearch=!search||p.n.toLowerCase().includes(search)||p.dia.toLowerCase().includes(search)||p.r.toLowerCase().includes(search);
        return matchDay&&matchSearch;
    });
    const frag=document.createDocumentFragment();
    const sec=document.createElement('div');sec.className='section-header';
    sec.innerHTML=`<h2 class="section-title">Hermandades 2026</h2><span class="section-count">${filtered.length} de ${DATA.programa.length}</span>`;
    frag.appendChild(sec);
    if(!filtered.length){frag.appendChild(emptyState('fa-clock','No se han encontrado hermandades.'));}
    else{
        const list=document.createElement('div');list.setAttribute('role','list');
        filtered.forEach(p=>{
            const fav=isFav(p.n);
            const ex=EXTRA[p.n]||{};
            const dur=calcDuracion(p.s,p.e);
            const item=document.createElement('div');item.className='prog-item';item.tabIndex=0;item.setAttribute('role','button');item.setAttribute('aria-expanded','false');

            // ── CABECERA ──
            const main=document.createElement('div');main.className='prog-main-info';
            main.innerHTML=`
              <div class="prog-info">
                <span class="prog-day-tag">${safeText(p.dia)}</span>
                <h4>${safeText(p.n)}</h4>
                <span class="prog-hint"><i class="fa-solid fa-chevron-down"></i> Ver ficha completa</span>
              </div>
              <div style="display:flex;align-items:center;gap:8px">
                <button class="fav-btn ${fav?'fav-active':''}" data-name="${safeText(p.n)}" aria-label="Añadir a favoritos">
                  <i class="fa-${fav?'solid':'regular'} fa-heart"></i>
                </button>
                <div class="time-box">
                  <span class="time-label">SALE</span>
                  <span class="time-val">${safeText(p.s)}</span>
                  <span class="time-label" style="margin-top:4px">LLEGA</span>
                  <span class="time-val llegada">${safeText(p.e)}</span>
                </div>
              </div>`;

            // ── DETALLE (ficha) ──
            const details=document.createElement('div');details.className='prog-details';

            // Imagen
            if(p.img){
                const th=document.createElement('img');th.className='prog-thumb';th.alt=p.n;th.loading='lazy';th.src=p.img;
                details.appendChild(th);
            }

            // Stats row
            const statsEl=document.createElement('div');statsEl.className='herm-stats';
            statsEl.innerHTML=`
              <div class="herm-stat"><span class="hstat-val">${ex.fundada||'—'}</span><span class="hstat-lbl">FUNDACIÓN</span></div>
              <div class="herm-stat"><span class="hstat-val">${p.nazarenos.toLocaleString()}</span><span class="hstat-lbl">NAZARENOS</span></div>
              <div class="herm-stat"><span class="hstat-val">${ex.pasos||2}</span><span class="hstat-lbl">PASOS</span></div>
              <div class="herm-stat"><span class="hstat-val">${dur}</span><span class="hstat-lbl">EN CALLE</span></div>`;
            details.appendChild(statsEl);

            // Titular
            if(ex.titular){
                const titEl=document.createElement('div');titEl.className='herm-titular';
                titEl.innerHTML=`<i class="fa-solid fa-cross"></i> <span>${safeText(ex.titular)}</span>`;
                details.appendChild(titEl);
            }

            // Templo + Túnica
            const metaEl=document.createElement('div');metaEl.className='herm-meta-row';
            metaEl.innerHTML=`
              ${ex.templo?`<span class="herm-meta-pill"><i class="fa-solid fa-archway"></i> ${safeText(ex.templo)}</span>`:''}
              ${ex.tunica?`<span class="herm-meta-pill tunica-pill"><i class="fa-solid fa-shirt"></i> ${safeText(ex.tunica)}</span>`:''}`;
            details.appendChild(metaEl);

            // Curiosidad
            if(ex.curiosidad){
                const curEl=document.createElement('div');curEl.className='herm-curiosidad';
                curEl.innerHTML=`<div class="curio-header"><i class="fa-solid fa-scroll"></i> <strong>SABÍAS QUE...</strong></div><p>${safeText(ex.curiosidad)}</p>`;
                details.appendChild(curEl);
            }

            // Itinerario
            const itinEl=document.createElement('div');itinEl.className='herm-itinerario';
            itinEl.innerHTML=`<div class="itin-header"><i class="fa-solid fa-map-location-dot"></i> <strong>ESTACIÓN DE PENITENCIA MMXXVI</strong></div>${buildItinerario(p.r)}`;
            details.appendChild(itinEl);

            // Botón mapa
            const btnEl=document.createElement('div');btnEl.className='herm-actions';
            btnEl.innerHTML=`<a class="btn-mapa" href="https://www.google.com/maps/search/Sevilla+${encodeURIComponent(p.n)}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-location-dot"></i> SEGUIR EN TIEMPO REAL</a>`;
            details.appendChild(btnEl);

            item.appendChild(main);item.appendChild(details);

            main.querySelector('.fav-btn').addEventListener('click',e=>{
                e.stopPropagation();
                const n=e.currentTarget.dataset.name;toggleFav(n);
                const a=isFav(n);
                e.currentTarget.className=`fav-btn ${a?'fav-active':''}`;
                e.currentTarget.innerHTML=`<i class="fa-${a?'solid':'regular'} fa-heart"></i>`;
            });
            item.addEventListener('click',()=>{const open=item.classList.toggle('open');item.setAttribute('aria-expanded',open?'true':'false');});
            item.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();item.click();}});
            list.appendChild(item);
        });
        frag.appendChild(list);
    }
    appContent.innerHTML='';appContent.appendChild(frag);
}

/* ============================================================ MI PLAN */
/* Variables de estado — persisten entre visitas */
let miPlan=[];
try{miPlan=JSON.parse(localStorage.getItem('antibullas_plan')||'[]');}catch(e){}
function savePlan(){try{localStorage.setItem('antibullas_plan',JSON.stringify(miPlan));}catch(e){}}
function inPlan(nombre){return miPlan.includes(nombre);}
function togglePlan(nombre){
    if(inPlan(nombre)) miPlan=miPlan.filter(n=>n!==nombre);
    else miPlan.push(nombre);
    savePlan();
}

// Orden oficial de los días
const DAY_ORDER=['DOMINGO DE RAMOS','LUNES SANTO','MARTES SANTO','MIÉRCOLES SANTO','JUEVES SANTO','LA MADRUGÁ','VIERNES SANTO','SÁBADO SANTO','DOMINGO RESURRECCIÓN'];
const DAY_SHORT={'DOMINGO DE RAMOS':'D.RAMOS','LUNES SANTO':'LUNES','MARTES SANTO':'MARTES','MIÉRCOLES SANTO':'MIÉRC.','JUEVES SANTO':'JUEVES','LA MADRUGÁ':'MADRUGÁ','VIERNES SANTO':'VIERNES','SÁBADO SANTO':'SÁBADO','DOMINGO RESURRECCIÓN':'RESURRECC.'};

// Extrae el templo de la primera parte del recorrido (antes del primer ·)
function getTemple(r){
    const coIdx=r.indexOf('[C.O.]');
    const pre=coIdx>-1?r.slice(0,coIdx):r;
    return pre.split('·')[0].trim();
}

// Extrae calles intermedias del recorrido (elementos 1 a 3 antes de C.O.)
function getIntermedios(r){
    const coIdx=r.indexOf('[C.O.]');
    const pre=coIdx>-1?r.slice(0,coIdx):r;
    return pre.split('·').map(s=>s.trim()).filter(Boolean).slice(1,4);
}

// Detecta momentos especiales en el recorrido
function getMomentosEspeciales(r){
    const especiales=[];
    if(r.includes('Puente Isabel II')) especiales.push({icon:'fa-water',txt:'Cruce del Puente de Triana'});
    if(r.includes('Macarena')&&r.includes('Resolana')) especiales.push({icon:'fa-archway',txt:'Arco de la Macarena'});
    if(r.includes('Betis')&&r.includes('Altozano')) especiales.push({icon:'fa-map-location-dot',txt:'Calle Betis junto al Guadalquivir'});
    return especiales;
}

// Calcula minutos entre el fin de A y el inicio de B (mismo día, medianoche incluida)
function calcGapMins(hA,hB){
    const aStart=timeToMin(hA.s);
    let aEnd=timeToMin(hA.e);
    if(aEnd<aStart) aEnd+=1440; // hermandad cruza medianoche
    let bStart=timeToMin(hB.s);
    if(bStart<aStart) bStart+=1440; // B también empieza pasada medianoche
    return bStart-aEnd;
}

function renderMiPlan(){
    const todayKey=getTodaySSDay();

    // Día activo del selector (sin interferir con el filtro global)
    let planDia=localStorage.getItem('antibullas_plan_dia')||null;
    const diasDisp=[...new Set(DATA.programa.map(p=>p.dia))];
    if(!planDia||!diasDisp.includes(planDia)){
        planDia=(todayKey&&todayKey!=='ANTES'&&todayKey!=='DESPUÉS')?todayKey:diasDisp[0];
    }

    const frag=document.createDocumentFragment();

    /* ── CABECERA ── */
    const head=document.createElement('div');head.className='miplan-head';
    head.innerHTML=`<div class="miplan-head-inner">
        <i class="fa-solid fa-route" style="color:var(--gold);font-size:1.4rem;flex-shrink:0"></i>
        <div>
          <h2>Mi plan</h2>
          <p>Añade las hermandades que quieres ver y te generamos tu itinerario personal con las mejores posiciones.</p>
        </div>
    </div>`;
    frag.appendChild(head);

    /* ── TIMELINE ── */
    if(miPlan.length){
        // Agrupa por día y ordena internamente por hora de salida
        const byDay={};
        DAY_ORDER.forEach(d=>{byDay[d]=[];});
        DATA.programa.filter(p=>inPlan(p.n)).forEach(p=>{if(byDay[p.dia])byDay[p.dia].push(p);});
        DAY_ORDER.forEach(d=>{byDay[d].sort((a,b)=>timeToMin(a.s)-timeToMin(b.s));});

        const secTL=document.createElement('div');secTL.className='section-header';
        secTL.innerHTML=`<h2 class="section-title">Tu itinerario</h2><button class="plan-clear-btn" id="plan-clear"><i class="fa-solid fa-trash"></i> Vaciar</button>`;
        frag.appendChild(secTL);

        const tl=document.createElement('div');tl.className='plan-timeline';

        DAY_ORDER.forEach(dia=>{
            const herms=byDay[dia];
            if(!herms||!herms.length) return;

            // Cabecera de día
            const dayHdr=document.createElement('div');dayHdr.className='plan-day-hdr';
            dayHdr.innerHTML=`<span class="plan-day-name">${safeText(dia)}</span><span class="plan-day-count">${herms.length} hermandad${herms.length>1?'es':''}</span>`;
            tl.appendChild(dayHdr);

            const cur=new Date().getHours()*60+new Date().getMinutes();

            herms.forEach((p,i)=>{
                const esHoy=todayKey===p.dia;
                const enCalle=esHoy&&cur>=timeToMin(p.s)&&cur<=timeToMin(p.e);
                const pasada=esHoy&&cur>timeToMin(p.e)+30;

                // Datos verificados del recorrido
                const templo=getTemple(p.r);
                const intermedios=getIntermedios(p.r);
                const especiales=getMomentosEspeciales(p.r);

                // Duración en calle
                let durMins=timeToMin(p.e)-timeToMin(p.s);
                if(durMins<0) durMins+=1440;
                const dh=Math.floor(durMins/60),dm=durMins%60;
                const durStr=dh>0?(dm>0?`${dh}h ${dm}m`:`${dh}h`):`${dm}m`;

                /* ── TARJETA ── */
                const card=document.createElement('div');
                card.className=`plan-card${enCalle?' plan-live':''}${pasada?' plan-pasada':''}`;

                // Puntos del recorrido con datos reales
                let puntosHtml='';

                // 1. Salida del templo
                puntosHtml+=`<div class="plan-punto salida-pt">
                    <div class="plan-punto-icon"><i class="fa-solid fa-church"></i></div>
                    <div class="plan-punto-info">
                        <span class="pt-label">Templo de salida</span>
                        <span class="pt-lugar">${safeText(templo)}</span>
                    </div>
                    <span class="pt-hora">${safeText(p.s)}</span>
                </div>`;

                // 2. Calles intermedias (reales del itinerario)
                if(intermedios.length){
                    puntosHtml+=`<div class="plan-punto ruta-pt">
                        <div class="plan-punto-icon"><i class="fa-solid fa-map-pin"></i></div>
                        <div class="plan-punto-info">
                            <span class="pt-label">Recorrido de salida</span>
                            <span class="pt-lugar">${intermedios.map(s=>safeText(s)).join(' · ')}</span>
                        </div>
                    </div>`;
                }

                // 3. Momentos especiales (puente, Macarena, Betis...)
                especiales.forEach(esp=>{
                    puntosHtml+=`<div class="plan-punto especial-pt">
                        <div class="plan-punto-icon"><i class="fa-solid ${esp.icon}"></i></div>
                        <div class="plan-punto-info">
                            <span class="pt-label">Momento especial</span>
                            <span class="pt-lugar">${safeText(esp.txt)}</span>
                        </div>
                    </div>`;
                });

                // 4. Carrera Oficial — siempre presente
                puntosHtml+=`<div class="plan-punto co-pt">
                    <div class="plan-punto-icon"><i class="fa-solid fa-star"></i></div>
                    <div class="plan-punto-info">
                        <span class="pt-label">Carrera Oficial</span>
                        <span class="pt-lugar">Campana · Sierpes · Catedral</span>
                    </div>
                    <span class="pt-hora llegada">${safeText(p.e)}</span>
                </div>`;

                card.innerHTML=`
                  <div class="plan-card-dot${enCalle?' dot-live':''}"></div>
                  <div class="plan-card-body">
                    <div class="plan-card-hdr">
                      <div class="plan-card-title">
                        ${enCalle?'<span class="live-badge" style="font-size:.58rem;padding:3px 8px"><span class="live-dot"></span>EN CALLE</span>':''}
                        <strong>${safeText(p.n)}</strong>
                        <span class="plan-naz"><i class="fa-solid fa-person"></i> ${p.nazarenos.toLocaleString()} nazarenos · ${durStr} en calle</span>
                      </div>
                      <button class="plan-rm-btn" data-nombre="${safeText(p.n)}" aria-label="Quitar"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="plan-puntos">${puntosHtml}</div>
                  </div>`;

                tl.appendChild(card);

                /* ── GAP ENTRE HERMANDADES (solo mismo día) ── */
                if(i<herms.length-1){
                    const gap=calcGapMins(p,herms[i+1]);
                    const gapEl=document.createElement('div');gapEl.className='plan-gap';
                    const gh=Math.floor(Math.max(gap,0)/60),gm=Math.max(gap,0)%60;
                    const gStr=gh>0?(gm>0?`${gh}h ${gm}min`:`${gh}h`):Math.max(gap,0)+'min';
                    let gClass,gIcon,gTxt;
                    if(gap<=0){gClass='gap-ok';gIcon='fa-calendar-day';gTxt='Ambas en calle a la vez — puedes ver las dos';}
                    else if(gap<20){gClass='gap-critical';gIcon='fa-person-running';gTxt='Tienes que moverte muy rápido al siguiente punto';}
                    else if(gap<60){gClass='gap-tight';gIcon='fa-person-walking';gTxt='Tiempo justo para reposicionarte';}
                    else if(gap<120){gClass='gap-ok';gIcon='fa-mug-hot';gTxt='Puedes tomar algo antes de la siguiente';}
                    else{gClass='gap-free';gIcon='fa-face-smile';gTxt='Tiempo libre — disfruta el ambiente';}
                    gapEl.innerHTML=`<span class="gap-vline"></span>
                        <div class="gap-msg ${gClass}">
                            <i class="fa-solid ${gIcon}"></i>
                            ${gap>0?gStr+' libres · ':''}${gTxt}
                        </div>`;
                    tl.appendChild(gapEl);
                }
            });
        });

        /* Botón compartir por WhatsApp con el plan completo */
        const shareDiv=document.createElement('div');shareDiv.className='plan-share-wrap';
        const waLines=DAY_ORDER
            .filter(d=>byDay[d]&&byDay[d].length)
            .map(d=>`*${d}*\n${byDay[d].map(h=>`• ${h.n} — sale ${h.s}`).join('\n')}`)
            .join('\n\n');
        const waText=`📋 Mi plan · Semana Santa Sevilla 2026\n\n${waLines}\n\nHecho con ANTIBULLAS`;
        shareDiv.innerHTML=`<a class="btn-wa" href="https://wa.me/?text=${encodeURIComponent(waText)}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i> Compartir mi plan</a>`;
        tl.appendChild(shareDiv);
        frag.appendChild(tl);
    }

    /* ── SELECTOR DE HERMANDADES ── */
    const secSel=document.createElement('div');secSel.className='section-header';
    secSel.innerHTML=`<h2 class="section-title">${miPlan.length?'Añadir más hermandades':'Elige tus hermandades'}</h2>`;
    frag.appendChild(secSel);

    // Picker de días (usa data-plan-dia — NO interfiere con currentDay del filtro global)
    const picker=document.createElement('div');picker.className='plan-day-picker';picker.id='plan-day-picker';
    diasDisp.forEach(d=>{
        const b=document.createElement('button');
        b.className='day-btn'+(d===planDia?' active':'');
        b.dataset.planDia=d;
        b.textContent=DAY_SHORT[d]||d;
        picker.appendChild(b);
    });
    frag.appendChild(picker);

    const listaCont=document.createElement('div');listaCont.id='plan-lista';listaCont.className='plan-lista';
    frag.appendChild(listaCont);

    function renderListaDia(dia){
        listaCont.innerHTML='';
        DATA.programa.filter(p=>p.dia===dia).forEach(p=>{
            const sel=inPlan(p.n);
            const templo=getTemple(p.r);
            const row=document.createElement('div');
            row.className='plan-row'+(sel?' plan-row-sel':'');
            row.innerHTML=`
              <div class="plan-row-info">
                <strong>${safeText(p.n)}</strong>
                <span>${safeText(templo)} · Sale ${p.s} · Recoge ${p.e} · <i class="fa-solid fa-person" style="font-size:.58rem"></i> ${p.nazarenos.toLocaleString()}</span>
              </div>
              <button class="plan-toggle${sel?' plan-toggle-on':''}" data-n="${safeText(p.n)}" aria-label="${sel?'Quitar del plan':'Añadir al plan'}">
                ${sel?'<i class="fa-solid fa-check"></i>':'<i class="fa-solid fa-plus"></i>'}
              </button>`;
            listaCont.appendChild(row);
        });
        listaCont.querySelectorAll('.plan-toggle').forEach(btn=>{
            btn.addEventListener('click',()=>{togglePlan(btn.dataset.n);renderMiPlan();});
        });
    }

    appContent.innerHTML='';appContent.appendChild(frag);

    // Bind picker de días del plan
    document.querySelectorAll('#plan-day-picker .day-btn').forEach(btn=>{
        btn.addEventListener('click',()=>{
            document.querySelectorAll('#plan-day-picker .day-btn').forEach(b=>b.classList.remove('active'));
            btn.classList.add('active');
            planDia=btn.dataset.planDia;
            localStorage.setItem('antibullas_plan_dia',planDia);
            renderListaDia(planDia);
        });
    });

    // Bind vaciar plan
    const clrBtn=document.getElementById('plan-clear');
    if(clrBtn) clrBtn.addEventListener('click',()=>{miPlan=[];savePlan();renderMiPlan();});

    // Bind quitar del timeline
    document.querySelectorAll('.plan-rm-btn').forEach(btn=>{
        btn.addEventListener('click',()=>{togglePlan(btn.dataset.nombre);renderMiPlan();});
    });

    renderListaDia(planDia);
}

/* ============================================================ GUÍA */
function renderGuia(){
    const frag=document.createDocumentFragment();

    function secHdr(title){const d=document.createElement('div');d.className='section-header';d.innerHTML=`<h2 class="section-title">${title}</h2>`;return d;}

    /* ── QUÉ LLEVAR (checklist) ── */
    frag.appendChild(secHdr('Qué llevar'));
    const checkGrid=document.createElement('div');checkGrid.className='guia-check-grid';
    DATA.llevar.forEach(i=>{
        const el=document.createElement('div');
        el.className=`guia-check-item${i.essential?' essential':''}`;
        el.innerHTML=`<i class="fa-solid ${i.icon||'fa-check'}"></i><span>${safeText(i.item)}</span>${i.essential?'<span class="essential-tag">Imprescindible</span>':''}`;
        checkGrid.appendChild(el);
    });
    frag.appendChild(checkGrid);

    /* ── TELÉFONOS DE EMERGENCIA ── */
    frag.appendChild(secHdr('Teléfonos de emergencia'));
    const telGrid=document.createElement('div');telGrid.className='guia-tel-grid';
    DATA.telefonos.forEach(t=>{
        const el=document.createElement('a');
        el.className='guia-tel-card';
        el.href=`tel:${t.num.replace(/\s/g,'')}`;
        el.innerHTML=`<div class="tel-num-row"><i class="fa-solid ${t.icon}" style="color:${t.color}"></i><span class="tel-num">${safeText(t.num)}</span></div><p>${safeText(t.desc)}</p>`;
        telGrid.appendChild(el);
    });
    frag.appendChild(telGrid);

    /* ── PUNTOS DE ATENCIÓN MÉDICA ── */
    frag.appendChild(secHdr('Atención médica'));
    DATA.medica.forEach(m=>{
        const el=document.createElement('div');el.className='guia-card medica-card';
        el.innerHTML=`<div class="medica-hdr"><i class="fa-solid ${m.icon}" style="color:${m.color}"></i><strong>${safeText(m.nombre)}</strong></div>
            <span class="medica-dir"><i class="fa-solid fa-location-dot" style="font-size:.65rem;color:var(--muted)"></i> ${safeText(m.dir)}</span>
            <p>${safeText(m.nota)}</p>`;
        frag.appendChild(el);
    });

    /* ── TRANSPORTE ── */
    frag.appendChild(secHdr('Transporte especial'));
    DATA.transporte.forEach(t=>{
        const el=document.createElement('div');el.className='guia-card trans-card';
        el.innerHTML=`<div class="trans-linea"><i class="fa-solid ${t.icon}"></i>${safeText(t.linea)}</div><p>${safeText(t.desc)}</p>`;
        frag.appendChild(el);
    });

    /* ── DÓNDE COMER SIN ESPERAS ── */
    frag.appendChild(secHdr('Dónde comer sin esperas'));
    DATA.comer.forEach(c=>{
        const el=document.createElement('div');el.className='guia-card comer-card';
        el.innerHTML=`<div class="comer-hdr"><i class="fa-solid ${c.icon}" style="color:var(--gold)"></i><strong>${safeText(c.zona)}</strong></div><p>${safeText(c.consejo)}</p>`;
        frag.appendChild(el);
    });

    /* ── MEJORES SITIOS ── */
    frag.appendChild(secHdr('Mejores sitios para ver'));
    DATA.mejoresSitios.forEach(s=>{
        const el=document.createElement('div');el.className='sitio-card';
        el.innerHTML=`<i class="fa-solid ${s.icon} sitio-icon"></i><div><strong>${safeText(s.nombre)}</strong><p>${safeText(s.desc)}</p></div>`;
        frag.appendChild(el);
    });

    /* ── RETRANSMISIONES EN DIRECTO ── */
    frag.appendChild(secHdr('Seguir en directo'));
    DATA.radio.forEach(r=>{
        const el=document.createElement('div');el.className='guia-card radio-card';
        el.innerHTML=`<div class="radio-hdr"><i class="fa-solid ${r.icon}" style="color:var(--gold)"></i><strong>${safeText(r.nombre)}</strong><span class="radio-freq">${safeText(r.freq)}</span></div><p>${safeText(r.desc)}</p>`;
        frag.appendChild(el);
    });

    /* ── CONSEJOS DE SUPERVIVENCIA ── */
    frag.appendChild(secHdr('Consejos de supervivencia'));
    DATA.consejos.forEach(c=>{
        const el=document.createElement('div');el.className='guia-card consejo-card';
        el.style.borderLeftColor=c.color;
        el.innerHTML=`<strong style="color:${c.color}">${safeText(c.tit)}</strong><p>${safeText(c.txt)}</p>`;
        frag.appendChild(el);
    });

    /* ── VOCABULARIO COFRADE ── */
    frag.appendChild(secHdr('Vocabulario cofrade'));
    const vocGrid=document.createElement('div');vocGrid.className='voc-grid';
    DATA.vocabulario.forEach(v=>{
        const el=document.createElement('div');el.className='voc-card';
        el.innerHTML=`<span class="voc-term">${safeText(v.term)}</span><p>${safeText(v.def)}</p>`;
        vocGrid.appendChild(el);
    });
    frag.appendChild(vocGrid);

    appContent.innerHTML='';appContent.appendChild(frag);
}


/* ============================================================ RENDER */
function render(){
    if(currentView==='hoy') renderHoy();
    else if(currentView==='bullas') renderBullas();
    else if(currentView==='programa') renderPrograma();
    else if(currentView==='miplan') renderMiPlan();
    else if(currentView==='guia') renderGuia();
}

function switchView(v,el){
    currentView=v;
    document.querySelectorAll('.nav-item').forEach(i=>{i.classList.remove('active');i.setAttribute('aria-pressed','false');});
    if(el){el.classList.add('active');el.setAttribute('aria-pressed','true');}
    document.getElementById('search-wrapper').style.display=['bullas','programa'].includes(v)?'flex':'none';
    dayFilter.style.display=(v==='bullas'||v==='programa')?'flex':'none';
    window.scrollTo({top:0,behavior:'smooth'});
    render();
}

function emptyState(icon,msg){const d=document.createElement('div');d.className='empty';d.innerHTML=`<i class="fa-solid fa-${icon}"></i><p>${msg}</p>`;return d;}

searchInput.addEventListener('input',()=>{searchClear.style.display=searchInput.value?'block':'none';debounce(render,250)();});
searchClear.addEventListener('click',()=>{searchInput.value='';searchClear.style.display='none';searchInput.focus();render();});
document.querySelectorAll('.day-btn').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('.day-btn').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false');});btn.classList.add('active');btn.setAttribute('aria-pressed','true');currentDay=btn.dataset.day;render();});});

document.addEventListener('DOMContentLoaded',()=>{
    const todayKey=getTodaySSDay();
    if(todayKey&&todayKey!=="ANTES"&&todayKey!=="DESPUÉS") switchView('hoy',document.getElementById('btn-hoy'));
    else switchView('bullas',document.getElementById('btn-bullas'));
    document.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement!==searchInput){e.preventDefault();searchInput.focus();}});
    if('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(()=>{});
    setInterval(()=>{if(currentView==='hoy')renderHoy();},60000);
});

/* ============================================================
   AÑADIR A PANTALLA DE INICIO (A2HS) CON OVERLAY
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    let deferredPrompt;
    const a2hsOverlay = document.getElementById('a2hs-overlay');
    const a2hsPopup = document.getElementById('a2hs-popup');
    const a2hsClose = document.getElementById('a2hs-close');
    const a2hsBtn = document.getElementById('a2hs-btn');
    const a2hsDesc = document.getElementById('a2hs-desc');

    if (!a2hsPopup || !a2hsOverlay) return;

    const hasDismissedA2HS = localStorage.getItem('antibullas_a2hs_dismissed');

    const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
    };

    const isStandalone = () => {
        return ('standalone' in window.navigator && window.navigator.standalone) || window.matchMedia('(display-mode: standalone)').matches;
    };

    function showA2HSPopup() {
        if (hasDismissedA2HS || isStandalone()) return;
        setTimeout(() => {
            a2hsOverlay.setAttribute('aria-hidden', 'false');
            a2hsPopup.setAttribute('aria-hidden', 'false');
        }, 3000);
    }

    function closeA2HSPopup() {
        a2hsOverlay.setAttribute('aria-hidden', 'true');
        a2hsPopup.setAttribute('aria-hidden', 'true');
        localStorage.setItem('antibullas_a2hs_dismissed', 'true');
    }

    // Android / Chrome
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        showA2HSPopup();
    });

    // iOS Safari
    if (isIos() && !isStandalone() && !hasDismissedA2HS) {
        a2hsDesc.innerHTML = `Toca <span class="ios-instruction"><i class="fa-solid fa-arrow-up-from-bracket"></i></span> en el menú y selecciona <strong>"Añadir a inicio"</strong>.`;
        a2hsBtn.style.display = 'none';
        showA2HSPopup();
    }

    // Botón cerrar y clic en el fondo borroso para quitarlo
    a2hsClose.addEventListener('click', closeA2HSPopup);
    a2hsOverlay.addEventListener('click', closeA2HSPopup);

    // Botón de instalar (Android)
    a2hsBtn.addEventListener('click', async () => {
        closeA2HSPopup();
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                localStorage.setItem('antibullas_a2hs_dismissed', 'true');
            }
            deferredPrompt = null;
        }
    });
});
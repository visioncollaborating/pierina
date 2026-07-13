/* ============================================================================
   EDITA SOLO ESTE ARCHIVO PARA CADA CLIENTE O SEMANA
   ============================================================================

   CAMBIO RÁPIDO:
   1. Edita la sección DATOS DEL CLIENTE.
   2. Edita la sección DATOS DE LA SEMANA.
   3. Cambia el texto, fecha e imágenes de las publicaciones.
   4. Guarda las imágenes dentro de la carpeta "img".

   NO es necesario editar index.html, config.js ni style.css.
============================================================================ */

const CONFIG_SEMANAL = {

    /* ------------------------------------------------------------------------
       1. DATOS DEL CLIENTE
       Estos datos se escriben UNA SOLA VEZ.
    ------------------------------------------------------------------------ */
    cliente: "Pierina Vega",
    usuarioInstagram: "pierina.agenteinmobiliario",

    // Firma que se agregará automáticamente al final de todas las publicaciones.
    firmaPublicaciones: "Pierina Vega | Agente Inmobiliario | MVCS / PN - 13557",
    whatsappPublicaciones: "WhatsApp: https://wa.me/51999214678",

    // Número al que llegará la aprobación. Solo números y con código de país.
    // Déjalo vacío para que el cliente elija el chat de WhatsApp.
    whatsappDestino: "",

    /* ------------------------------------------------------------------------
       2. DATOS DE LA SEMANA
    ------------------------------------------------------------------------ */
    titulo: "Calendario Julio 2026",
    rangoFechas: "Semana del martes 14 al sábado 18 de julio",

    /* ------------------------------------------------------------------------
       3. PUBLICACIONES

       tipo: puede ser "imagen", "video" o "carrusel".
       diaSemana: fecha que verá el cliente.
       imagenes: nombre y ubicación de las imágenes.
       copy: escribe solamente el contenido principal. La firma se añade sola.

       PARA UN CARRUSEL:
       imagenes: ["img/1.jpg", "img/2.jpg", "img/3.jpg"]
    ------------------------------------------------------------------------ */
    publicaciones: [
        {
            tipo: "imagen",
            diaSemana: "Martes 14 de julio",
            imagenes: ["img/14.jpg"],
            copy: `¿Invertir antes de que todos lo hagan? Esa es la clave. 📈

No compres solo por la zona de hoy; invierte en el futuro de un distrito. Las grandes obras de infraestructura están transformando la rentabilidad de las propiedades.

Hoy, un inversionista inteligente analiza:

🚉 Acceso real al transporte.
🏙️ Conectividad estratégica.
📈 Potencial de valorización a mediano plazo.

Ver el potencial de una zona antes que los demás es lo que separa a un comprador común de un inversionista exitoso.`
        },

        {
            tipo: "imagen",
            diaSemana: "Jueves 16 de julio",
            imagenes: ["img/16.jpg"],
            copy: `¿Por qué San Martín es el nuevo foco de los inversionistas? 📈

El turismo en San Martín ha crecido un 30% y el mercado ya está reaccionando. Donde hay turismo, hay demanda de alojamiento, servicios y desarrollos inmobiliarios.

¿Qué significa esto para ti?
✅ Oportunidades únicas: El crecimiento del sector activa proyectos que hoy tienen precios atractivos antes de la saturación.
✅ Rentabilidad: Los proyectos inmobiliarios en zonas de alto tráfico turístico tienen retornos más rápidos.
✅ Valorización: El desarrollo privado está transformando la región.

No esperes a que los precios suban cuando la región ya esté consolidada. Infórmate hoy y toma la delantera.`
        },

        {
            tipo: "video",
            diaSemana: "Viernes 17 de julio",
            imagenes: ["img/17.jpg"],
            copy: `🤔 ¿Tu dinero está creciendo... o solo está esperando? 💸

Tener ahorros en el banco es ver cómo pierden valor cada día. Una propiedad bien elegida, en cambio, es el activo que construye tu futuro.

No dejes que tu capital se estanque.`
        },

        {
            tipo: "video",
            diaSemana: "Sábado 18 de julio",
            imagenes: ["img/18.jpg"],
            copy: `¿Terreno para tu proyecto? Esta es tu oportunidad. 🏗️

Ubicación estratégica entre Barranco y Chorrillos: el punto con el flujo comercial que tu negocio exige.

✅ Alta rentabilidad: Zona de creciente plusvalía.
✅ Lista para operar: Documentación en regla, ¡listos para firma!
✅ Inversión: USD 463,500.

No pierdas tiempo en trabas legales; arranca tu obra hoy mismo.

📲 ¿Agendamos visita? Escríbeme por DM.`
        }
    ]
};

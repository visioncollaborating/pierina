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
    rangoFechas: "Semana del martes 21 al sábado 25 de julio",

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
            diaSemana: "Martes 21 de julio",
            imagenes: ["img/21.jpg"],
            copy: `🚨 Una propiedad "bonita" no siempre es una buena inversión.

Los acabados se pueden cambiar, pero la ubicación y la proyección de crecimiento, no. No te dejes llevar por la fachada; enfócate en lo que realmente asegura tu patrimonio a largo plazo. 📈

🔑 Te ayudo a identificar oportunidades con alta plusvalía. Hablemos. 📩`
        },

        {
            tipo: "imagen",
            diaSemana: "Jueves 23 de julio",
            imagenes: ["img/23.jpg"],
            copy: `¡Feliz día a toda la Fuerza Aérea del Perú! 🦅 Hoy celebramos el orgullo de nuestra aviación y el heroísmo de nuestro gran Capitán Quiñones. Gracias por cuidar nuestro cielo con tanta dedicación. 🇵🇪💙`
        },

        {
            tipo: "video",
            diaSemana: "Viernes 24 de julio",
            imagenes: ["img/24.jpg"],
            copy: `⏳ Las mejores propiedades ni siquiera llegan a publicarse en portales.

En el mercado actual, la velocidad y la información privilegiada lo son todo. Si esperas a que la propiedad esté "a la vista de todos", probablemente ya perdiste la oportunidad de una mejor negociación.

🚀 ¿Quieres acceso a oportunidades antes que nadie? Hablemos. 📲`
        },

        {
            tipo: "video",
            diaSemana: "Sábado 25 de julio",
            imagenes: ["img/25.jpg"],
            copy: `¡Impulsa tu proyecto en la zona de mayor crecimiento entre Barranco y Chorrillos! 📈🏗️

Este terreno cuenta con documentación impecable y alta rentabilidad. 💸
Precio: USD 463,500. 💰
Estado: Listo para transferencia inmediata. 🤝

¡No dejes pasar esta oportunidad! 🚀 Envíame un mensaje y coordinamos una visita. 📲✨`
        }
    ]
};

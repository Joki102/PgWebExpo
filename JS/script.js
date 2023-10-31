document.addEventListener("DOMContentLoaded", function() {
    var mySwiper = new Swiper('.swiper-container', {
        // Configuración de Swiper
        slidesPerView: 1, // Número de diapositivas visibles a la vez
        spaceBetween: 20, // Espacio entre diapositivas
        loop: true, // Repetir las diapositivas
        navigation: {
            nextEl: '.swiper-button-next', // Selector del botón siguiente
            prevEl: '.swiper-button-prev' // Selector del botón anterior
        },
        autoplay: {
            delay: 3000, // Retardo en milisegundos entre diapositivas
        }
    });
});

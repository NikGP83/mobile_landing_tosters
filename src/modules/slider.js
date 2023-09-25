import Swiper from "swiper";

export const init = () => {

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        watchOverflow: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        freeMode: true,
        // watchOverflow: true,
        // spaceBetween: 2,
        

        centeredSlides: true,
        speed: 800,
        a11y: {
            enabled: true,
            prevSlideMessage: 'Предыдущий слайд',
            nextSlideMessage: 'Следующий слайд',
        },

    });
}
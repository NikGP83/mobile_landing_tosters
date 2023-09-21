import Swiper from "swiper";

export const init = () => {

    new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        watchOverflow: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        // watchOverflow: true,
        // spaceBetween: 2,

        centeredSlides: true,
        speed: 800,
        a11y: {
            enabled: true,
            prevSlideMessage: 'Предыдущий слайд',
            nextSlideMessage: 'Следующий слайд',
        },
        // thumbs: {
        //     el: '.swiper-thumbs'
        // }

    });
}
import Swiper from 'swiper';
import { Thumbs } from 'swiper/modules';

const commonOptions = {
  loop: true,
  speed: 800,
  spaceBetween: 10,
};

export const init = () => {
  const [slidesElement, thumbsElement] = document.querySelectorAll('.swiper');

  const thumbsSwiper = new Swiper(thumbsElement, {
    ...commonOptions,
    slidesPerView: 4,
  });

  const swiper = new Swiper(slidesElement, {
    ...commonOptions,
    modules: [Thumbs],
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
  console.log(swiper);
};
import Swiper from 'swiper';
import setLazy from './setLazy';

export const swiperSliders = [];

export default function setSliders() {
  const $sliders = $('.js-slider');

  if (!$sliders.length) return;

  $sliders.each((i, slider) => {
    const name = slider.getAttribute('data-slider');
    const $wrap = $(slider).closest('.slider__wrap');
    const prev = $wrap.find('.js-prev')[0];
    const next = $wrap.find('.js-next')[0];

    let thumbsSlidesNumberDesc,
      thumbsSlidesNumberMd,
      thumbsSlidesNumberSm,
      thumbsLoop;

    if (name === 'item_gallery_thumbs') {
      const slides = [].slice.call(slider.querySelectorAll('.swiper-slide'));
      thumbsSlidesNumberDesc = slides.length >= 5 ? 5 : slides.length;
      thumbsSlidesNumberMd = slides.length >= 4 ? 4 : slides.length;
      thumbsSlidesNumberSm = slides.length >= 3 ? 3 : slides.length;

      thumbsLoop = slides.length >= 3;
    }

    const options = {
      similar: {
        slidesPerView: 5,
        loop: true,
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        breakpoints: {
          576: {
            slidesPerView: 1
          },
          992: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          },
          1400: {
            slidesPerView: 4
          }
        },
        on: {
          init: setLazy
        }
      },
      'item_gallery_thumbs': {
        slidesPerView: thumbsSlidesNumberDesc,
        spaceBetween: 10,
        loop: thumbsLoop,
        breakpoints: {
          576: {
            slidesPerView: thumbsSlidesNumberSm,
            spaceBetween: 5
          },
          768: {
            slidesPerView: thumbsSlidesNumberMd
          }
        },
        on: {
          init: setLazy
        }
      },
      contacts: {
        slidesPerView: 'auto',
        spaceBetween: 40,
        centeredSlides: true,
        grabCursor: true,
        loop: true,
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        breakpoints: {
          992: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 10,
          }
        },
        on: {
          init: setLazy
        }
      }
    };

    const swiper = new Swiper(slider, options[name]);

    swiperSliders.push(swiper);
  });
};

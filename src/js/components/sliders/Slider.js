import Swiper from 'swiper';
import anime from 'animejs';

export default class Slider {
  constructor(slider) {
    this.slider = slider;
    this.wrap = slider.parentNode;
  };

  setTranslate(swiper, wrapperTranslate) {
    
    const slides = [].slice.call(swiper.$el[0].querySelectorAll('.swiper-slide'));

    slides.map((slide, index) => {
      // to put the slides behind each other we have to set their CSS translate accordingly since by default they are arranged in line.
      const offset = slide.swiperSlideOffset;
      let x = -offset;
      if (!swiper.params.virtualTranslate) x -= swiper.translate;
      let y = 0;
      if (!swiper.isHorizontal()) {
        y = x;
        x = 0;
      };

      anime.set(slide, {
        translateX: x,
        translateY: y
      });      
    });
  };

  makeSlideNumber(nmb) {
    nmb = nmb + 1;
    let str = nmb.toString();
    if (str.length === 1) {
      str = `0${str}`;
    };
    return str;
  };

  setCounter({ activeSlide, htmlBlock }) {
    htmlBlock.innerText = this.makeSlideNumber(activeSlide);
  };

  setCounterSm({ activeSlide, slidesAmount, htmlBlock }) {
    const current = htmlBlock.querySelector('.slider-counter-sm__current');
    const all = htmlBlock.querySelector('.slider-counter-sm__all');

    current.innerText = this.makeSlideNumber(activeSlide);

    let slidesAmountDecr = slidesAmount - 1;
    all.innerText = this.makeSlideNumber(slidesAmountDecr);
  };

  init() {
    this.swiper = new Swiper(this.slider, this.swiperOptions);
  };
};

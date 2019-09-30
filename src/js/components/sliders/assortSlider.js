import Slider from './Slider';
import anime from 'animejs';
import setLazy from '../setLazy';

export default function animateAssortSlider(slider) {
  const mySlider = new Slider(slider);

  mySlider.GETTERS = () => {
    return {
      prev: mySlider.wrap.querySelector('.js-prev'),
      next: mySlider.wrap.querySelector('.js-next'),
      progres: mySlider.wrap.querySelector('.js-progress'),
      counter: mySlider.wrap.querySelector('.js-counter'),
      counterSm: mySlider.wrap.querySelector('.js-counter-sm')
    };
  };

  mySlider.setAnimation = () => {
    const slides = [].slice.call(mySlider.swiper.$el[0].querySelectorAll('.swiper-slide'));
    const previousSlide = slides[mySlider.swiper.previousIndex];
    const activeSlide = slides[mySlider.swiper.activeIndex];

    // mySlider.setCounter({
    //   activeSlide: mySlider.swiper.activeIndex,
    //   htmlBlock: mySlider.GETTERS().counter
    // });
    mySlider.setCounterSm({
      activeSlide: mySlider.swiper.activeIndex,
      slidesAmount: mySlider.swiper.slides.length,
      htmlBlock: mySlider.GETTERS().counterSm
    });

    function getelements(slide) {
      return {
        img: slide.querySelector('.assort-slide__img'),
        title: slide.querySelector('.assort-slide__title'),
        text: slide.querySelector('.assort-slide__text')
      };
    };

    // previous slide
    anime({
      easing: 'easeOutCubic',
      targets: previousSlide,
      duration: 500,
      zIndex: [5, 0]
    });
    anime({
      easing: 'easeOutCubic',
      targets: getelements(previousSlide).img,
      duration: 500,
      translateX: ['0%', '100%']
    });
    anime({
      easing: 'easeOutCubic',
      targets: getelements(previousSlide).title,
      duration: 700,
      // translateY: [0, 100],
      opacity: [1, 0]
    });
    anime({
      easing: 'easeOutCubic',
      targets: getelements(previousSlide).text,
      duration: 700,
      // translateY: [0, 100],
      opacity: [1, 0]
    });
    // previous slide

    // active slide
    anime({
      easing: 'easeOutCubic',
      targets: activeSlide,
      duration: 500,
      zIndex: [0, 5]
    });
    anime({
      easing: 'easeOutCubic',
      targets: getelements(activeSlide).img,
      duration: 500,
      translateX: ['100%', '0%']
    });
    anime({
      easing: 'easeOutCubic',
      targets: getelements(activeSlide).title,
      duration: 700,
      // translateY: [100, 0],
      opacity: [0, 1]
    });
    anime({
      easing: 'easeOutCubic',
      targets: getelements(activeSlide).text,
      duration: 700,
      // translateY: [100, 0],
      opacity: [0, 1]
    });
    // active slide
  };

  mySlider.swiperOptions = {
    loop: false,
    navigation: {
      nextEl: mySlider.GETTERS().next,
      prevEl: mySlider.GETTERS().prev
    },
    pagination: {
      el: mySlider.GETTERS().progres,
      type: 'progressbar',
    },
    touchRatio: 0,
    speed: 1000,
    watchSlidesProgress: true,
    virtualTranslate: true,
    effect: 'myCustomTransition',
    on: {
      init() {
        setLazy();

        const swiper = this;
        const slides = [].slice.call(swiper.$el[0].querySelectorAll('.swiper-slide'));
        const activeSlide = slides[swiper.activeIndex];
        const img = activeSlide.querySelector('.assort-slide__img');
        const title = activeSlide.querySelector('.assort-slide__title');
        const text = activeSlide.querySelector('.assort-slide__text');

        text.style.opacity = 1;
        // text.style.transform = 'translateY(0)';
        title.style.opacity = 1;
        // title.style.transform = 'translateY(0)';
        img.style.transform = 'translateY(0)';
        activeSlide.style.zIndex = 5;          
      },
      setTranslate(translate) {
        const swiper = this;
        if (swiper.params.effect !== 'myCustomTransition') return;
        mySlider.setTranslate(swiper, translate);
      },
        
      slideChange: () => {
        if (mySlider.swiper.params.effect !== 'myCustomTransition') return;
        mySlider.setAnimation();          
      }
    }
  };

  mySlider.init();
};

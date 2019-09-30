import Rellax from 'rellax';

class TitleParallax {
  constructor(title) {
    this.title = title;
    this.MAX_TRANSLATE = 20;
    this.MIN_TRANSLATE = 0;
    this.OFFSET = 5000;
  };

  init() {
    this._setTitle();
    this._animateTitle();
  };

  moveTitle(e) {
    const topOffset = document.querySelector('.header')
      ? document.querySelector('.header').offsetHeight - this.OFFSET : this.OFFSET;
    const viewportOffset = this.title.getBoundingClientRect();
    const percentage = this.MAX_TRANSLATE - ((window.innerHeight - topOffset) / viewportOffset.y);

    if (percentage > this.MIN_TRANSLATE && percentage <= this.MAX_TRANSLATE) {
      this.title.style.transform = `translate(${percentage}% ,0)`;
    } else {
      this.title.style.transform = 'translate(0 ,0)';
      return;
    };    
  };

  animate(entries) {    
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        window.addEventListener('scroll', this.moveTitleBinded);
      } else {
        window.removeEventListener('scroll', this.moveTitleBinded);
      };
    });
  };

  _animateTitle() {
    this.moveTitleBinded = this.moveTitle.bind(this);

    const observer = new IntersectionObserver(this.animate.bind(this));
    observer.observe(this.title);
  };

  _setTitle() {
    this.title.style.transform = `translate(${this.MAX_TRANSLATE}%, 0)`;
  };
};

export default function setParallax() {  
  // rellax paralax init
  function initRellax() {
    const els = document.querySelectorAll('.js-parallax');

    if(!els.length) return;

    const rellax = new Rellax('.js-parallax', {
      speed: 2,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  };

  initRellax();
  

  // parallax for titles
  // const titles = [].slice.call(document.querySelectorAll('.js-parallax-title'));

  // titles.forEach((title) => {
  //   const titleParallax = new TitleParallax(title);
  //   titleParallax.init();
  // });

  // parallax for vertical text
  function animateVerticalText() {
    const textBlocks = [].slice.call(document.querySelectorAll('.js-parallax-vertical-text'));

    textBlocks.forEach((block) => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          let translate = parseInt(block.style.transform.slice(12, -1).split(',')[1]);

          // if (translate > 0) {
          //   console.log('positive');
          //   translate = -Math.abs(translate);
          // } else {
          //   console.log('negative');
          //   // translate = 0;
          // }


          // translate = -Math.abs(translate);

          // console.log(translate);
          
          block.style.transform = `translate3d(0px, ${translate}px, 0px) rotate(-90deg)`;
        });
      });

      observer.observe(block, { attributes: true });
    });
    
  };

  animateVerticalText();
};

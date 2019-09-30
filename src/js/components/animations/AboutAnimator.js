import anime from 'animejs';

export default class AboutAnimator {
  constructor(sections) {
    this.sections = sections;
  };  

  animate(entries, observer) {
    entries.forEach((entry) => {
      const section = entry.target;
      const index = +section.getAttribute('data-index');

      if (entry.isIntersecting) {
        switch(index) {
          case 0 :
            this._animateHero(section, entry, observer);
            break;
          case 1:
            this._animateSectionWithImgs(section, entry, observer);
            break;
          case 2:
            this._animateSliderSection(section, entry, observer);
            break;
          case 3:
            this._animateSectionWithLetters(section, entry, observer);
            break;
          case 4:
            this._animateFeatures(section, entry, observer);
            break;
          case 5:
            this._animatePrinciples(section, entry, observer);
            break;
          case 6:
            this._animateThreeCols(section, entry, observer);
            break;
          case 7:
            this._animateSliderBottomSection(section, entry, observer);
            break;
        }
      };
    });
  };

  animateLines(lines, entry) {
    const tl = anime.timeline({ easing: 'linear' });

    tl.
      add({
        targets: lines,
        duration: 700,
        translateY: ['-150%', '0%'],
        delay: anime.stagger(300)
      });    
  };

  _animateHero(section, entry, observer) {
    const heroLines = [].slice.call(section.querySelectorAll('.line'));
    const heroLetters = [].slice.call(section.querySelectorAll('.letter span'));
    const heroWords = [].slice.call(section.querySelectorAll('.word span'));

    const tl = anime.timeline({ easing: 'linear' });

    tl
      .add({
        targets: section,
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: heroLines,
        duration: 700,
        translateY: ['-150%', '0%'],
        delay: anime.stagger(300)
      })
      .add({
        targets: heroLetters,
        translateX: ['-100%', '-35%'],
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: heroWords,
        translateX: ['-100%', '0%'],
        opacity: [0, 1],
        duration: 500
      });

    observer.unobserve(section);
  };

  _animateSectionWithImgs(section, entry, observer) {
    const lines = [].slice.call(section.querySelectorAll('.line'));

    this.animateLines(lines, entry);

    observer.unobserve(section);
  };

  _animateSliderSection(section, entry, observer) {
    const lines = [].slice.call(section.querySelectorAll('.line'));

    this.animateLines(lines, entry);

    observer.unobserve(section);
  };


  _animateSectionWithLetters(section, entry, observer) {
    const lines = [].slice.call(section.querySelectorAll('.line'));
    const letters = [].slice.call(section.querySelectorAll('.letter span'));

    const tl = anime.timeline({ easing: 'linear' });

    tl      
      .add({
        targets: lines,
        duration: 700,
        translateY: ['-150%', '0%'],
        delay: anime.stagger(50)
      })
      .add({
        targets: letters,
        translateX: ['-100%', '-40%'],
        opacity: [0, 1],
        duration: 500
      }, '-=500');

    observer.unobserve(section);
  };

  _animateFeatures(section, entry, observer) {
    const blocks = [].slice.call(section.querySelectorAll('.feature'));
    const lines = [].slice.call(section.querySelectorAll('.line'));

    const tl = anime.timeline({ easing: 'linear' });

    this.animateLines(lines, entry);

    tl      
      .add({
        targets: blocks,
        duration: 500,
        translateY: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(300)
      });

    observer.unobserve(section);
  };

  _animatePrinciples(section, entry, observer) {
    const blocks = [].slice.call(document.querySelectorAll('.principle'));
    const lines = [].slice.call(section.querySelectorAll('.line'));
    const tl = anime.timeline({ easing: 'linear' });

    this.animateLines(lines, entry);

    tl
      .add({
        targets: blocks,
        duration: 500,
        translateX: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(300)
      });

    observer.unobserve(section);
  };

  _animateThreeCols(section, entry, observer) {
    const numbers = [].slice.call(document.querySelectorAll('.text-stroke'));
    const textBlocks = [].slice.call(document.querySelectorAll('.three-cols-section-col__text'));
    const lines = [].slice.call(section.querySelectorAll('.line'));
    const tl = anime.timeline({ easing: 'linear' });

    this.animateLines(lines, entry);

    tl
      .add({
        targets: numbers,
        duration: 500,
        translateX: ['-100%', '0%'],
        opacity: [0, 1]
      })
      .add({
        targets: textBlocks,
        duration: 500,
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(300)
      });

    observer.unobserve(section);
  };

  _animateSliderBottomSection(section, entry, observer) {
    const lines = [].slice.call(section.querySelectorAll('.line'));

    this.animateLines(lines, entry);

    observer.unobserve(section);
  };
};

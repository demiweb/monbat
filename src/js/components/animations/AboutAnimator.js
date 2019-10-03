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
            this._animateSectionWithSlider(section, entry, observer);
            break;
          case 2:
            this._animateHistorySection(section, entry, observer);
            break;
          case 3:
            this._animateHistorySection(section, entry, observer);
            break;
          case 4:
            this._animateHistorySection(section, entry, observer);
            break;
          case 5:
            this._animateHistorySection(section, entry, observer);
            break;
          case 6:
            this._animateLeaderSection(section, entry, observer);
            break;
          case 7:
            this._animateSocialSection(section, entry, observer);
            break;
          case 8:
            this._animateSectionWithSlider(section, entry, observer);
        }
      };
    });
  };

  _animateHero(section, entry, observer) {
    const heroLines = [].slice.call(section.querySelectorAll('.line'));
    const heroLetters = [].slice.call(section.querySelectorAll('.letter span'));
    const heroWords = [].slice.call(section.querySelectorAll('.word span'));

    const {
      breadcrumbs,
      heroBlocks,
      heroLeft,
      heroTop
    } = {
      breadcrumbs: section.querySelector('.hero__breadcrumbs'),
      heroBlocks: section.querySelectorAll('.hero-about-block'),
      heroLeft: section.querySelector('.hero-about__left'),
      heroTop: section.querySelector('.hero-about__top')
    };

    const tl = anime.timeline({ easing: 'linear' });

    tl
      .add({
        targets: section,
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: heroLeft,
        translateY: ['-100%', '0%'],
        duration: 500
      })
      .add({
        targets: heroTop,
        translateX: ['100vw', '0vw'],
        duration: 500
      })
      .add({
        targets: heroBlocks,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 500,
        delay: anime.stagger(100)
      })
      .add({
        targets: breadcrumbs,
        opacity: [0, 1],
        duration: 500
      });

    observer.unobserve(section);
  };

  _animateSectionWithSlider(section, entry, observer) {
    const {
      word,
      titleBlock
    } = {
      word: section.querySelector('.word'),
      titleBlock: section.querySelector('.s-tasks__title')
    };

    const tl = anime.timeline({ easing: 'linear' });

    const animatedTopBlock = titleBlock || word;

    if (!animatedTopBlock) return;

    tl
      .add({
        targets: animatedTopBlock,
        translateX: ['100%', '0%'],
        duration: 500
      });

    observer.unobserve(section);
  };

  _animateHistorySection(section, entry, observer) {
    const {
      block,
      tableRows
    } = {
      block: section.querySelector('.history__block'),
      tableRows: section.querySelectorAll('.history-table__row')
    };

    const tl = anime.timeline({ easing: 'linear' });

    tl
      .add({
        targets: block,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 500
      })
      .add({
        targets: tableRows,
        duration: 700,
        translateX: ['100vw', '0vw'],
        delay: anime.stagger(100)
      });

    observer.unobserve(section);
  };

  _animateLeaderSection(section, entry, observer) {
    const {
      left,
      right,
      links
    } = {
      left: section.querySelector('.s-leader__left'),
      right: section.querySelector('.s-leader__right'),
      links: section.querySelectorAll('.s-leader__link')
    };
    const tl = anime.timeline({ easing: 'linear' });

    tl
      .add({
        targets: right,
        duration: 700,
        translateY: ['-100%', '0%']
      })
      .add({
        targets: left,
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: links,
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(100),
        duration: 500
      }, '-=100');    

    observer.unobserve(section);
  };

  _animateSocialSection(section, entry, observer) {
    const {
      word,
      title,
      socials
    } = {
      word: section.querySelector('.word'),
      title: section.querySelector('.section__title'),
      socials: section.querySelectorAll('.social-items__item')
    };

    const tl = anime.timeline({ easing: 'linear' });

    tl
      .add({
        targets: word,
        translateX: ['-100vw', '0vw'],
        duration: 500
      })
      .add({
        targets: title,
        opacity: [0, 1],
        translateY: [0, 30],
        duration: 500
      })
      .add({
        targets: socials,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        delay: anime.stagger(100)
      });

    observer.unobserve(section);
  };
};

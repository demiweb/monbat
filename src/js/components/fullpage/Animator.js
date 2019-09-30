import anime  from 'animejs';
import { ACTIVE } from '../../constants';

export default class Animator {
  constructor({ direction, $sections, from, to }) {
    this.direction = direction;
    this.$sections = $sections;
    this.from = from;
    this.to = to;
    this.current = $sections[from];
    this.target = $sections[to];
  };

  getElements(section) {
    const elements = {
      btn: section.querySelector('.btn'),
      line: section.querySelector('.line-sm'),
      title: section.querySelector('.title--xl'),
      subttl: section.querySelector('.title-subttl'),
      scroll: section.querySelector('.scroll-down'),
      subttlSm: section.querySelector('.h2-subttl'),
      news: section.querySelectorAll('.news-article-sm')
    };
    return elements;
  };

  enterAnimations() {
    this.tl
      .add({
        targets: this.target,
        opacity: [0, 1],
        zIndex: [0, 1],
        duration: 600
      }, '-=500')
      .add({
        targets: this.getElements(this.target).title,
        opacity: [0, 1],
        duration: 400,
      })
      .add({
        targets: this.getElements(this.target).subttl,
        translateY: ['-100%', '0%'],
        duration: 600,
      }, '-=500')
      .add({
        targets: this.getElements(this.target).line,
        translateY: ['-100%', '0%'],
        duration: 600,
      }, '-=500');
    if (this.getElements(this.target).news && this.getElements(this.target).news.length > 0) {
      this.tl
        .add({
          targets: this.getElements(this.target).news,
          translateY: ['-100%', '0%'],
          duration: 600,
          delay: anime.stagger(100)
        }, '-=500'); 
    }
    if (this.getElements(this.target).subttlSm) {
      this.tl
        .add({
          targets: this.getElements(this.target).subttlSm,
          translateY: ['-100%', '0%'],
          duration: 600,
        });
    }
    this.tl
      .add({
        targets: this.getElements(this.target).btn,
        translateY: ['-105%', '0%'],
        duration: 600,
      }, '-=500');
    if (this.getElements(this.target).scroll) {
      this.tl
        .add({
          targets: this.getElements(this.target).scroll,
          opacity: [0, 1],
          duration: 600,
        }, '-=450');
    }
      
  };

  exitAnimations() {
    this.tl
      .add({
        targets: this.getElements(this.current).scroll,
        opacity: [1, 0],
        duration: 600,
      }, '-=450')
      .add({
        targets: this.getElements(this.current).btn,
        translateY: ['0%', '-105%'],
        duration: 600,
      }, '-=500')
      .add({
        targets: this.getElements(this.current).line,
        translateY: ['0%', '-100%'],
        duration: 600,
      }, '-=500');
    if (this.getElements(this.current).news && this.getElements(this.current).news.length > 0) {
      this.tl
        .add({
          targets: this.getElements(this.current).news,
          translateY: ['0%', '-100%'],
          duration: 600,
          delay: anime.stagger(100)
        }, '-=500'); 
    }
    if (this.getElements(this.current).subttlSm) {
      this.tl
        .add({
          targets: this.getElements(this.current).subttlSm,
          translateY: ['%', '-100%'],
          duration: 600,
        });
    }
    this.tl
      .add({
        targets: this.getElements(this.current).subttl,
        translateY: ['0%', '-100%'],
        duration: 600,
      }, '-=500')
      .add({
        targets: this.getElements(this.current).title,
        opacity: [1, 0],
        duration: 400,
      }, '-=300')
      .add({
        targets: this.current,
        opacity: [1, 0],
        zIndex: [1, 0],
        duration: 600
      });
  };

  animate() {
    this.tl = anime.timeline({
      easing: 'linear'
    });

    this.tl.finished.then(() => {
      $(this.current).removeClass(ACTIVE);
      $(this.target).addClass(ACTIVE);
    });

    this.exitAnimations();
    this.enterAnimations();
  };
};

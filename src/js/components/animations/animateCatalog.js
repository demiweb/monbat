import anime from 'animejs';
import PageAnimator from './PageAnimator';

export default function animateCatalog() {
  const page = document.querySelector('.catalog-page');
  if (!page) return;

  const elements = {
    hero: document.querySelector('.hero'),
    title: document.querySelector('.hero__title'),
    breadcrumbs: document.querySelector('.hero__breadcrumbs'),
    line: document.querySelector('.hero .line-sm'),
    subttl: document.querySelector('.hero__subttl .h2-subttl'),
    main: document.querySelector('.main')
  };

  const pageAnimator = new PageAnimator(elements);
  pageAnimator.animate = (elements) => {
    const tl = anime.timeline({ easing: 'linear' });

    tl
      .add({
        targets: elements.hero,
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: elements.title,
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: elements.line,
        translateY: ['-100%', '0%'],
        duration: 500
      })
      .add({
        targets: elements.subttl,
        translateY: ['-130%', '0%'],
        duration: 500
      })
      .add({
        targets: elements.breadcrumbs,
        translateY: ['-100%', '0%'],
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: elements.main,
        opacity: [0, 1],
        duration: 500
      }, '-=1500');
  };
  pageAnimator.init();
};

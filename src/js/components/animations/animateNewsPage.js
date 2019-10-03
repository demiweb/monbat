import anime from 'animejs';
import PageAnimator from './PageAnimator';

export default function animateNewsPage() {
  const page = document.querySelector('.news-page');
  if (!page) return;
  const elements = {
    main: page.querySelector('.main'),
    hero: page.querySelector('.hero'),
    breadcrumbs: page.querySelector('.hero__breadcrumbs'),
    slider: page.querySelector('.hero__slider')
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
        targets: elements.breadcrumbs,
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: elements.slider,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 500
      })
      .add({
        targets: elements.main,
        opacity: [0, 1],
        duration: 500
      }, 1);
  };

  pageAnimator.init();
};

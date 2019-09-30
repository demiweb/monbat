import anime from 'animejs';
import PageAnimator from './PageAnimator';

export default function animateNewsPage() {
  const page = document.querySelector('.news-page');
  if (!page) return;
  const elements = {
    main: document.querySelector('.main'),
    hero: document.querySelector('.hero'),
    breadcrumbs: document.querySelector('.hero__breadcrumbs'),
    title: document.querySelector('.hero__title')
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
        translateY: ['-100%', '0%'],
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: elements.breadcrumbs,
        opacity: [0, 1],
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

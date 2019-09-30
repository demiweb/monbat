import anime from 'animejs';
import PageAnimator from './PageAnimator';

export default function animateItemPage() {
  const page = document.querySelector('.article-page');
  if (!page) return;
  
  const elements = {
    main: document.querySelector('.main'),
    hero: document.querySelector('.hero'),
    title: document.querySelector('.hero__title'),
    breadcrumbs: document.querySelector('.hero__breadcrumbs'),
    titleLine: document.querySelector('.line-sm')
  };

  const pageAnimator = new PageAnimator(elements);
  pageAnimator.animate = (elements) => {
    const tl = anime.timeline({ easing: 'linear' });

    tl    
      .add({
        targets: elements.main,
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: elements.hero,
        opacity: [0, 1],
        duration: 500
      }, 1)
      .add({
        targets: elements.title,
        opacity: [0, 1],
        translateY: ['-100%', '0%'],
        duration: 500
      })
      .add({
        targets: elements.titleLine,
        opacity: [0, 1],
        translateY: ['-100%', '0%'],
        duration: 500
      })
      .add({
        targets: elements.breadcrumbs,
        opacity: [0, 1],
        duration: 500
      });
  };
  pageAnimator.init();
};

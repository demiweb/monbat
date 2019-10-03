import anime from 'animejs';
import PageAnimator from './PageAnimator';

export default function animateItemPage() {
  const page = document.querySelector('.article-page');
  if (!page) return;
  
  const elements = {
    main: page.querySelector('.main'),
    hero: page.querySelector('.hero'),
    title: page.querySelector('.hero__title'),
    breadcrumbs: page.querySelector('.hero__breadcrumbs'),
    date: page.querySelector('.hero__date')
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
        targets: elements.date,
        opacity: [0, 1],
        translateY: ['-100%', '0%'],
        duration: 500
      })
      .add({
        targets: elements.title,
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

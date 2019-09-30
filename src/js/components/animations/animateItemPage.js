import anime from 'animejs';
import PageAnimator from './PageAnimator';

export default function animateItemPage() {
  const page = document.querySelector('.item-page');
  if (!page) return;
  const elements = {
    main: document.querySelector('.main')
  };

  const pageAnimator = new PageAnimator(elements);
  pageAnimator.animate = (elements) => {
    const tl = anime.timeline({ easing: 'linear' });

    tl    
      .add({
        targets: elements.main,
        opacity: [0, 1],
        duration: 500
      });
  };
  pageAnimator.init();
};

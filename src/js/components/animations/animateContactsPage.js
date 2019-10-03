import anime from 'animejs';
import PageAnimator from './PageAnimator';

export default function animateNewsPage() {
  const page = document.querySelector('.contacts-page');
  if (!page) return;
  const elements = {
    hero: page.querySelector('.hero'),
    title: page.querySelector('.hero__title'),
    subttl: page.querySelector('.hero__subttl .h2-subttl'),
    titleLine: page.querySelector('.line-sm'),
    breadcrumbs: page.querySelector('.hero__breadcrumbs')
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
        targets: elements.titleLine,
        translateY: ['-100%', '0%'],
        duration: 500
      })
      .add({
        targets: elements.subttl,
        translateY: ['-110%', '0%'],
        opacity: [0, 1],
        duration: 500
      })
      .add({
        targets: elements.breadcrumbs,
        opacity: [0, 1],
        duration: 500
      }, '-=200');
  };

  pageAnimator.init();
};

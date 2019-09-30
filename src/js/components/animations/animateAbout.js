import PageAnimator from './PageAnimator';
import AboutAnimator from './AboutAnimator';

export default function animateAbout() {
  const page = document.querySelector('.about-page');
  if (!page) return;

  const elements = {
    sections: [].slice.call(page.querySelectorAll('section'))
  };

  const pageAnimator = new PageAnimator(elements);
  pageAnimator.animate = (elements) => {
    const aboutAnimator = new AboutAnimator(elements.sections);

    elements.sections.forEach((section, i) => {
      section.setAttribute('data-index', i);
      const sectionThreshold = section.getAttribute('data-threshold') ? section.getAttribute('data-threshold') : 0.1;

      const threshold = [sectionThreshold];

      const observer = new IntersectionObserver(aboutAnimator.animate.bind(aboutAnimator), { threshold: threshold });
      observer.observe(section);
    });
  };
  pageAnimator.init();
};

// import Slider from './Slider';
import animateAssortSlider from './assortSlider';
import animateStandartSlider from './standartSlider';

export default function setAnimatedSliders() {
  const sliders = [].slice.call(document.querySelectorAll('.js-animated-slider'));

  if (!sliders.length) return;

  sliders.forEach((slider) => {
    const name = slider.getAttribute('data-slider');

    if (name === 'assort') {
      animateAssortSlider(slider);
    };

    if (name === 'standart') {
      animateStandartSlider(slider);
    };
  });
};

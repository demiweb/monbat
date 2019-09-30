import { debounce } from 'throttle-debounce';
import { $WIN } from '../constants';
import isTouch from '../lib/detectTouch';

export default function setMobileHeight() {
  const $sections = $('.js-mobile-height');

  if (!$sections) return;

  function setheight() {
    if (!isTouch()) return;
    const height = window.innerHeight;

    $sections.each((i, section) => {
      section.style.height = height + 'px';
    });
  };

  setheight();

  const setHeightDebounced = debounce(66, setheight);

  $WIN.on('resize', setHeightDebounced);
};

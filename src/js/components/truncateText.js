import Ellipsity from '../lib/truncate';
import { debounce } from 'throttle-debounce';
import { $WIN } from '../constants';

export default function truncateText() {
  const blocks = [].slice.call(document.querySelectorAll('.js-truncate-text'));

  if (!blocks.length) return;

  blocks.forEach((block) => {
    const text = $(block).text();
    block.innerHTML = `<p>${text}</p>`;

    const ellipsity = new Ellipsity({
      container: block
    });
    ellipsity.init();

    function truncate(argument) {
      block.innerHTML = `<p>${text}</p>`;
      ellipsity.init();
    }

    // truncate();

    const truncateDebounced = debounce(300, truncate);

    $WIN.on('resize', truncateDebounced);
  });

};

import { $DOC, ACTIVE } from '../constants';

export default function toggleBlock() {
  const btn = 'js-toggle-btn';

  $DOC.on('click', `.${btn}`, (e) => {
    e.preventDefault();
    const $block = $(e.currentTarget).parent().next('.js-toggle-block');

    console.log($block);

    $block.slideToggle();
    $(e.currentTarget).toggleClass(ACTIVE);
    $block.toggleClass(ACTIVE);
  });
};

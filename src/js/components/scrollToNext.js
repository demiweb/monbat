import { $DOC, $HTMLBODY } from '../constants';

export default function scrollToNext() {
  const btn = 'js-scroll-to-next';

  $DOC.on('click', `.${btn}`, e => {
    e.preventDefault();

    const $parent = $(e.currentTarget).closest('section');
    const $target = $parent.next();
    const $header = $('.header');
    const OFFSET = $header.height() || 0;

    $HTMLBODY.animate({
      scrollTop: $target.offset().top - OFFSET
    }, 800);
  });
}

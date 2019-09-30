export default function setMainColor() {
  const $blocks = $('.js-color');

  if(!$blocks.length) return;

  $blocks.each((i, block) => {
    const mainColor = block.getAttribute('data-main-color');
    const secondaryColor = block.getAttribute('data-secondary-color');

    if (mainColor) {
      block.style.setProperty('--main-color', mainColor);
    };

    if (secondaryColor) {
      block.style.setProperty('--secondary-color', secondaryColor);
    };
  });
};

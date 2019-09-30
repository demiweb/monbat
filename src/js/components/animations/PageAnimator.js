import getObjectValues from '../../lib/getObjectValues';

export default class PageAnimator {
  constructor(elements) {
    this.elements = elements;
    this.allowAnimate = true;
  };

  init() {
    getObjectValues(this.elements).forEach((el) => {
      if (!el) this.allowAnimate = false;
    });

    if (!this.allowAnimate) return;

    if (this.animate) {
      this.animate(this.elements);
    };
  };
};

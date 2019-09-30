import { ACTIVE, FOCUS, $DOC } from '../constants';
import { debounce } from 'throttle-debounce';
import isTouch from '../lib/detectTouch';

class SubMenu {
  constructor(btn) {
    this.btn = btn;
    this.$btn = $('.' + btn);
    this.$header = $('.' + btn).closest('.header');
    this.subnav= 'header__subnav';
    this.$subnav = this.$header.find('.' + this.subnav);
  };

  init() {
    if (!this.$subnav.length) return;
    this._toggle();
  };

  show(e) {
    this.$btn.addClass(SubMenu.classNames.IS_HOVERED);
    this.$subnav.addClass(ACTIVE);
    if (window.matchMedia('(max-width: 1199px)').matches) {
      this.$subnav.slideDown();
    };    
  };

  hide(e) {
    this.$btn.removeClass(SubMenu.classNames.IS_HOVERED);
    this.$subnav.removeClass(ACTIVE);
    if (window.matchMedia('(max-width: 1199px)').matches) {
      // this.$subnav.slideUp();
    };
  };

  toggle(e) {
    e.preventDefault();

    if (this.$btn.hasClass(FOCUS)) {
      this.$btn.removeClass(FOCUS);
      this.$subnav.removeClass(ACTIVE);
      this.$subnav.slideUp();
    } else {
      this.$btn.addClass(FOCUS);
      this.$subnav.addClass(ACTIVE);
      this.$subnav.slideDown();
    };    
  };

  _toggle() {
    if (!isTouch()) {
      this.$subnav.css({
        display: ''
      });

      this.showBinded = this.show.bind(this);
      this.hideBinded = this.hide.bind(this);

      const classNames = ['.'+this.btn, '.'+this.subnav];

      classNames.forEach((className) => {
        $DOC.on('mouseenter', className, this.showBinded);
        $DOC.on('mouseleave', className, this.hideBinded);
      });
    } else {
      this.toggleBinded = this.toggle.bind(this);     

      $DOC.on('click', '.'+this.btn, this.toggleBinded);
    }; 
  };
};

SubMenu.classNames = {
  IS_HOVERED: 'is-hovered'
};

export default function showSubMenu() {
  const submenu = new SubMenu('js-hover');
  submenu.init();
};

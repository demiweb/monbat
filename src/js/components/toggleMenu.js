import { ACTIVE, $BODY, $WIN, NOSCROLL } from '../constants';
import { debounce } from 'throttle-debounce';
import anime from 'animejs';

class Menu {
  constructor($burger) {
    this.$burger = $burger;
    this.$menu = $('.js-menu');
    this.$subnav = this.$menu.find('.header__subnav');
    this.$header = this.$menu.closest('.header');
    this.menuItems = [].slice.call(this.$menu[0].querySelectorAll('li'));
    this.IS_BLACK = 'is-black';
  };

  init() {
    this._refresh();
    this._toggleMenu();
  };

  refresh() {
    if (window.matchMedia('(min-width: 1200px)').matches) {
      this.$header.removeClass(this.IS_BLACK);
      this.$menu.removeClass(ACTIVE);
      this.$burger.removeClass(ACTIVE);

      if (this.$subnav.length > 0) {
        this.$subnav.css({
          display: ''
        });
      };

      this.menuItems.forEach((item) => {
        $(item).css({
          transform: '',
          opacity: ''
        });
      });
    };
  };

  toggle(e) {
    e.preventDefault();

    if (!$(e.currentTarget).hasClass(ACTIVE)) {
      $(e.currentTarget).addClass(ACTIVE);
      this.$menu.addClass(ACTIVE);
      this.$header.addClass(this.IS_BLACK);
      $BODY.addClass(NOSCROLL);

      this.showLinks();
    } else {
      this.hideLinks();

      this.animate.finished.then(() => {
        $(e.currentTarget).removeClass(ACTIVE);
        this.$menu.removeClass(ACTIVE);
        this.$header.removeClass(this.IS_BLACK);
        $BODY.removeClass(NOSCROLL);
      });      
    };
  };

  showLinks() {
    this.animate = anime({
      targets: this.menuItems,
      translateY: [-30, 0],
      easing: 'linear',
      opacity: [0, 1],
      duration: 500,
      delay: anime.stagger(100)
    });
  };

  hideLinks() {
    this.animate = anime({
      targets: this.menuItems,
      translateY: [0, -30],
      opacity: [1, 0],
      easing: 'linear',
      duration: 500,
      delay: anime.stagger(100)
    });
  };;

  _toggleMenu() {
    this.$burger.on('click', this.toggle.bind(this));    
  };

  _refresh() {
    const refreshDebouced = debounce(66, this.refresh.bind(this));
    $WIN.on('resize', refreshDebouced);
  };
};

export default function toggleMenu() {
  const $burger = $('.js-burger');

  if (!$burger.length) return;

  const menu = new Menu($burger);
  menu.init();  
};

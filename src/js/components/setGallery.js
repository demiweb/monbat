import { $DOC, $WIN, ACTIVE } from '../constants';
import { debounce } from 'throttle-debounce';

import lightGallery from 'lightgallery';
import 'lg-zoom';
import 'lg-fullscreen';
import 'lg-autoplay';
import 'lg-share';
import 'lg-thumbnail';
import 'lg-video';

import Drift from 'drift-zoom';

class Preview {
  init() {
    $DOC.on('click', `.${Preview.classNames.thumb}`, this._togglePreview.bind(this));
  };

  _togglePreview(e) {
    e.preventDefault();
    const $wrap = $(e.currentTarget).closest(`.${Preview.classNames.wrap}`);
    const $img = $wrap.find(`.${Preview.classNames.img}`);
    const $thumbs = $wrap.find(`.${Preview.classNames.thumb}`);
    const href = e.currentTarget.getAttribute('href');
    const index = $(e.currentTarget).closest('.swiper-slide').data('swiper-slide-index');

    $thumbs.removeClass(ACTIVE);
    $img.removeClass(ACTIVE);
    $(e.currentTarget).addClass(ACTIVE);

    $($img[index]).addClass(ACTIVE);
  };
};

Preview.classNames = {
  wrap: 'js-gallery',
  thumb: 'js-gallery-thumb',
  img: 'js-gallery-img'
};

class Gallery {
  constructor() {
    this.$lg = $(`.${Gallery.classNames.lightgallery}`);
    this.$imgs = $(`.${Gallery.classNames.img}`);
  };

  init() {
    this._initPreviewImgToggler();
    this._initLightgallery();
    this._initZoomImage();

    // this._initZoomImageDebounced = debounce(66, this._initZoomImage);
    // $WIN.on('resize', this._initZoomImageDebounced.bind(this));
  };

  _initPreviewImgToggler() {
    const preview = new Preview();
    preview.init();
  };

  _initLightgallery() {
    if(!this.$lg.length) return;

    this.$lg.lightGallery({
      exThumbImage: 'data-exthumbimage'
    });
  };

  _initZoomImage() {
    if (!this.$imgs.length) return;

    if (window.matchMedia('(min-width: 992px)').matches) {
      this.$imgs.each((i, img) => {
        const container = document.querySelector('.js-gallery-drift-zoom-container');
        const containerTop = container.getBoundingClientRect().y;
        const paneMaxHeigth = `calc(100vh - ${containerTop}px)`;

        const drift = new Drift(img, {
          paneContainer: container,
          zoomFactor: 2,
          onShow: () => {
            setTimeout(() => {
              const panel = container.querySelector('.drift-zoom-pane');
              panel.style.maxHeight = paneMaxHeigth;
            }, 100);
          }
        });
      });
    };
  };
};

Gallery.classNames = {
  lightgallery: 'js-gallery-lightgallery',
  img: 'js-gallery-img'
};



export default function setGallery() {
  const gal = new Gallery();
  gal.init();  
};

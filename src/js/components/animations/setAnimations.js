import { ASIDE_TRANSITION } from '../../constants';
import animateCatalog from './animateCatalog';
import animateItemPage from './animateItemPage';
import animateAbout from './animateAbout';
import animateNewsPage from './animateNewsPage';
import animateArticlePage from './animateArticlePage';
import animateContactsPage from './animateContactsPage';
import animateArticlePdfPage from './animateArticlePdfPage';

function setAnimation(func) {
  if (window.matchMedia('(max-width: 1199px)').matches) {
    setTimeout(func, ASIDE_TRANSITION);
  } else {
    func();
  };
};

export default function setAnimations() {
  setAnimation(animateCatalog);
  setAnimation(animateItemPage);
  setAnimation(animateAbout);
  setAnimation(animateNewsPage);
  setAnimation(animateArticlePage);
  setAnimation(animateContactsPage);
  setAnimation(animateArticlePdfPage);
};



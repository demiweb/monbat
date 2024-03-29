// import 'promise-polyfill/src/polyfill';
// import 'intersection-observer';
// import cssVars from 'css-vars-ponyfill';
import { $HTML } from './constants';

import setTouchClassName from './components/setTouchClassName';
import setLazy from './components/setLazy';
import toggleMenu from './components/toggleMenu';
import showSubMenu from './components/showSubMenu';
import setFullpage from './components/fullpage/setFullpage';
import setMobileHeight from './components/setMobileHeight';
import toggleAside from './components/toggleAside';
import setAccordion from './components/setAccordion';
import setAnimations from './components/animations/setAnimations';
import animateOnScroll from './components/animateOnScroll';
import setMainColor from './components/setMainColor';
import setSliders from './components/setSliders';
import setSelects from './components/setSelects';
import setAnimatedSliders from './components/sliders/setAnimatedSliders';
// import setParallax from './components/setParallax';
import setGallery from './components/setGallery';
import toggleBlock from './components/toggleBlock';
// import truncateText from './components/truncateText';
import setPopups from './components/setPopups';
import toggleInputFocus from './components/toggleInputFocus';
import setTextareaHeight from './components/setTextareaHeight';
// import setCounter from './components/setCounter';
import scrollToNext from './components/scrollToNext';

$(function() {
  // cssVars();
  $HTML.addClass('is-ready');

  setTouchClassName();
  setLazy();
  toggleMenu();
  showSubMenu();
  setFullpage();
  setMobileHeight();
  toggleAside();
  setAccordion();
  setAnimations();
  animateOnScroll();
  setMainColor();
  setSliders();
  setSelects();
  setAnimatedSliders();
  // setParallax();
  setGallery();
  toggleBlock();
  // truncateText();
  setPopups();
  toggleInputFocus();
  setTextareaHeight();
  // setCounter();
  scrollToNext();
});

window.setLazy = setLazy;

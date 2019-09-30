export default class Ellipsity {
  constructor({container, charachters, showBtn, hideBtn}) {
    this.CONTAINER = container;
    this.SHOW_BTN = showBtn;
    this.HIDE_BTN = hideBtn;
    this.FULL_TEXT = this.text;
    this.CHARACTERS = charachters;
  };

  init() {
    this._ellipsify();
    this._hideTextOnBtnClick();
    this._showTextOnBtnClick();
  };

  get content() {
    return this.CONTAINER.lastElementChild;
  };

  get text() {
    return this.content.innerText;
  };

  isTextOverflowing(element) {
    let isOverflowing;

    if (this.CHARACTERS) {
      isOverflowing = this.CHARACTERS < this.text.length;
    } else {
      // element.style.border = '1px solid transparent';
      // const height = element.clientHeight;
      // element.style.border = null;
      isOverflowing = element.clientWidth < element.scrollWidth || element.clientHeight < element.scrollHeight;
    };

    return isOverflowing;
  };

  replaceString(str, trimmedString) {
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')));
    str.innerText = trimmedString + '...';
  };

  binarySearch(length, callback) {
    let low = 0;
    let high = length - 1;
    let best = -1;
    let mid;

    while (low <= high) {
      mid = ~~((low + high) / 2);
      let result = callback(mid);
      if (result < 0) {
        high = mid - 1;
      }
      else if (result > 0) {
        low = mid + 1;
      }
      else {
        best = mid;
        low = mid + 1;
      }
    };
    return best;
  };

  _ellipsify() {
    const content = this.content;
    const text = this.text;

    if (this.CHARACTERS) {
      if(this.isTextOverflowing(this.CONTAINER)) {
        const trimmedString  = text.substring(0, this.CHARACTERS);
        this.replaceString(content, trimmedString);
      };
    } else {
      if(this.isTextOverflowing(this.CONTAINER)) {
        const checkFunc = (i) => {
          content.innerText = text.substring(0, i);
          return this.isTextOverflowing(this.CONTAINER)?-1:0;
        };

        const len = this.binarySearch(text.length - 1, checkFunc);
        const trimmedString  = text.substring(0, len).slice(0,-3);
        this.replaceString(content, trimmedString);

        if (this.SHOW_BTN) {
          this.SHOW_BTN.classList.add(Ellipsity.classNames.isActive);
        };
      } else {
        this.CONTAINER.classList.add(Ellipsity.classNames.hasLongText);
        if (this.SHOW_BTN) {
          this.SHOW_BTN.classList.remove(Ellipsity.classNames.isActive);
        };
      };
    };  
  };

  _showTextOnBtnClick() {
    if (this.SHOW_BTN) {
      this.SHOW_BTN.addEventListener('click', (e) => {
        e.preventDefault();
        e.currentTarget.classList.remove(Ellipsity.classNames.isActive);
        if (this.HIDE_BTN) {
          this.HIDE_BTN.classList.add(Ellipsity.classNames.isActive);
        };
        this.content.innerHTML = this.FULL_TEXT;
        this.CONTAINER.classList.add(Ellipsity.classNames.hasLongText);
      });
    };    
  };

  _hideTextOnBtnClick() {
    if (this.HIDE_BTN) {
      this.HIDE_BTN.addEventListener('click', (e) => {
        e.preventDefault();
        e.currentTarget.classList.remove(Ellipsity.classNames.isActive);
        if (this.SHOW_BTN) {
          this.SHOW_BTN.classList.add(Ellipsity.classNames.isActive);
        };
        this.CONTAINER.classList.remove(Ellipsity.classNames.hasLongText);
        this._ellipsify();
      });
    };
  };
};

Ellipsity.classNames = {
  hasLongText: 'has-long-text',
  isActive: 'is-active'
};

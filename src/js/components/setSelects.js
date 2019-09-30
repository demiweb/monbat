import Select from 'select-custom/src/main';

export default function setSelects() {
  const $selects = $('.js-select');

  if(!$selects.length) return;

  $selects.each((i, selectEl) => {
    const name = selectEl.getAttribute('data-type');
    const searchIcon = '<svg viewBox="0 0 56.966 56.966" class="icon icon-search" width="1.000em" height="1em"><path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"/></svg>';

    const options = {
      default: {

      },
      'with_icons': {
        optionBuilder: (option, customOption) => {
          const icon = option.dataset.icon;
          if (!icon) return;
          const inner = customOption.innerHTML;
          customOption.innerHTML = `<div class="custom-select__option-icon">${icon}</div> ${inner}`;
        }
      },
      'with_input': {
        panelItem: {
          position: 'top',
          item: '<input class="js-search" type="text" />' + searchIcon
        }
      }
    };

    const select = new Select(selectEl, options[name]);
    select.onClose = (select) => {
      const wrap = select.parentNode;
      const panel = wrap.querySelector('.custom-select__panel');
      panel.classList.remove('is-above');
    };
    select.onOpen = (select) => {
      // console.log('open', select);
    };
    select.init();

    // select elements
    const $customSelect = $(selectEl).closest('.custom-select');
    const $searchInput = $customSelect.find('.js-search');

    // search filter
    $searchInput.on('input', (e) => {
      const filter = e.currentTarget.value.toUpperCase();
      const $options = $(e.currentTarget).closest('.custom-select__panel').find('.custom-select__option');

      $options.each((i, option) => {
        const textValue = option.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          option.style.display = '';
        } else {
          option.style.display = 'none';
        }
      });
    });

    // set wrap attributes
    function addDataAttributes(el, targetEl) {
      const dataAttributes = [].filter.call(el.attributes, (at) => {
        return /^data-/.test(at.name);
      });

      if (dataAttributes.length) {
        dataAttributes.forEach((attribute) => {
          targetEl.setAttribute(attribute.name, attribute.value);
        });          
      };
    };

    addDataAttributes(selectEl, $customSelect[0]);

  });
};

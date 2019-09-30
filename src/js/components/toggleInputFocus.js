import { HASTEXT } from '../constants';

export default function toggleInputFocus() {
  const inputs = [].slice.call(document.querySelectorAll('.js-input-placeholder'));

  if(!inputs.length) return;
 
  inputs.forEach((input) => {
    const wrap = input.parentNode;    

    input.addEventListener('input', (e) => {
      if (input.value.length > 0) {
        input.classList.add(HASTEXT);
      } else {
        input.classList.remove(HASTEXT);
      };
    });
  });
};

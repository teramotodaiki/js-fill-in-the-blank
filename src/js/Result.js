import template from '../html/result';

const INPUT = 'input.jftb__token';
const RESULT = '.jftb__result';
const CLOSE = '.jftb__result_close';

/**
 * @param formulas Formula objects
 * @param element render target
 */
export default ({ formulas }, element) => {

  const num = formulas.length;
  element.innerHTML = template({ num });

  const result = element.querySelector(RESULT);
  const passed = () => formulas.filter(f => f.calc(false)).length;

  const set = () => {
    if (num === passed()) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  };

  set();

  formulas.forEach(f => f.inputs.then(inputs => {
    inputs.forEach(i => i.addEventListener('change', set));
  }));

  const close = element.querySelector(CLOSE);
  close.addEventListener('click', (event) => {
    event.preventDefault();
    element.classList.remove('show');
  });

};

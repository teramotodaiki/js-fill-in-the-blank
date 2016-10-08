import template from '../html/counter';

const INPUT = 'input.jftb__token';

/**
 * @param formulas Formula objects
 * @param element render target
 */
export default ({ formulas }, element) => {

  const calc = () => ({
    summary: formulas.length,
    current: formulas.filter(f => f.calc(false)).length
  });

  const set = () => {
    const props = calc();
    element.innerHTML = template(props);
  };

  set();

  formulas.forEach(f => f.inputs.then(inputs => {
    inputs.forEach(i => i.addEventListener('change', set));
  }));

};

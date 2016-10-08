import Formula from './Formula';

import Sheet from './Sheet';
import Counter from './Counter';
import Result from './Result';
import template from '../html/container';

const SHEET_CONTAINER = '.jftb__sheet_container';
const COUNTER_CONTAINER = '.jftb__counter_container';
const RESULT_CONTAINER = '.jftb__result_container';

/**
 * @param problems js like CSV :String
 * @param element render target
 */
export default ({ problems }, element) => {

  const formulas = problems.split('\n')
    .filter(line => line)
    .map(line => new Formula(line))
    .reduce((p, c) => p.concat(c), []);

  element.innerHTML = template();

  Sheet({ formulas }, element.querySelector(SHEET_CONTAINER));
  Counter({ formulas }, element.querySelector(COUNTER_CONTAINER));
  Result({ formulas }, element.querySelector(RESULT_CONTAINER));

  formulas.forEach(item => item.handleDidMount());

};

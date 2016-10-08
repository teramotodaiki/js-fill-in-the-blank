import template from '../html/formula';


/**
 * @param formulas Formula objects
 * @param element render target
 */
export default ({ formulas }, element) => {

  element.innerHTML = template({ formulas });

};

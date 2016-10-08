import { fromToken } from './tokenTypes';
import { getId } from './utils';
import resolver from './resolver';

const CORRECT = 'jftb__formula-correct';
const INVALID = 'jftb__formula-invalid';


export default class Formula {
  constructor(query) {
    this.id = getId();
    this.children = query.split(' ').map(token => fromToken(token));
    this.handleInput = this.handleInput.bind(this);

    // DOM interface
    this.inputs = new Promise((resolve, reject) => {
      this.handleDidMount = () => {
        const inputs = this.children
          .filter(item => item.isInput)
          .map(item => document.getElementById(item.id))
        resolve(inputs);
      };
    });

    this.inputs.then(inputs => {
      inputs.forEach(i => i.addEventListener('change', this.handleInput));
      if (this.calc(false)) this.setState(true);
    });
  }

  handleInput() {
    this.setState(this.calc());
  }

  calc(showError = true) {
    const predicate = this.children.reduce((p, c) => p + ' ' + c.value(), '');
    return resolver(predicate, showError);
  }

  setState(correct) {
    const element = document.getElementById(this.id);
    const list = element && element.classList;
    if (!list) return;
    list.add(correct ? CORRECT : INVALID);
    list.remove(correct ? INVALID : CORRECT);
  }
}

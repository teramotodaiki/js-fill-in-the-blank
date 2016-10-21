import { N, B, getId } from './utils';

const types = [
  {
    test: /-?[0-9]+/,
    className: 'token_number',
    constructor: (token) => () => token
  },
  {
    test: /true|false/,
    className: 'token_boolean',
    constructor: (token) => () => token
  },
  {
    test: /[\+\*\/\%\-\=]/,
    className: 'token_math_operator',
    constructor: (token) => () => token
  },
  {
    test: /\(\)/,
    className: 'token_brackets',
    constructor: (token) => () => token
  },
  {
    test: /&&|\|\|/,
    className: 'token_bool_operator',
    constructor: (token) => () => token
  },
  {
    test: '==',
    className: 'token_equal',
    constructor: (token) => () => token
  },
  {
    test: '!=',
    className: 'token_not_equal',
    constructor: (token) => () => token
  },
  {
    test: />|>=/,
    className: 'token_greater_than',
    constructor: (token) => () => token
  },
  {
    test: /<|<=/,
    className: 'token_less_than',
    constructor: (token) => () => token
  },
  {
    test: ';',
    className: 'token_semicolon',
    constructor: (token) => () => token
  },
  {
    test: "var",
    className: 'token_keyword_var',
    constructor: (token) => () => token
  },
  {
    test: /N/,
    className: 'token_var_number',
    constructor: () => {
      const value = N();
      return () => value;
    }
  },
  {
    test: /B/,
    className: 'token_var_boolean',
    constructor: () => {
      const value = B();
      return () => value;
    }
  },
  {
    test: 'i',
    isInput: true,
    className: '',
    constructor: () => function () {
      var element = document.getElementById(this.id);
      return element ? element.value : '';
    }
  },
  {
    test: /.*/,
    className: 'token_others',
    constructor: (token) => () => token
  }
];

const fromToken = (token) => {

  const type = types.find(t => token.search(t.test) === 0);
  const value = type.constructor(token);
  return Object.assign({}, type, { value, id: getId() });

}

export {
  types,
  fromToken
};

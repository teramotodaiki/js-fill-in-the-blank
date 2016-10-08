import 'whatwg-fetch';


import jftb from './js/js-fill-in-the-blank';
import './scss/main';

Promise.all([

  // problems
  Promise.all(
    Array.from({ length: 10 })
    .map((n, i) => fetch(`./problems/p${i}.js`).then(res => res.ok ? res.text() : ''))
  ),

  // window onload
  new Promise((resolve, reject) => {
    if (document.readyState === 'complete') return resolve();
    window.addEventListener('load', () => resolve());
  })

])
.then(response => response[0].join('\n'))
.then(problems => {

  // render all!
  jftb({ problems }, document.getElementById('app'));

})

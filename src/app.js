import 'whatwg-fetch';


import jftb from './js/js-fill-in-the-blank';
import './scss/main';

Promise.all([

  // problems
  fetch('./problem.js').then(res => res.ok ? res.text() : ''),

  // window onload
  new Promise((resolve, reject) => {
    if (document.readyState === 'complete') return resolve();
    window.addEventListener('load', () => resolve());
  })

])
.then(([problems]) => {

  // render all!
  jftb({ problems }, document.getElementById('app'));

});

window.addEventListener('beforeunload', (event) => {
  event.returnValue = "とちゅうのデータは　のこりません！";
  return event.returnValue;
});

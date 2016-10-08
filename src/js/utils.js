export const N = () => Math.random() * 10 >> 0; // 0-9

export const B = () => Math.random() < .5; // true|false

var id = 0;
export const getId = () => ++id;

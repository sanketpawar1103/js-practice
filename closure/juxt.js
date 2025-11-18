const juxt = (fnList) => (arg) => fnList.map((fn) => fn(arg));

const inc = (num) => num + 1;
const dec = (num) => num - 1;
const sqr = (num) => num * num;

console.log(juxt([inc, dec, sqr])(5));

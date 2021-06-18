const fatorial = 4;

const calculoDeFatorial = (number) => ( 
  number === 0 ? `${1}` : `${number * calculoDeFatorial(number - 1)}`
);

console.log(calculoDeFatorial(fatorial));
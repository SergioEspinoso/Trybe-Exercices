let numUm = -60;
let numDois = -60;
let numTres = -60;

let numZero = numUm > 0 && numDois > 0 && numTres > 0; 

if (numZero) {
  if (numUm + numDois + numTres == 180) {
    console.log('True');
  } 
  else {
    console.log('False');
  }
}
else {
  console.log('Numero negativo: Não é válido');
}   
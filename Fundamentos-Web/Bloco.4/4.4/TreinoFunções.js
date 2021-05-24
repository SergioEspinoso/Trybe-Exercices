function palindromo (str){
  for (let index = 0; index < str.length / 2; index += 1){
    if (str[index] === str[str.length - 1] ){
      return true;
    } else {
      return false;
    }
  }
}

let ePalindromo = 'tenet';

console.log(palindromo(ePalindromo));

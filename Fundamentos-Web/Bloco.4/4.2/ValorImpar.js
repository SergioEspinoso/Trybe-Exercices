let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let vazio = 0;

for (index = 0; index < numbers.length; index += 1){
 if (numbers[index] % 2 !== 0) {
   vazio++
 } 
}

if (vazio === 0){
  console.log('Nenhum mumero impar')
} else {
  console.log(vazio);
}


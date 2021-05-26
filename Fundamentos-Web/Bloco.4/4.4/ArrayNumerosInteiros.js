function integerCheck (arr) {
  let check = 0;
  let numero = 0;
  for (let index in arr){
    check = arr[index];
      for(let index2 in arr){
        if (arr[index2] === check){
          numero += 1;
        }
      }
  } 
  
}

console.log (integerCheck([2, 3, 2, 5, 8, 2, 3]));
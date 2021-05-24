function checkArray (arr){
  let number = 0;
  for (let index in arr){
    if(arr[number] < arr[index]){
     number = index;
    }
  }
  return number ;
}

let arrayDeTeste = [2, 3, 6, 7, 10, 1]; 
console.log(checkArray(arrayDeTeste));
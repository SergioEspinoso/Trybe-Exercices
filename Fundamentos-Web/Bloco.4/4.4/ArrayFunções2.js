function checkArray (arr){
  let number = 0;
  for (let index in arr){
    if(arr[number] > arr[index]){
     number = index;
    }
  }
  return number ;
}

console.log(checkArray([2, 4, 6, 7, 10, 0, -3]));
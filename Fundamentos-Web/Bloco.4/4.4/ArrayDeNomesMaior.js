function nameCheck (arr) {
  let check = arr [0];
  for (let index in arr){
    if(check.length < arr[index].length){
      check = arr[index];
    }
  }
  return check;
}

console.log (nameCheck(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
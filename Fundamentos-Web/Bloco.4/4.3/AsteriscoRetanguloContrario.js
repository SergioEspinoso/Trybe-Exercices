let n  = 5;
let ast = "";
let esp = "";
let dec = n;

for (let index = 0; index < n ; index += 1) {
  ast += "*"; 
  dec -= 1;
  esp = ' '.repeat(dec);
  console.log(esp + ast);
}


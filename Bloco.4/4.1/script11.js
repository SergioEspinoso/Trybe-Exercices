let salarioBruto = 3500;
let inssPorcento;
let impostoPorcento;

if (salarioBruto <= 1556.94) {
  inssPorcento = salarioBruto * 0.08;
}
else if (salarioBruto <= 2594.92){
  inssPorcento = salarioBruto * 0.09;
}
else if (salarioBruto <= 5189.82){
  inssPorcento = salarioBruto * 0.11;
}
else {
  inssPorcento = salarioBruto - 570.88;
}

let salarioBase = salarioBruto - inssPorcento;
console.log(salarioBase);

if (salarioBase <= 1903.98) {
  impostoPorcento = 0;
}
else if  (salarioBase <= 2826.65) {
  impostoPorcento = (salarioBase * 0.075) - 142.80;
}
else if (salarioBase <= 3751.05){
  impostoPorcento = (salarioBase * 0.15) - 354.80;
}
else if (salarioBase <= 4664.68){
  impostoPorcento = (salarioBase * 0.225) - 636.13;
}
else {
  impostoPorcento = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - impostoPorcento;
console.log('Seu salário liquido é de: ' + salarioLiquido);


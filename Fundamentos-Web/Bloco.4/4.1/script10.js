let custoProduto = 175;
let valorVenda = 250;


if (custoProduto >= 0 && valorVenda >= 0 ) {
  let imposotoProduto= 20/100 * custoProduto;
  let custoTotal = custoProduto + imposotoProduto;
  let lucro = (valorVenda - custoTotal) * 1000;  
  console.log(lucro);
}
else {
  console.log('Error: Valores menores que 0.');
}
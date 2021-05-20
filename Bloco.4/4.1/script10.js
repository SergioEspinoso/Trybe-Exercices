let custoProduto = 175;
let valorVenda = 250;


if (custoProduto >= 0 && valorVenda >= 0 ) {
  let imposotoProduto= 20/100 * custoProduto;
  let custoTotal = custoProduto + imposotoProduto;
  let lucro = valorVenda - custoTotal;  
  console.log(lucro * 1000);
}
else {
  console.log('Error: Valores menores que 0.');
}
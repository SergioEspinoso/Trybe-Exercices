let nomePeca = 'Rainha'.toLowerCase();

switch (nomePeca){
  case 'peão':
    console.log('Uma casa para frente e captura somente na diagonal. Primeiro movimento pode ser opcional de duas casas.');
    break;
  case 'torre':
    console.log('Horinzontal e Vertical, o unico limitador de número de casas seria se houver peças no caminho');
    break;
  case 'cavalo':
    console.log('Se movimenta em "L", pode pular peças');
    break;
  case 'bispo':
    console.log('Diagonalmente, não pula peças');
    break;
  case 'rei':
    console.log('Todas as direções uma casa de cada vez');
    break;
  case 'rainha':
    console.log('Todas as direções quantas casas quiser por vez, porém, não pula peças');
    break;
  default:
    console.log('Não é uma peça valida de xadrez');
}

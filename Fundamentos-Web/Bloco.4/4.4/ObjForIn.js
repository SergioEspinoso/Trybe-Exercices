let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let infoDois = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
}

// Imprimindo Bem vindo(a), Margarida
console.log('Bem vindo(a), ' + info.personagem);

//Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
console.log(info.personagem + ' e ' + infoDois.personagem);
console.log(info.origem + ' e ' + infoDois.origem);
console.log(info.nota + ' e ' + infoDois.nota);

if (info.recorrente === 'Sim' && infoDois.recorrente === 'Sim') {
  console.log('Ambos recorrentes');
}
else{
  console.log('Não são recorrentes');
}

// Conseguindo as informações chaves personagem, origem, nota, recorrente
for (let key in info) {
  console.log(key);
}

// Conseguindo os valores das chaves Margarida, Pato Donald, Namorada do personagem principal nos quadrinhos do Pato Donald, Sim
for (let index in info) {
  console.log(info[index]);
}
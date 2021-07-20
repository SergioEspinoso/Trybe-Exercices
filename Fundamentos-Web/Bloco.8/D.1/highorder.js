const hiredPeople = (str) => { 
  const hired = {
  nomeCompleto: `${str}`,
  email: `${str}@trybe.com` 
  }
  return hired; 
}

const newEmployees = (hiredPeople) => {
  const employees = {
    id1: hiredPeople('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: hiredPeople('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: hiredPeople('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

newEmployees(employees.id1);

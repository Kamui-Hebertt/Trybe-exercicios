const newEmployees = (generateEmp) => {
  const employees = {
    id1: generateEmp('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generateEmp('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generateEmp('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const generateEmp = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return email;
}

console.log(newEmployees(generateEmp));

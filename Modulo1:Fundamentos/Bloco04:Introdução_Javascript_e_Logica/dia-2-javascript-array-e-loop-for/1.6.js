let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0;  index < numbers.length; index = index + 1)

{
    if (numbers[index] % 2 !== 0)
      {  console.log(numbers[index])}
    

    else if(numbers[index] % 2 == 0){console.log("nenhum valor ímpa encontrado")}
};


//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

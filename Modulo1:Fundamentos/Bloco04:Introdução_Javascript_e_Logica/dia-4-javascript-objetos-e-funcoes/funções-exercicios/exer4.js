let array = [9, 3, 2, 5, 8, 2, 3, 3,3];


function returnEquals(){
    let equalN = 0;
for(let i = 0;  i < array.length;  i += 1){
if(array[i]=== array[i]){
    equalN = equalN + array[i];
    
}
}
return equalN;
}
console.log(returnEquals(array));



//🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3];.
//Valor esperado no retorno da função: 2.
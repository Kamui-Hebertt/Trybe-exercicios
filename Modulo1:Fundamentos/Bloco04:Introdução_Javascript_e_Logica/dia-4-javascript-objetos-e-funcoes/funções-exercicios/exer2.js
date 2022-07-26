let array = [2, 3, 6, 7, 10, 1];

function retornaMaiorIndice() {
    var maior = array[0]
    // iniciando o for com o elemento da posicao 1, pois o maior já é, temporariamente, o da posicao 0
    for (let i = 0; i < array.length; i++){
        if (array[i] > maior) {
            maior = array[i];
            indice = i;
        }
    } 
    return indice;
}

console.log(retornaMaiorIndice(array));


//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1];.
//Valor esperado no retorno da função: 4.

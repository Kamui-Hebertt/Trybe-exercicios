//function maiorNome(arr){

    //let maior = arr[0];
    //for(let i = 0; i < arr.length; i += 1){
    //if(arr[i].length > maior.length){
   // maior = arr[i];
   // }
  //  }
  //  return maior;
   // }
    
  //  console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


  

    function largestNumber (array){
        let largest = array[0];
        for (let i = 0; i < array.length; i+=1){
            if(array[i].length > largest.length){
                largest = array[i];
            }
        }
        return largest;
    }

    console.log(largestNumber(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
//Valor esperado no retorno da função: Fernanda.
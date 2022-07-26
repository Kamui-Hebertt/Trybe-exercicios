



function verifyPalindrome(word){

    
    let reverseW = word.split('').reverse().join('');

    let pali = false;
   
    if (reverseW === word){
        pali = true;
        
        return pali

    }
    else{
        return pali
    }
    


}

console.log(verifyPalindrome('eye'));


//1 - Crie uma função que receba uma string e retorne true se for um palíndromo, 
//ou false, se não for.
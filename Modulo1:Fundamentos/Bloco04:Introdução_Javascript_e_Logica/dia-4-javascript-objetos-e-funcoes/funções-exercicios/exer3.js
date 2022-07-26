let array = [2, 4, 6, 7, 10, 0, -3];

function returnSmallest(){
    let smallest = array[array.length -1];

    for(let i = 0; i < array.length; i -=1)
    {
         if (smallest < array[i]){

            array[i]= smallest;
            i = index;

            return index;
            
            

          
         }
          
         
    }
    
}

console.log(returnSmallest(array));
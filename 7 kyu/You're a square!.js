var isSquare = function(n){
    let x= Math.sqrt(n)
    if (n <0){
      return false
    }
     if (n==0){
       return true
     }
    if (n%x === 0){
      return true
    } else{
      return false
    }
      
   }

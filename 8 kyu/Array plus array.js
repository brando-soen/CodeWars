/* 8 kyu - Array plus array

I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

*/

function arrayPlusArray(arr1, arr2) {
  
    const n1 = arr1
    const n2 = arr2
    let sum1 = 0
    let sum2 = 0
    
    for (i=0;i<n1.length;i++){
      sum1 += n1[i] 
    }
    
    for (j=0;j<n2.length;j++){
      sum2 += n2[j]
    }
    
    return sum1+sum2
   }




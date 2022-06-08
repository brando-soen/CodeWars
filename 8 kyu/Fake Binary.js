/* 8 kyu -  Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string


*/

function fakeBin(x){
    var y = ''
    
    for (let i = 0; i < x.length; i++){
      if (x[i]<5) { y = y+'0'} 
       else{ y = y+'1'}
      }
     return y
    }
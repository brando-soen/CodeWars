/* 8 kyu - Area of a Square

Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

*/

function squareArea(A){

    let Rad = (A*4/ (2*Math.PI));
    let area = Math.pow(Rad,2)
     return Math.round(area*100)/100
    
  }
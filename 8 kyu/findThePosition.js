/* 8 kyu - Find the position!

When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"

*/


function position(letter){
    let abc = "0abcdefghijklmnopqrstuvwxyz"
    let result = abc.indexOf(letter)
    return "Position of alphabet: "+result
  }



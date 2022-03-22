
/* 8 kyu - Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

*/


// Solution

function doubleChar(str) {
    
  var newStr =""  
  
  for (i=0;i<str.length;i++){
        newStr = newStr+str[i]+str[i]
  }
  return newStr
}
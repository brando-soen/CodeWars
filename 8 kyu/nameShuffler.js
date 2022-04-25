/* 8 kyu - Name Shuffler

Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"

*/

function nameShuffler(str){
    const array = str.split(" ")
    return array[1] + " " + array[0]
  }




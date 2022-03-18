
/* 8 kyu - Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */


//solution
function abbrevName(name){

    const nameArr = name.split(" ")  
    let First = nameArr[0].charAt(0)
    let Second = nameArr[1].charAt(0)
    
    return First.toUpperCase()+"."+Second.toUpperCase()
                               

}
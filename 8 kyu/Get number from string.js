/* 8 kyu - Get number from string

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

*/

getNumberFromString = s => Number(s.replace(/\D/g,''))
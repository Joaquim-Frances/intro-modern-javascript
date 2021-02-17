//Arrays en javascript

//const array = new Array(100);
const array = [1,2,3,4,5];
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(44); push no es recomanable, modifica l'objecte inicial.

let array2 = [...array, 6]; // tres punts es el operador spread [...array] agafa l'array o l'objecte ja declarat
//array2.push(6);

let array3 = array2.map( function(numer){
    return numer*2;
});

console.log(array);
console.log(array2);
console.log(array3);
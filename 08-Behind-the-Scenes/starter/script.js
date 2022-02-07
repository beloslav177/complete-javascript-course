'use strict';

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;
//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear} with name ${firstName}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1998) {
//       var millenial = true;
//       const firstName = 'Martin';
//       const str = `0h, and you're a millenial, ${firstName}`;
//       console.log(str);
//     }
//     console.log(millenial);
//   }
//   console.log(firstName);
//   printAge();
//   return age;
// }

// const firstName = 'Lukas';
// calcAge(1996);

console.log(me);
console.log(job);
console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

console.log(addDecl(2,4));
console.log(addArrow(2,4));
console.log(addExpr(2,4));


function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) = a + b;

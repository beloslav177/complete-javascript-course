/*
let js = 'amazing';
console.log(40+8+23-10);

console.log('Jonas');
console.log(23);

let firstName = "Albert";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let func = 27;
let name = "Jonas";
console.log(name);

let PI = 3.1415;

let myFirstJob = "Programmer";
let mySecondJob = "Teacher";

console.log(myFirstJob + " and "+ mySecondJob);

let isJavaScriptFun = true;
console.log("Is JavaScript fun? " + isJavaScriptFun);

// console.log(typeof true);
console.log(typeof isJavaScriptFun);
// console.log(typeof 23);

isJavaScriptFun = 'YES!';
console.log(typeof isJavaScriptFun);
console.log(isJavaScriptFun);

let year;
console.log(year);
console.log(typeof year);

let isNull;
console.log(isNull);
console.log(typeof isNull);

year = 1996;
console.log(year);
console.log(typeof year);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// 2**3 means 2*2*2;
console.log(ageJonas * 2, ageSarah / 10, 2**3);

const lastName = 'Belay';
console.log(firstName, lastName);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

console.log(now - 1991 > now - 2018);
*/

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log('Jonas is ' + ageJonas + ' and Sarah is ' + ageSarah);
// console.log(now - 1991 > now - 2018);

// let x,y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas, ageSarah) - 2 ;
// console.log(ageJonas, ageSarah, averageAge);

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

const massJohn = 92;
const massMark = 85;
const heightJohn = 1.95;
const heightMark = 1.76;

let bmiJohn = massJohn / (heightJohn ** 2);
let bmiMark = massMark / (heightMark ** 2);

let markHigherBMI = bmiMark > bmiJohn;

console.log(bmiJohn, bmiMark, markHigherBMI);
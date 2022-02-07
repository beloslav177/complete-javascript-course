'use strict';

// let hasDriverLicence = false;
// const passTest = false;

// if (passTest) hasDriverLicence = true;
// if (hasDriverLicence) console.log('I can drive');
// else console.log('I can not drive');

// function logger(){
//     console.log('My name is Lukas');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and
//     ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(3,4));

// const appleJuice = fruitProcessor(5, 0);
// const orangeJuice = fruitProcessor(4,5);

// console.log(appleJuice, orangeJuice);

// function calcAge1(birthYear)
// {
//     const age = 2037 - birthYear;
//     return age;
// }
// const age1 = calcAge1(1996);
// const age2 = calcAge2(1995);
// console.log(age1);
// console.log(age2);

// function calcAge2(birthYear){
//     return 2037 - birthYear;
// }

// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1996);
// console.log(age3);

// function yearsUntilRetirement(birthYear, firstName) {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;

//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Lukas'));

// function cutFruitPieces(fruit)
// {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges)
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and
//     ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// // console.log(fruitProcessor(2,3));

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const  yearsUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return retirement;
//     }
//     else return -1;
//    // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (a, b, c) => ((a+b+c)/3).toFixed(2);
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
//     }
// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';


// console.log(friends);

// const years = new Array(1991, 1993, 2002, 2021);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice', 'Nicole'];

// // const calcAge = function(birthYear){


// // }

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037-1991, friends]
// console.log(jonas);

// const yearses = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge

// const friends = ['Michael', 'Steven', 'Peter'];
// const newLenght = friends.push('Jay');

// console.log(friends);
// console.log(newLenght);


// friends.unshift('John');
// console.log(friends);

// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// friends.unshift('Lukas');
// console.log(friends);

// console.log(friends.indexOf('Lukas'));

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends);

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven.');
// }

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const callTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0,2;
// }

// const bills = (125, 555, 44);
// const tips = [callTip(bills[0]),callTip(bills[1]), callTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// const jonasArray = [
//     'Jonas',
//     'Lukas',
//     'Andrew',
//     ['Michael', 'Nathan', ' Maria']
// ]

// console.log(jonasArray);

// const jonas = {
//     firstName: 'Lukas',
//     lastName: 'Belay',
//     age: 2021 - 1996,
//     job: 'Dev',
//     friends: ['Anita', 'Dominik', 'Martin']
// }

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey] + " " +  jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends? ');
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// }else {
//     console.log('Wrong request, Choose between firstName, lastName, age, job and friends?');
// }

// jonas.location = 'Slovakia';
// jonas['facebook'] = '@lukasbelay';
// console.log(jonas);

// //CHallenge
// //Jonas has 3 friends and best friend called Michael

// // console.log(jonas['first' + nameKey] + "has" + jonas[friends].Count() +
// // ' friendsm and his best friends is called ' + jonas[friends[2]]);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[2]}`);

// const jonas = {
//     firstName: 'Lukas',
//     lastName: 'Belay',
//     birthYear: 1996,
//     job: 'Dev',
//     friends: ['Anita', 'Dominik', 'Martin'],
//     hasDriversLicence: false,

//     // calcAge: function(birthYear){
//     //     return 2021 - birthYear;
//     // }

//     // calcAge: function(){
//     //     // console.log(this);
//     //     return 2021 - this.birthYear;
//     // }

//     calcAge: function(){
//         this.age = 2021 - this.birthYear;
//         return  this.age;
//     },

//     getSummary: function(){
//         return `${this.firstName} is ${this.age} - year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'not'} a drives's licence.`
//     }
// };

// console.log(jonas.calcAge());

// console.log(jonas.calcAge());

// console.log(jonas.getSummary());

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.92,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi.toFixed(2), john.bmi.toFixed(2));

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI ${mark.bmi.toFixed(2)} is higher than ${john.fullName}'s BMI (${john.bmi.toFixed(2)})`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI ${john.bmi.toFixed(2)} is higher than ${mark.fullName}'s BMI (${mark.bmi.toFixed(2)})`);
// }

// for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Lifging weights repetition ${rep}`);
// }

// const jonasArray = [
//     'Jonas',
//     'Lukas',
//     567,
//     'Andrew',
//     ['Michael', 'Nathan', ' Maria'],
//     true
// ];
// const types = [];

// for (let i = 0; i < jonasArray.length ; i++) {
//     console.log(jonasArray[i], typeof jonasArray[i]);

//     //Filling types array
//     // types[i] = typeof jonasArray[i];
//     types.push(typeof jonasArray[i]);
// }

// // console.log(types);

// const years = [1991, 1996, 1998, 2002, 2010, 2020];
// const ages = [];

// for (let i = 0; i < jonasArray.length; i++) {
//     ages.push(2021 - years[i]);
// }

// console.log(ages);

// console.log('ONLY STRINGS')
// //continue and break
// for (let i = 0; i < jonasArray.length ; i++) {
//     if (typeof jonasArray[i] !== 'string') continue;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log('BREAK WITH NUMBER')
// //continue and break
// for (let i = 0; i < jonasArray.length ; i++) {
//     if (typeof jonasArray[i] === 'number') break;

//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// for (let i = jonasArray.length; i>=0; i--) {
    //     console.log(jonasArray[i]);
    // }
    // for (let i = 0; i < 4; i++) {
        //     console.log(`------------Starting exercize ${i}`);
        // }

// const jonasArray = [
//     'Jonas',
//     'Lukas',
//     567,
//     'Andrew',
//     ['Michael', 'Nathan', ' Maria'],
//     true
// ];

// for (let rep = 1; rep < 6; rep++){
//     console.log(`FOR: Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 5) {
//     console.log(`WHILE: Lifting weights repetition ${rep}`);
//     rep ++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a  ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) {
//         console.log('Loop is about the end...');
//     }
// }

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
}
return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
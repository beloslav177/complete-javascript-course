// const firstName = 'Lukas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a '
// + (year - birthYear) + ' year old ' + job + '!';

// console.log(jonas);

// console.log('\n')

// const age = 17;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('Sarah can start driving licence');
// }
// else console.log('Sarah can not start driving licence');

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// }
// else century = 21;

// console.log('\n');
// console.log(century);

// /*
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// HINT: Use an if/else statement 😉

// GOOD LUCK 😀
// */

// const massJohn = 92;
// const massMark = 85;
// const heightJohn = 1.95;
// const heightMark = 1.76;
// const massLukas = 87;
// const heightLukas = 1.86;

// let bmiJohn = massJohn / (heightJohn ** 2);
// let bmiMark = massMark / (heightMark ** 2);
// let bmiLukas = massLukas / (heightLukas ** 2);

// let markHigherBMI = bmiMark > bmiJohn;

// console.log(bmiJohn.toFixed(2), bmiMark.toFixed(2), markHigherBMI);
// console.log(bmiLukas.toFixed(2));

// if (bmiMark > bmiJohn) {
//     console.log("Mark's BMI " + bmiMark.toFixed(2) + " is higher than " + bmiJohn.toFixed(2) + " John's BMI.");
// }
// else console.log("Mark's BMI " + bmiMark.toFixed(2) + " is lower than " + bmiJohn.toFixed(2) + " John's BMI.");

// //type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);
// console.log(String(23) + "dfsf", 23);

// //type coercion
// console.log('I am ' + 23 + ' years old');

// const hasDriversLicence = true;
// const hasGoodVisiaon = true;

// console.log(hasDriversLicence && hasGoodVisiaon);
// console.log(hasDriversLicence || hasGoodVisiaon);
// console.log(!hasDriversLicence);

// const shouldDrive = hasDriversLicence && hasGoodVisiaon;

// const isTired = true;
// if (hasDriversLicence && hasGoodVisiaon && isTired) {
//     console.log('Sarah is able to drive!');
// }else console.log('Someone else should drive...');

// console.log(hasDriversLicence && hasGoodVisiaon && isTired);


/*
There are two gymnastics teams, Dolphins and Koalas.
They compete against each other 3 times.
The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw,
so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100.
With this rule, a team only wins if it has a higher score than the other team,
and the same time a score of at least 100 points.
HINT: Use a logical operator to test for minimum score,
as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw!
So a draw only happens when both teams have the same score and both have a
score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const scoreDolphins = (88+91+110);
// const scoreKoalas = (88+91+110);
// let averageScoreDolphins = scoreDolphins/3;
// let averageScoreKoalas = scoreKoalas/3;

// console.log(averageScoreDolphins.toFixed(2));
// console.log(averageScoreKoalas.toFixed(2));

// if (averageScoreDolphins > averageScoreKoalas) {
//     console.log('Team Dolphins win the match with the average score ' + averageScoreDolphins.toFixed(2));
// }else if (averageScoreDolphins < averageScoreKoalas) {
//     console.log('Team Koalas win the match with the average score ' + averageScoreKoalas.toFixed(2));
// }else console.log("Was Draw with average score " + averageScoreDolphins.toFixed(2) + ' and ' + averageScoreKoalas.toFixed(2));

// // BONUS 1
// const scoreDolphins = (100 + 200 + 50) / 3;
// const scoreKoalas = (100 + 200 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log('Both win the trophy!');
// } else {
//   console.log('No one wins the trophy 😭');
// }

// const day = 'monday';

// switch(day){
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// }else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// }else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');
// }else if (day === 'friday') {
//   console.log('Record videos');
// }else if (day === 'saturday' || day === 'sunday'){
//   console.log('Enjoy the weekend');
// }
// else {
//   console.log('Not a valid day!');
// }

// 3+4
// 1991
// true && false && !false
// if (23>10) {
//   const str = '23 is bigger'
// }

// const me = 'Lukas';
// console.log(`I'm ${2021 - 1996} years old ${me}.`);

// // const drink = age >= 18 ? console.log('wine') : console.log('water');

// const age = 12;
// // age >= 18 ? console.log('I like to drink wine.') :
// // console.log('I like to drink water.');

// let drink2;
// if (age>=18) {
//   drink2 = 'wine';
// }else drink2 = 'water';
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator
for whenever he goes eating in a resturant.
In his country, it's usual to tip 15% if the bill value
is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value.
Create a variable called 'tip' for this.
It's not allowed to use an if/else statement 😅
(If it's easier for you, you can start with an if/else statement,
and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip,
and the final value (bill + tip). Example: 'The bill was 275,
the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

const bill = 60;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
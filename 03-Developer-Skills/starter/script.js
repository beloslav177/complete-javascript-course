// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = birthyear => 2021 - birthyear;

// console.log(calcAge(1996));

// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const celsius = [4, 8, 156, 2123, 121, 1321, 2154, 454, 487];

// const calcTempAmplitute = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
// };
// const amplitude = calcTempAmplitute(temperatures);

// calcTempAmplitute([333, 547, 2433, 3355]);
// calcTempAmplitute(temperatures);
// console.log(amplitude);

// const together = temperatures.concat(celsius);
// console.log(together);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     //C/ FIX
//     value: Number(prompt('Degrees celsius')),
//   };
//   console.log(measurement);
//   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(` ...${data1[0]}♀ ...  ...${data1[1]}♀ ...  ...${data1[2]}♀`);
console.log(` ...${data2[0]}♀ ...  ...${data2[1]}♀ ...  ...${data2[2]}♀`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}♀C in ${i + 1} days...    `;
  }
  console.log(str);
};
printForecast(data1);

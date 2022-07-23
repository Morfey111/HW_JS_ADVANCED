// EXAMP 1
// let small_characters = ['a','b','c','d'];
// console.log(small_characters)

// // let Up_characters = [];

// // for (el of small_characters){
// //     Up_characters.push(el.toUpperCase())
// // }

// // console.log(Up_characters)

// let Up_characters = small_characters.map( el => el.toUpperCase())
// console.log(Up_characters)

// EXAMP 2
// let arr_inputNum = [1,2,3,4]

// let arr_output;

//  let arr_outputNUm = arr_inputNum.map((el, indx)=>{
//     console.log(indx)
//     return (el+ indx)
//  })
//  console.log(arr_outputNUm)

// EXAMP 3

// // TASK: from 'cities' array generate a new array 'cityNames' which will contain only the names of the cities
// let cities = [
// 	{name: 'Sofia', population: 1_236_000},
// 	{name: 'Plovdiv', population: 343_424 },
// 	{name: 'Burgas', population: 202_766},
// 	{name: 'Varna', population: 335_177},
// ];

// let nameCities = cities.map((city)=>{
//     return city.name
// })

// console.log(nameCities)

// // TASK: from 'cities' array generate a new array 'cityNames' which will contain only the names of the cities

// let dict = {
//   Sofia: "София",
//   Plovdiv: "Пловдив",
//   Burgas: "Бургас",
//   Varna: "Варна",
// };

// let cities = [
//   { name: "Sofia", population: 1_236_000 },
//   { name: "Plovdiv", population: 343_424 },
//   { name: "Burgas", population: 202_766 },
//   { name: "Varna", population: 335_177 },
// ];

// nameCities = cities.map((city) => {
//   console.log(city.name);

//   return dict[city.name];
// });

// console.log(nameCities);

/* -------------------------------- filter() -------------------------------- */
// const arr_input = [1,2,3,4];


// let arrOutPut = arr_input.filter(num=> num % 2 === 0)

// console.log(arrOutPut)



// Create cityNames, containing only city names which population is greater than 340_000

let cities = [
	{name: 'Sofia', population: 1_236_000},
	{name: 'Plovdiv', population: 343_424 },
	{name: 'Burgas', population: 202_766},
	{name: 'Varna', population: 335_177},
];

let bigCities = cities.filter( city => city.population > 340000).map(city=> city.name)

console.log(bigCities)



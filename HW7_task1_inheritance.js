// // First way
// let Person = {
//   name: "Pesho",
//   age: 33,
//   greet: function () {
//     return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
//   },
// };

// let person1 = Object.create(Person);
// console.log(person1.greet());

// let Developer = {
//   name: "Mario",
//   age: 22,
//   skillSet: ["HTML", "CSS", "Axios", "Ant design", "JSON Server"],
// };

// // Developer.__proto__ = Person;
// // console.log(Developer.greet())

// let Manager = {
//   name: "Tihomir",
//   age: 35,
//   managged: [],
// };


// Second way (CORECT WAY)
let Person = {
  name: "Pesho",
  age: 33,
  greet: function () {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
  },
};

let person1 = Object.create(Person);
console.log(person1.greet());

let Developer = Object.create(Person, {
  name: {
    value:'Mario',
    enumerable: true, 
    writable: true 
  },
  age: {
    value:22,
    enumerable: true, 
    writable: true 
  },
  skillSet: {
    value: ["HTML", "CSS", "Axios", "Ant design", "JSON Server"],
    enumerable: true, 
    writable: true 
  },
})

let Manager = Object.create(Person, {
  name:{
    value: 'Tihomir',
    enumerable: true,
    writable: true
  },
  age:{
    value: 35,
    enumerable: true,
    writable: true
  },
  managged: {
    value: ['Petar', 'Boris', 'Marian'],
    enumerable: true,
    writable: true
  }
})

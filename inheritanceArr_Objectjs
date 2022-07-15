// function cats(name){
//     this.name = name;
//     console.log(`${this.name} is Eating`)
// }

// function Lion(name) {

// }

// function Tiger(name, color) {
//   this.color = color;

// }

// let Leo = new Lion("Leo");
// let Teo = new Tiger("Teo", "White");
// Leo.eat()

let carOne = {
  manifacture: undefined,
  speed: 100,
  drive() {
    console.log(`${this.manifacture} driven with ${this.speed}km/h`);
  },
};

let ford = {
  manifacture: "Ford",
  speed: 200,
};

ford.__proto__ = carOne;

let fordPesho = {
  manifacture: 'Peshos ford ',
  speed: 300,
};

fordPesho.__proto__ = ford;

fordPesho.drive()

function Cat(name){
  this.name = name;
}

let  cat1 = new Cat('Cat1')
let cat2 = new Cat('Cat2')

Cat.prototype.eat = function(){
  console.log(`${this.name} is eating`)
}

console.log(cat1.eat())
console.log(cat2.eat())

Array.prototype.foo = function () {
  console.log(`fooooooooooooooooooo`);
};

let arr = [1, 2, 3, 3, 4];
let arr2 = [1, 2];


console.log(arr2.foo());
console.log(arr.foo());


let  car = {
  name: undefined,
  speed: 100,
  drive: function(){
    console.log(`${this.name} have driven with speed ${this.speed}`)
  }
}

let carPesho = Object.create(car, {
  speed:{
    value:300,
    writable: true,
    enumerable: true
  },
    name:{
      value: 'Mercedes',
      enumerable:true, 
      writable: true
  }

})


console.log(carPesho.speed, carPesho.drive(), carPesho.name)





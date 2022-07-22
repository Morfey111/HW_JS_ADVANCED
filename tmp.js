let car1 = {
    bmw: 'coupe',
    speed: 333
}
let car2= {
    opel: 'comby',
    speedCar2: 100
}

let allCars  = Object.assign(car1, car2)
car1 = Object.assign(car1, car2)

console.log(allCars)
console.log(car1)



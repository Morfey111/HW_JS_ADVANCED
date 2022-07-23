// function Car(year, speed){
//      this.year = year;
//      this.speed = speed; 
// }

// Car.prototype.drive = function(){
//     console.log(`Car is made in ${this.year} and driving with max speed ${this.speed}`)
// }



// function BMW (year, speed){
//     Car.call(this, year, speed)
// }

// BMW.prototype = Object.create(Car.prototype)

// bmw1 = new BMW(2012, 333)

// bmw1.drive()

// function Opel (year, speed){
//     Car.call(this, year, speed)
// }

// Opel.prototype = Object.create(Car.prototype)

// opel1 = new Opel(2222, 100)

// opel1.drive()


class Car{
    constructor(year, speed){
        this.year = year
        this.speed = speed
    }
    drive(){
        console.log(`This car is made on ${this.year} and her max speed is ${this.speed}`)
    }
}

let car1 = new Car(1999, 100)

// console.log(car1.drive())

car1.drive()

class Mercedes extends Car {
   constructor(year,speed){
        super(year,speed)
        // Why working without constructor and super ?????
   }
}

car1Mercedes = new Mercedes(2000, 300)

car1Mercedes.drive()




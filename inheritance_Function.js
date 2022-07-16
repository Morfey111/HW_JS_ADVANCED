function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`${this.name}  says hello`);
};


let pesho = new Person("Pesho");

pesho.greet();






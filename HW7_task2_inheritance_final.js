/* --------------------------- Person constructor --------------------------- */
function Person(name, age) {
  // your code here ...
  this.name = name;
  this.age = age;
}
// Person greet method
// your code here ...
Person.prototype.greet = function () {
  console.log(`Hello mhy name is ${this.name} I am an ${this.age}`);
};
let person1 = new Person("Aladin", 55);
person1.greet();

/* --------------------------- Manager constructor -------------------------- */
function Manager(name, age, managed) {
  Person.call(this, name, age);
  this.managed = managed;
  // reuse Person constructor
  // your code here ...
}
Manager.prototype = Object.create(Person.prototype);
// Manager objects should inherit all methods from Person:

/* -------------------------- Developer constructor ------------------------- */
function Developer(name, age, skillset) {
  // reuse Person constructor
  Person(this, name, age);
  this.skillset = skillset;
  // your code here ...
}
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.greet = function(){
    console.log(`Hello I am Developer my name is ${this.name} ana I know ${this.skillset}`)
}
  // Developer objects should inherit all methods from Person:

  /* ----------------------------- Create Objects ----------------------------- */
  // Developer instances
  let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
  let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

  // Manager instances
  let gates = new Manager('Bill Gates', 43, [maria, pesho]);

  /* ----------------------------- Use the objects ---------------------------- */
  maria.greet();
  pesho.greet();
  gates.greet();
  
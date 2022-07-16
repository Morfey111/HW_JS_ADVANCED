/* --------------------------- Person constructor --------------------------- */
function Person(name, age) {
  // your code here ...
  this.name = name;
  this.age = age;
}
// Person greet method
// your code here ...
Person.prototype.greet = function () {
    console.log(`${this.name}  says hello I am on ${this.age}`);
  }

let person1 = new Person("Tihomir", 33);
person1 = Person.prototype.greet;

person1(); 
// Why here is undefind ??????? we invoke with NEW Person

// person1.greet()   is not a function ????????



  /* --------------------------- Manager constructor -------------------------- */
  function Manager(name, age, managed){
    // reuse Person constructor
    // your code here ...
  }
  // Manager objects should inherit all methods from Person:

  /* -------------------------- Developer constructor ------------------------- */
  function Developer(name, age, skillset){
    // reuse Person constructor
    // your code here ...
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

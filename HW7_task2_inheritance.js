/* --------------------------- Person constructor --------------------------- */
function Person(name, age){
    // your code here ...
    this.name = name;
    this.age = age; 
  }
  // Person greet method
  // your code here ...
  Person.prototype.greet = function(){
    console.log(`Hello my name is ${this.name} I am ${this.age}`);
    
  }
  let persin1 = new Person('Tihomir', 22)

  persin1.greet()
  
  
  /* --------------------------- Manager constructor -------------------------- */
  function Manager(name, age, managed){
    // reuse Person constructor
    // your code here ...
    this.name = name;
    this.age = age;
    this.managed = managed; 
  }
  // Manager objects should inherit all methods from Person:
  Manager.prototype = Person.prototype

  let manager1 = new Manager('Boris', 33, ['Momchil', 'Pesho'])
  manager1.greet()
  
  
//   /* -------------------------- Developer constructor ------------------------- */
//   function Developer(name, age, skillset){
//     // reuse Person constructor
//     // your code here ...
//     this.name = name;
//     this.age = age;
//     this.skillSet = skillSet;
//   }
//   // Developer objects should inherit all methods from Person:
//   Developer.prototype = Person.prototype
  
//   /* ----------------------------- Create Objects ----------------------------- */
//   // Developer instances
//   let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
//   let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
  
//   // Manager instances
//   let gates = new Manager('Bill Gates', 43, [maria, pesho]);
  
//   /* ----------------------------- Use the objects ---------------------------- */
//   maria.greet();
//   pesho.greet();
//   gates.greet();
  
// // properties

// name: string,
// salary: number,

// methods

// getSalary()

// returns salary
// increaseSalary(incrValue, pass)
// increments salary with incrValue, if pass == 'abracadabra'

// "use strict";
let devFactory = function (name, salary) {
    // YOUR CODE HERE
    let objDev = {};
    let _salary;

    objDev.getSalary = function () {

        if (this.increaseSalary){
           return _salary;
        } else{
          return salary;
        }
      };
    objDev.increaseSalary = function (incrValue, pass) {
      _salary = salary + incrValue;
      console.log( `this is from function ${_salary} ${pass}`);
      return _salary, pass
    };
  
    objDev.getSalary();
    objDev.name = name;
    objDev.increaseSalary();
    
    console.log(objDev);
  
    return objDev;
  };
  
  let dev1 = devFactory("Peter", 1000);
  let dev2 = devFactory("Maria", 1200);
  
  console.log(`${dev1.name} salary is ${dev1.getSalary()}`);
  console.log(`${dev2.name} salary is ${dev2.getSalary()}`);
  
  dev1.increaseSalary(500, "abracadabra");
  dev2.increaseSalary(100, "123");
  
  console.log(`${dev1.name} salary after promotion is ${dev1.getSalary()}`);
  console.log(`${dev2.name} salary after promotion is ${dev2.getSalary()}`);
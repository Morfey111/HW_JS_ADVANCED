let DevFactory = function (name, salary) {
    // Construct the dev object:
    // defnine properties
  
    this.name = name
    let _salary = salary
  
  
    // define methods
    // getter
    this.getSalary = function () {
      return _salary
    };
  
    // setter
    this.setSalary = function(newSalary) {
      console.log(`Log that salary of ${this.name} is set!!!`);
      _salary = newSalary
    }
  
    this.increaseSalary = function (incrValue, pass) {
      // increments salary with incrValue, if pass == 'abracadabra'
      if(pass==='abracadabra'){
        this.setSalary(_salary + incrValue);
      }
    };
  };
  
  let dev1 = new DevFactory("Peter", 1000);
  let dev2 = new DevFactory("Maria", 1200);
  
  console.log(`${dev1.name} salary is ${dev1.getSalary()}`);
  console.log(`${dev2.name} salary is ${dev2.getSalary()}`);
  
  dev1.increaseSalary(500, "abracadabra");
  dev2.increaseSalary(100, "123");
  
  console.log(`${dev1.name} salary after promotion is ${dev1.getSalary()}`);
  console.log(`${dev2.name} salary after promotion is ${dev2.getSalary()}`);
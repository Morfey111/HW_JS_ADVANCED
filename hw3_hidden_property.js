function studentFactory(firstName, secondName, address) {
  let obj = {};
  let _firstName;

  obj.setName = function (newName) {
    console.log("The name will be change...");
    _firstName = newName;
  };
  // ЗАЩО ПИШЕМ obj.setName a ne функция setName???  Защото направо конструираме онекта ли ??????
  obj.getName = function () {
    return _firstName;
  };

  // obj.firstName = firstName;
  // _firstName = firstName
  obj.setName(firstName);
  obj.secondName = secondName;
  obj.address = address;
  obj.great = function () {
    console.log(
      `Hello I am ${obj.getName()} I am from town ${obj.address.town}`
    );
  };

  // obj.firstName = firstName
  console.log(obj);
  return obj;
}

let student1 = studentFactory("Pesho", "Petrov", {
  country: "BG",
  town: "Plovdiv",
});
let student2 = studentFactory("Maria", "Marinova", {
  country: "UK",
  town: "London",
});

console.log(student1.getName());



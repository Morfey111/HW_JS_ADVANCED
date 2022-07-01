// let student1 = {
//     firstName : 'Boris',
//     secondName: 'Marinov',
//     addres: {
//         country: 'BG',
//         town: 'Sofia'
//     }
// }

// let student2 = {
//     firstName : 'Maria',
//     secondName: 'Atanasova',
//     address: {
//         country: 'UK',
//         town: 'London'
//     }
// }

// function studentMaker(firstName, secondName, addres){

//     return  {
//        firstName: firstName,
//        secondName:secondName,
//        addres: addres
//     }
// }

// let student1 = studentMaker('Petar', 'Petrov', {country:'Bg', town: 'Plovdiv'})
// let student2 = studentMaker('Todor', 'teodorov', {country:'UK', town: 'London'})

// console.log(student1)
// console.log(student2)

function studentMakerTwo(firstName, secondName, addres) {
  let newStudent = {};

  let _newFirstName;

    // newStudent.setNewName = -_newFirstName,
    newStudent.secondName = secondName,
    newStudent.addres = addres;
    

}

 newStudent.setNewName = function (newName) {
  _newFirstName = newName;
  console.log(`the name is changed...`);
};

newStudent.getName = function () {
  return _newFirstName;
};

let student1Two = studentMakerTwo("Petar", "Petrov", {
  country: "Bg",
  town: "Plovdiv",
});
let student2Two = studentMakerTwo("Todor", "teodorov", {
  country: "UK",
  town: "London",
});

console.log(student1Two);
console.log(student2Two);

student1Two.setNewName("haralampi");
student1Two.getName(); 


// the err comes onley run code  with node..

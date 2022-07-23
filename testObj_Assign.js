let person1 = {
    name: 'Boris',
    age:42,
}
let person2 = {
    Firstname:'Pesho',
    ageOld: 22
}

// person1 = Object.assign(person1, person2)

let person2Backup; 

person2.Firstname = 'Asparuh'

person2Backup = Object.assign({}, person2)

console.log(person2)
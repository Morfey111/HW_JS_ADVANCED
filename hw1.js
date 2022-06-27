let arrNum = [1, 1, 3, 5, 5, 6, 7, 8, 8];

let unique = arrNum.filter((item, i, ar) => ar.indexOf(item) === i);  /*please explain*/

console.log(unique);
console.log(arrNum);

let arrNum2 = [1, 1, 5, 5, 6, 7, 7, 7, 7];
let arrUniqe = [];

let length = arrNum2.length;
for (let i = 0; i< length; i++) {
  if (arrUniqe.indexOf(arrNum2[i]) === -1) {
    arrUniqe.push(arrNum2[i])
  }

}
console.log(arrUniqe)
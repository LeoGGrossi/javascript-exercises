let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum += array[i].age;
    }
    const average = sum/array.length;
    return average
}
//can use  reduce()
console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
let arr = ["HTML","JavaScript","CSS"];

let sorted = copyAndSort(arr);

console.log(arr);
console.log(sorted);

function copyAndSort(arr){
    const copy = arr.slice();
    copy.sort();
    return copy;
}
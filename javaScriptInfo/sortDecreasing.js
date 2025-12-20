let arr = [5,2,1,-10,8];

function sortDecreasing(arr){
    arr.sort( (a, b)  => -(a - b));
}
console.log(arr);
sortDecreasing(arr);
console.log(arr);
let arr = [5, 3, 8, 1, 2, 4, 6];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);

function filterRange(arr, a, b){
    const filtered = arr.filter((num) => num >= a && num <= b);
    return filtered;
}
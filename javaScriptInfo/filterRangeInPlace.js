let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log(arr);
console.log(arr.length);

function filterRangeInPlace(arr, lowerBound, upperBound){
    arr.map((num,index)=>{
        if(!(num >= lowerBound && num <= upperBound)) arr.splice(index,1);
    }
    );
}
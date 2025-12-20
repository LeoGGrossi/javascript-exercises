
const removeFromArray = function(arr, ...theArgs){
    for(let i=0; i<theArgs.length;){

        let removeIndex = arr.indexOf(theArgs[i]);
        if(removeIndex === -1){
            i++
        } else arr.splice(removeIndex, 1);
    }
    return arr;
    //simpler solution with filter(()=>!)
};

//returns the array without the removed items
console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;

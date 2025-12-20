let arr = [1, 2, 3];

function shuffle(arr){
    
    const copy = arr.slice();

    for(let i = 0; i < arr.length; i++){
        const randIndex = Math.floor(Math.random() * copy.length);
        //console.log(randIndex);
        //console.log(copy);
        let randSelected = copy.splice(randIndex, 1).pop();
        arr.splice(i, 1, randSelected);
        //console.log(arr);
        //console.log(copy);
        //console.log("rand = "+randSelected);
    }

    //for each element of copy, generate rand, map it to lengh, remove,  put it in arr
}


shuffle(arr);
console.log(arr);
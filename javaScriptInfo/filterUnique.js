
function unique(arr){
    let uniqueElements = [];

    arr.map((str)=>{
        if(!uniqueElements.includes(str)){
            uniqueElements.push(str);
        }
    });

    return uniqueElements;
    //for each str in arr, compare to each uniqueStr,
    //if diff add to unique
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));
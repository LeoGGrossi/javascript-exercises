const repeatString = function(str, num) {
    let combined = '';
    if(num<0){
        return `ERROR`;
    }
    for(let i = 0; i<num; i++){
        combined += str;
    }
    return combined
};

let string = "hey";
let num = 3;
console.log(repeatString(string, num));

// Do not edit below this line
module.exports = repeatString;

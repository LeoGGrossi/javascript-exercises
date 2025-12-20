const reverseString = function(str) {
    let reversed = ''
    for(let i = (str.length-1); i>=0 ; i--){
        reversed += str[i];
        console.log(reversed);
    }
    return reversed;
};

let myString = "hello theres";
reverseString(myString);
// Do not edit below this line
module.exports = reverseString;

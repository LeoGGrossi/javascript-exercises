const sumAll = function(num1, num2) {
    let sum  = 0;
    if(num1 < 0 || num2 < 0 ||
        !(Number.isInteger(num1)) || !(Number.isInteger(num2))
    ) return "ERROR"
    
    if(num1 < num2){
        for(;num1<=num2;num1++){
            sum += num1;
        }
        return sum;
    } else {
        for(;num1>=num2;num1--){
            sum += num1;
        }
    return sum;
    }
};

console.log(sumAll(1,4))

// Do not edit below this line
module.exports = sumAll;

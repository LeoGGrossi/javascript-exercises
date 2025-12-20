const fibonacci = function(num) {
    let arr = [0,1];
    num = +num;
    if(num<0) return 'OOPS';
    if(num<2) return arr[num];
    for(let i=2; i<=num; i++){
        let aux = arr[0] + arr[1];
        arr[0] = arr[1];
        arr[1] = aux;
    }
    return arr[1];
    //Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
};

console.log(fibonacci(10));
// Do not edit below this line
module.exports = fibonacci;

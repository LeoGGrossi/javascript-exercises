const palindromes = function (string) {
    let arr = string.split('');
    arr = arr.filter((item)=>{
        return typeof item === "string" && /^[A-Za-z0-9]*$/.test(item);
    });
    arr = arr.map(item=>item.toLowerCase());
    let reversed = arr.slice();
    reversed.reverse();
    console.log(arr.join(''));
    console.log(reversed);
    return arr.every((item, index)=>item === reversed[index]);
};
palindromes('Racecar!');

function filterToLetters(string){
    console.log(string);
    let arr = string.split('');
    let filtered = arr.filter((item)=>{
        return /^[A-Za-z0-9]*$/.test(item);
    });
    return filtered;
}
//console.log(filterToLetters('A car, a man, a maraca.'));
// Do not edit below this line
module.exports = palindromes;

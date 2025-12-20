const test = "my-short-string"

function camelize(str){
    let arr = str.split("-");
    let capitalized = arr.map(
        (string,index)=>
    {
        let lettersArr = string.split("");
        if(index!=0) lettersArr[0] = lettersArr[0].toUpperCase();
        return lettersArr.join("");
    });
    const camelized = capitalized.join("");
    return camelized;
}

let result = camelize(test);
console.log(result);
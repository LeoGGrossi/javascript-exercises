let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

/*let names = (users)=>{
    let newArray = [];
    for(let i=0; i<users.length; i++){
        newArray[i] = users[i].name;
    }
    return newArray;
};*/
let names = users.map(item => item.name);

//let names = namesR(users);
console.log( names ); // John, Pete, Mary
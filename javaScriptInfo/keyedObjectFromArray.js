let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users){
    let groupedById = users.reduce((usersById,current)=>{
        usersById[current.id] = current;
        return usersById;
    }, {})
    return groupedById;
}

let usersById = groupById(users);
console.log(usersById);

//very interesting

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
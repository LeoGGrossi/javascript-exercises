const findTheOldest = function(people) {
    return people.sort(function (a, b){
        return getAge(a)-getAge(b);
    }).pop();

};

const getAge = function (person){
    if(!("yearOfDeath" in person)){
        person.yearOfDeath  = new Date().getFullYear();
    }
    return (person.yearOfDeath  - person.yearOfBirth);
}











const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
console.table(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;

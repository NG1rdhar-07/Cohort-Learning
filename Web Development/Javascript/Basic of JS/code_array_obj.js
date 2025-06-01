// using filters to filter-out particular objects out of all objects !!

let given_users = [
    {name: "Noor", age : 20, sex : "M"},
    {name : "Ally", age : 19, sex : "F"},
    {name : "Robert", age : 13, sex : "M"}
]

function getAdultMales (users)
{
    return users.filter(x => x.age >= 18 && x.sex == "M");
}

let validUsers = [getAdultMales (given_users)];
console.log(validUsers);


// Other approach can be pushing into the array !!
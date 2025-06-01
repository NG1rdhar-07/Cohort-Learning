let person = {
    name : "Noor",
    age : 20,
    gender : "M"
}


function canVote (age)
{
    if (age >= 18)
        console.log ("Congrats, you can vote !!");

    else
        console.log ("Sorry, you cant' vote !!");
}


function greet (person)
{
    if (person.gender == "M")
       {
            console.log("Hi " + "Mr. " + person.name + ", so your age is " + person.age);
            canVote(person.age);
       }


    else if (person.gender == "F")
        {
            console.log("Hi " + "Mrs. " + person.name + ", so your age is " + person.age);
            canVote(person.age); 
        }
}

greet(person);
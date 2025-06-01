function canVote (age)
{
    if (age > 18)
    return true;

    else
    return false;
}

let validity = (canVote(19));

console.log(validity);
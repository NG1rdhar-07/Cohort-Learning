function do_opr(a,b,op)
{
    return op(a,b);
}

function sum(a,b)
{
    return a+b;
}

let x = do_opr(2,564365,sum);
console.log(x);

// Asynchronous functions and the normal functions, what is the difference
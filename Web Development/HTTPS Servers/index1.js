const exp = require("express");
const app = exp();

function sum(n)
{
    let ans = (n*(n+1))/2;
    return ans;
}

app.get("/", function(req, res)
{
    const p = req.query.p;
    const finalSum = sum(p);
    res.send("Sum is : " + finalSum);
})

app.listen(3001);
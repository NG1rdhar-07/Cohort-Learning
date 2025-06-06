// Create a backend in nodeJS returning sum endpoint
// Write HTML file hitiing backend using fetch API

const exp = require("express");
const cors = require("cors");

const app = exp();

app.use(exp.json());

// no need of cors here, because FE and BE are on same host 3005 !!
app.get("/", function(req,res){
    res.sendFile("/home/noor/Documents/Cohort Learning/Web Development/HTTPS Servers/sample.html");
})

app.post("/sum", function(req, res)
{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a+b,
    });
})

app.listen(3005);
// Create a backend in nodeJS returning sum endpoint
// Write HTML file hitiing backend using fetch API

const exp = require("express");
const cors = require("cors");

const app = exp();

app.use(exp.json());
app.use(cors());

app.post("/sum", function(req, res)
{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a+b,
    });
})

app.listen(3005);
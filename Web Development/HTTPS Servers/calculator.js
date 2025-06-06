const exp = require("express");

const app = exp();

app.get("/sum/:a/:b", function(req, res) { // yeh thoda alag syntax hai....no need to use query parameters now
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({ans: a+b})
});

app.get("/multiply", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({ans: a*b})
});

app.get("/divide", function(req, res) {
     const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a / b
    })
});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3004);
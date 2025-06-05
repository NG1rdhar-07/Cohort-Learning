const exp = require("express");
const clinic = exp();

var users = [{name: "alpha",
    kidneys: [{healthy : false}]
}]

clinic.get("/", function(req, res){
    const alphaKidney = users[0].kidneys;
    const noOfKidney = alphaKidney.length;
    let healthyKidneys = 0;

    for(let i =0; i<noOfKidney; i++)
    {
        if(alphaKidney[i].healthy)
        {
            healthyKidneys ++;
        }
    }

    const unhealthyKidneys = noOfKidney - healthyKidneys;
    res.json({
        noOfKidney, healthyKidneys, unhealthyKidneys 
    });

})

clinic.listen(3002);

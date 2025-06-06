const exp = require("express");
const clinic = exp();

var users = [{name: "alpha",
    kidneys: [{healthy : false}]
}]

clinic.use(exp.json());

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


clinic.post("/", function(req, res)
{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

// As you send to update kidney(POST), you will see changes in the get request when you try to get those details !!



// PUT converts unhealthy kidneys to healthy ones !!
clinic.put("/", function(req, res)
{
    for(let i = 0; i<users[0].kidneys.length; i++)
    {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})


function isThereAtLeastOnePoorKidney ()
{
    let atLeastOneBad = false;
    for(let i = 0; i<users[0].kidneys.length; i++)
    {
        if(!users[0].kidneys[i].healthy)
        {
            atLeastOneBad = true;
        }
    }

    return atLeastOneBad;
}


// Delete the unhealthy kidney !!
clinic.delete("/", function(req,res)
{
    // If there are no unhealthy kidney what's the point of doing the surgery !!....so condition add krte hain !!
    
    if(isThereAtLeastOnePoorKidney())
    {
        const newKidneys = [];

        for(let i = 0; i<users[0].kidneys.length; i++)
        {
            if (users[0].kidneys[i].healthy)
            {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        
        users[0].kidneys = newKidneys;
        res.json({msg: "Done !!"})
    }

    else
    {
        res.status(411).json({
            msg: "You have no bad Kidneys !!"
        });
    }
    
})

clinic.listen(3002);

const express = require('express');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "love_my_hands";
const app = express();

app.use(express.json()); // Helps parsing the post !!

const users = []; 

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    users.push({
        username : username,
        password: password
    })

    res.json({
        message: "You are signed up"
    })

    console.log(users);
});


app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    const foundUser = users.find(function(u)
    {
        if(u.username == username && u.password == password)
        {
            return true;
        }
        
        else
        {
            return false;
        }
    })


    if(foundUser)
    {
        // Using username and secret key, we store token !!
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)

        // foundUser.token = token;                    no need to store token in DB now !!

        res.json({
            token: token
        })
    }

    else 
    {
        res.status(403).send({
        message: "Invalid username or password"
        })
    }
    console.log(users);
});


app.get("/me", (req, res) => {
    const token = req.headers.token // extraction of token from headers !!
    
    const decodedInfo = jwt.verify(token, JWT_SECRET); // decodes the token to the actual json object
    const username = decodedInfo.username;

    let foundUser = null;


    for (let i =0; i<users.length; i++)
    {
        if(users[i].username == token)
        {
            foundUser = users[i];
        }
    }

    if(foundUser)
    {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })

        console.log("Okay, so you have token....here we go you got ACCESS !!")
    }
    else{
        res.json({
            message: "Invalid Token!!"
        })
    }

})

app.listen(3000);
const http = require('http');
const express = require('express');
const app = express();




app.use((req, res, next) => {
    console.log("this will run everywhere", "rn i'm in", req.url);
    next();
})


app.use("/users", (req, res, next) => {
    console.log("you are in the /users");
    res.send("<h1>Welcome to the users area </h1>");
})



app.use("/", (req, res, next) => {
    // console.log("you are in the /");
    res.send("<h1>welcome to the / page </h1>");

});




app.listen(3000);
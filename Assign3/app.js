const http = require('http');
const express = require('express');
const app = express();
const path = require("path");

const usersRoute = require("./routes/users");

app.use(express.static(path.join(__dirname, "public")));
app.use(usersRoute);
app.use("/", (req, res, next) => {

    console.log("hello");

    res.sendFile(path.join(__dirname, "./", "views", "index.html"));
})




app.listen(3000);
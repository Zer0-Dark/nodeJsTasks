const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));


app.set('view engine', "ejs");
app.set("views", "views");

const users = []
let usersTrace = 0;

app.post("/users", (req, res, next) => {
    usersTrace++;
    users.push({ user: req.body.user, id: usersTrace });

    res.render("users.ejs", { users: users });

})
app.get("/users", (req, res, next) => {
    console.log(users, usersTrace);
    res.render("users.ejs", { users: users });
})
app.use("/", (req, res, next) => {

    res.render("home.ejs", { pageTitle: "this is a test" })
})






app.listen(3000);
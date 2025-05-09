const express = require("express");
const router = express.Router();



router.use("/users", (req, res, next) => {

    res.send("<h1> welcome from inside the router </h1>");
})


module.exports = router;
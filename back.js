const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = 3000;

const time = require("./modules/randomTimer.js");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Request-Method", "GET,POST");
    res.header(
        "Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type"
    );
    next();
});
app.use(cors());

app.get("/promise", (req, res) => {
    time.randomTime(req, res);
});

app.listen(port, 'localhost', function(err) {
    if (err) return console.log(err);
    console.log("Listening at http://localhost:%s", port);
});

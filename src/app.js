let express = require("express");
let app = express();
require("dotenv").config();

// add controllers
app.use("/movies", require("./controllers/movies"));
app.all("*", (req, res) => {
    res.send("404");
});

module.exports = app;

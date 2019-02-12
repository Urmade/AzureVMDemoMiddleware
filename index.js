const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("You successfully reached the Middleware layer!");
})

app.listen(process.env.PORT || 8000);
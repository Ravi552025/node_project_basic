const express = require("express");
const app = express();
const port = 5000;

app.get("/", function (req, res) {
    res.send("bvjhbffffff")
});
app.listen(port, function () {
    console.log(`running on port ${port}`);
    
})
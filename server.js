const express = require("express");

app = express();

port = process.env.PORT || 4000;
app.get("/", (req,res) => {
    res.send("hello world from ec2, it failed. Try in elastic beanstack")
})

app.listen(port, () => console.log("server is running on port: ", port))
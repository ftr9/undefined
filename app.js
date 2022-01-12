const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("very basic express server");
})

app.get("/products", (req, res) => {
    res.send("very basic product route");
})

module.exports = app;

const express = require("express");

const mongoose = require("mongoose");
const connect = require('./configs/db.js');
const app = express();

const cardetailsController = require('./controllers/cardetails.controller.js');

app.use(express.json())

app.use('/cardetails',cardetailsController);

app.listen(4444, async function () {
    try {
        await connect();
        console.log("Listening on port 4444")
    } catch (e) {
        console.log("Err", e.message)

    }

})
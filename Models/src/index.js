const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json())

const connect = () => {
    return mongoose.connect("Connection link")
}

const carSchema = new mongoose.Schema({
id:{type:Number, required: true},
phoneNumber:{type:Number, required: true},
carNumber:{type: String, required: true},
carMake:{type: String, required: true},
carModel:{type: String, required: true},
yearOfRegisteration:{type: Number, required: true},
monthOfRegisteration:{type: Number, required: true},
policyNumber: {type: Number, required: false},
policyStatus: {type: Boolean, required: true},
},{
    versionKey:false,
    timestamps: true,
})

//Creating collection

const Cardetails = mongoose.model("cardetails",carSchema)


app.listen(4444, async function () {
    try {
        await connect()
        console.log("Listening on port 4444")
    } catch (e) {
        console.log("Err", e.message)

    }

})
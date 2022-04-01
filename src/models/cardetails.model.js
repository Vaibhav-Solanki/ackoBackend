
const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    id:{type:Number, required: true},
    phoneNumber:{type:Number, required: true},
    carNumber:{type: String, required: true},
    carMake:{type: String, required: true},
    carModel:{type: String, required: true},
    carType:{type: String,required:false},
    yearOfRegisteration:{type: Number, required: true},
    monthOfRegisteration:{type: Number, required: true},
    policyNumber: {type: Number, required: false},
    policyStatus: {type: Boolean, required: false},
    },{
        versionKey:false,
        timestamps: true,
    })
    
    //Creating collection
    
module.exports = mongoose.model("cardetails",carSchema)
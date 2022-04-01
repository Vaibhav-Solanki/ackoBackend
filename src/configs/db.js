require('dotenv').config()

let mongoose = require('mongoose');
const password = process.env.PASSWORD;

let connect = () => {
    return mongoose.connect(
        `mongodb+srv://Acko:${password}@cluster0.cr2pk.mongodb.net/acko?retryWrites=true&w=majority`
    );
};

module.exports = connect;
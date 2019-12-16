const mongoose = require("mongoose");
mongoose.connect("mongodb://test:test@ds249128.mlab.com:49128/test-users-api");

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model("users", schema);

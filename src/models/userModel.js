const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    product: {
        type : String,
        require : true
    },
    category:{
        type : String,
        require : true
    },
    Address:{
        type : String,
        require: true
    },
    City:{
        type : String,
        require: true
    },
    State:{
        type : String,
        require: true
    },
    days:{
        type : Number,
        require: true
    }
})

const userModel = mongoose.model('user',userSchema);
module.exports = userModel;
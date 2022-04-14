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
    age: {
        type : Number,
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
    maxrentTime: {
        type: Number,
        require: false
    },
    perDay:{
        type: Number,
        require: false,
        default: 0
    },
    extrades:{
        type : String,
        require: true
    }
        // perWeek:{
        //     type: Number,
        //     require: false,
        //     default: 0
        // },
        // perMonth:{
        //     type: Number,
        //     require: false,
        //     default: 0
        // }
})

const lender = mongoose.model('lender', userSchema);
module.exports = lender;
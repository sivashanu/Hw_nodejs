const mongoose = require('mongoose');


const menuSchema = new mongoose.Schema({
    dish :{
        type:String,
        required : true
    },
    category :{
        type:String,
        required :true,
        default : "Food"
    },
    Quantity :{
        type : String,
        enum:['Small','Medium','Large'],
        required : true
    },
    Price:{
        type:Number,
        required:true
    }
})

//create person model
const MenuItem = mongoose.model('MenuItem',menuSchema);
module.exports = MenuItem;
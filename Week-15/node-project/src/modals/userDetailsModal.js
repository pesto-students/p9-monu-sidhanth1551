const mongoose = require("mongoose");

const userDetails = mongoose.Schema({
    username:{
        type:String,
        required: [true, "please add your username"]
    },
    email:{
        type:String,
        required:[true, "please add your email address"]
    },
    password:{
        type:String,
        required:[true, "please enter password"]
    }
},{
    timestamps:true,
})

module.exports =mongoose.model("UserDetails",userDetails);
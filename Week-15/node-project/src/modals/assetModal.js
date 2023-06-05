const mongoose = require('mongoose');

const assetModal = mongoose.Schema({
    userId:{
        type:String,
        required:[true,"userId required"]
    },
    name:{
        type:String,
        required:[true,"please enter asset name"]
    },
    quantity:{
        type:String,
        required:[true,"please enter quantity"]
    },
    currentValue:{
        type:String,
        required:[true,"please enter current value"]
    },
    totalValue:{
        type:String,
    },


})

module.exports = mongoose.model("assestModal",assetModal);
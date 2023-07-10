const mongoose = require('mongoose');

const euqityModal=mongoose.Schema({
    userId:{
        type:String,
        required:[true,"userId required"]
    },
    companyName:{
        type:String,
        required:[true,"please enter company name"]
    },
    shares:{
        type:String,
        required:[true,"please enter no.of shares"]
    },
    purchaseValue:{
        type:String,
        required:[true,"please enter purchase value"]
    },
    currentValue:{
        type:String,
        required:[true,"please enter current value"]
    },
    totalValue:{
        type:String,
    },

})

module.exports = mongoose.model("equityModal",euqityModal)
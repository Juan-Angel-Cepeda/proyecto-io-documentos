const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _author:{
        type:mongoose.Schema.Objectid,
        refPath:'institutionModel'
    },
    institutionModel:{
        type:String,
        enum:['Institution','Person']
    }
})
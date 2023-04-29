const mongoose = require('mongoose');
//Schema
const schema = mongoose.Schema({
    _name:String,
    _place:{
        type:mongoose.Schema.ObjectId,
        ref:'Places'
    },
    _description:String
});

//class

class Institution{
    constructor(name,place,description){
        this._name = name;
        this._place = place;
        this._description = description
    };

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    
    get place(){
        return this._description;
    }
    set place(place){
        this._place = place;
    }
    get description(){
        return this._description;
    }
    set description(description){
        this._description = description;
    }
}

schema.loadClass(Institution);
module.exports = mongoose.model('Institution',schema);

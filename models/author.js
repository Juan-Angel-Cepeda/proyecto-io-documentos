const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _author:{
        type:mongoose.Schema.ObjectId,
        refPath:'_authorModel'
    },
    _authorModel:{
        type:String,
        enum:['Institution','Person'],
        default:'Person'
    }
})

class Author{
    constructor(author){
        this._author = author;
    }
    get author(){
        return this._author;
    }
    set author(value){
        this._author = value;
    }
}

schema.loadClass(Author);
module.exports = mongoose.model('Author',schema);
const mongoose = require('mongoose');
//Schema
const schema = mongoose.Schema({
    _title:String,
    _date:Date,
    _description:String,
    _format:{
        type:String,
        enum:['LETTER','NEWSPAPER','PRINTED PUBLISH','CARD','OBJECT','BOOK'],
        default:'LETTER'
    },
    _place:{
        type:mongoose.Schema.Objectid,
        ref: 'Place'
    },
    _author:{
        type:mongoose.Schema.Objectid,
        ref: 'Author'
    },
    _sender:{
        type:mongoose.Schema.Objectid,
        ref: 'Person'
    },
    _reciver:{
        type:mongoose.Schema.Objectid,
        ref: 'Person'
    },
    _context: String,
    _photos:[{
        type:String
    }],
    _colection: String,
    _ubi: String,
    _relations:[{
        type:mongoose.Schema.Objectid,
        ref:'Document'
    }]
});

class Document{
    constructor(
        title,
        date,
        description,
        format,
        map,
        author,
        sender,
        reciver,
        context,
        photos,
        colection,
        ubi,
        relations
    ){
        this._title = title,
        this._date = date,
        this._description = description,
        this._fomat = format,
        this._map = map,
        this._author = author,
        this._sender = sender,
        this._reciver = reciver,
        this._context = context,
        this._photos =  photos,
        this._colection = colection,
        this._ubi = ubi,
        this._relations = relations
    };
    // getters and setter methods
}

schema.loadClass(Document);
module.exports = mongoose.model('Document',schema);
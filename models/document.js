const mongoose = require('mongoose');
//Schema
const schema = mongoose.Schema({
    _title:String,
    _date:Date,
    _description:String,
    _fomat:String,
    _map:{
        type:mongoose.Schema.Objectid,
        ref: 'Place'
    },
    _author: String, //Entity
    _sender: String, //person
    _reciver: String, //person
    _context: String,
    _photos: String,
    _colection: String,
    _ubi: String,
    _relations:String
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
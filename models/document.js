const mongoose = require('mongoose');
//Schema
const schema = mongoose.Schema({
    _title:String,
    _date:Date,
    _description:String,
    _format:{
        type:String,
        enum:['LETTER','NEWSPAPER','PRINTED PUBLISH','CARD','OBJECT','BOOK','PICTURE'],
        default:'LETTER'
    },
    _place:{
        type:mongoose.Schema.ObjectId,
        ref:'Place'
    },
    _author:{
        type:mongoose.Schema.ObjectId,
        ref:'Author'
    },
    _sender:{
        type:mongoose.Schema.ObjectId,
        ref:'Person'
    },
    _reciver:{
        type:mongoose.Schema.ObjectId,
        ref:'Person'
    },
    _context: String,
    _photos:[{
        type:String
    }],
    _colection: String,
    _ubi: String,
    _relations:[{
        type:mongoose.Schema.ObjectId,
        ref:'Document'
    }]
});

class Document{
    constructor(
        title,
        date,
        description,
        format,
        place,
        author,
        sender,
        reciver,
        context,
        photos,
        colection,
        ubi,
        relations
    ){
        this._title = title;
        this._date = date;
        this._description = description;
        this._fomat = format;
        this._place = place;
        this._author = author;
        this._sender = sender;
        this._reciver = reciver;
        this._context = context;
        this._photos =  photos;
        this._colection = colection;
        this._ubi = ubi;
        this._relations = relations;
    };
    
    get title(){
        return this._title;
    }
    set title(v){
        this._title = v;
    }
    //date
    get date(){
        return this._date;
    }
    set date(v){
        this._date = v;
    }
    //description
    get description(){
        return this._description;
    }
    set description(v){
        this._description = v;
    }
    //format
    get format(){
        return this._format;
    }
    set format(v){
        this._format = v;
    }
    //map
    get place(){
        return this._place;
    }
    set place(v){
        this._place = v;
    }
    //author
    get author(){
        return this._author;
    }
    set author(v){
        this._author = v;
    }
    //sender
    get sender(){
        return this._sender;
    }
    set sender(v){
        this._sender = v;
    }
    //reciver
    get reciver(){
        return this._reciver;
    }
    set reciver(v){
        this._reciver = v;
    }
    //context
    get context(){
        return this._context;
    }
    set context(v){
        this._context = v;
    }
    //photos
    get photos(){
        return this._photos;
    }
    set photos(v){
        this._photos = v;
    }
    //colection
    get colection(){
        return this._colection;
    }
    set colection(v){
        this._colection = v;
    }
    //ubi
    get ubi(){
        return this._ubi;
    }
    set ubi(v){
        this._ubi = v;
    }

    //relations
    get relations(){
        return this._relations;
    }
    set relations(v){
        this._relations = v;
    }
}

schema.loadClass(Document);
module.exports = mongoose.model('Document',schema);
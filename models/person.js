const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name:String,
    _lastName:String,
    _date_of_birth:Date,
    _date_of_death:Date,
    _father:{
        type:mongoose.Schema.ObjectId,
        ref:'Person'
    },
    _mother:{
        type:mongoose.Schema.ObjectId,
        ref:'Person'
    },
    _children:[{
        type:mongoose.Schema.ObjectId,
        ref:'Person'
    }],
    _birth_place:{
        type:mongoose.Schema.ObjectId,
        ref:'Place'
    },
    _death_place:{
        type:mongoose.Schema.ObjectId,
        ref:'Place'
    }
});

class Person{
    constructor(
        name,
        lastName,
        date_of_birth,
        date_of_death,
        father,
        mother,
        children,
        birth_place,
        death_place
    ){
        this._name = name;
        this._lastName = lastName;
        this._date_of_birth = date_of_birth;
        this._date_of_death = date_of_death;
        this._father = father;
        this._mother = mother;
        this._children = children;
        this._birth_place = birth_place;
        this._death_place = death_place
    }
    
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value
    }
    
    get lastName(){
        return this._lastName;
    }
    
    set lastName(value){
        this._lastName = value
    }
    
    get date_of_birth(){
        return this._date_of_birth;
    }
    set date_of_birth(value){
        this._date_of_birth = value;
    }
    
    get date_of_death(){
        return this._date_of_death;
    }
    set date_of_death(value){
        this._date_of_death = value
    }

    get father(){
        return this._father;
    }
    set father(value){
        this._father = value;
    }

    get mother(){
        return this._mother;
    }
    set mother(value){
        this._mother = value;
    }

    get children(){
        return this._children;
    }
    set children(value){
        this._children = value;
    }

    get birth_place(){
        return this._birth_place;
    }
    set birth_place(value){
        this._birth_place = value;
    }

    get death_place(){
        return this._death_place;
    }
    set death_place(value){
        this._death_place = value;
    }
}

schema.loadClass(Person);
module.exports = mongoose.model('Person',schema);
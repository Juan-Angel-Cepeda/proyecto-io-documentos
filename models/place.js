const mongoose = require('mongoose');
//Schema
const schema = mongoose.Schema({
    _name:String,
    _description:String,
    _country:String,
    _city:String,
    _street:String,
    _number:String,
    _interior:String,
    _zip:String,
    _latitud:Number,
    _longitud:Number
});

//class

class Place{
    constructor(
        name,description,country,city,street,number,interior,zip,latitud,longitud
        ){
        this._name = name;
        this._description = description;
        this._country = country;
        this._city = city;
        this._street = street;
        this._number = number;
        this._interior = interior;
        this._zip = zip;
        this._latitud = latitud;
        this._longitud = longitud;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get description(){
        return this._description;
    }
    set description(description){
        this._description = description;
    }
    get country(){
        return this._country;
    }
    set country(country){
        this._country = country;
    }
    get city(){
        return this._city;
    }
    set city(city){
        this._city = city;
    }
    get street(){
        return this._street;
    }
    set street(street){
        this._street = street
    }
    get number(){
        return this._number;
    }
    set number(number){
        this._number = number;
    }
    get interior(){
        return this._interior;
    }
    set interior(interior){
        this._interior = interior;
    }
    get zip(){
        return this._zip;
    }
    set zip(zip){
        this._zip = zip;
    }
    get latitud(){
        return this._latitud;
    }
    set latitud(latitud){
        this._latitud = latitud;
    }
    get longitud(){
        return this._longitud;
    }
    set longitud(longitud){
        this._longitud = longitud;
    }
};

schema.loadClass(Place);
module.exports = mongoose.model('Place',schema);

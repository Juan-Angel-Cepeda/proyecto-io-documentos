const express = require('express');
const Place = require('../models/place');

function list(req, res, next){
    Place.find().then(objs => res.status(200).json({
        message:"Places List",
        obj:objs
    })).catch(ex => res.status(500).json({
        message: "Error no info",
        obj:ex
    }));
};

function index(req, res, next){
    const id = req.params.id;
    Place.findOne({"_id":id}).then(obj => res.status(200).json({
        message: `Place with ID ${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:"Error no info",
        obj: ex
    }));
};

function create(req,res,next){
    const name = req.body.name
    const description = req.body.description
    const country = req.body.country
    const city = req.body.description
    const street = req.body.street
    const number = req.body.number
    const interior = req.body.interior
    const zip = req.body.zip
    const latitud = req.body.latitud
    const longitud = req.body.longitud

    let place = new Place({
        name:name,
        description:description,
        country:country,
        city:city,
        street:street,
        number:number,
        interionr:interior,
        zip:zip,
        latitud:latitud,
        longitud:longitud
    })
    place.save().then(obj=>res.status(200).json({
        message:"Place created",
        obj:obj
    })).catch(ex => res.status(500).json({
        message:"Place not created",
        err:ex
    }))

}

function replace(req,res,next){

}

function update(req,res,next){

}

function destroy(req,res,next){

}

function getMapsCoordenates(req,res,next){

}

module.exports = {list,index,create,replace,update,destroy,getMapsCoordenates};
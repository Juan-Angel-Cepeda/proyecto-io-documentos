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

function update(req,res,next){
    const id = req.params.id;
    let name = req.body.name ? req.body.name:"";
    let description = req.body.name ? req.body.name:"";
    let country = req.body.country ? req.body.country:"";
    let city = req.body.city ? req.body.city:"";
    let street = req.body.street ? req.body.street:"";
    let number = req.body.number ? req.body.number:"";
    let interior = req.body.interior ? req.body.interior:"";
    let zip = req.body.zip ? req.body.zip:"";
    let latitud = req.body.latitud ? req.body.latitud:"";
    let longitud = req.body.longitud ? req.body.longitud:"";

    let place = new Object();

    if(name){
        place._name = name;
    }
    if(description){
        place._description = description;
    }
    if(country){
        place._country = country;
    }
    if(city){
        place._city = city;
    }
    if(street){
        place._street = street;
    }
    if(number){
        place._number = number;
    }
    if(interior){
        place._interior = interior;
    }
    if(zip){
        place._zip = zip;
    }
    if(latitud){
        place._latitud = latitud;
    }
    if(longitud){
        place._longitud = longitud;
    }

    Place.findOneAndUpdate({"_id": id}, place)
            .then(obj => res.status(200).json({
                message: "Place updated",
                obj:obj
            })).catch(ex => res.status(500).json({
                message:"Place not updated",
                err:ex
            }));
}

function destroy(req,res,next){
    const id = req.params.id;
    Place.findOneAndRemove({"_id": id})
            .then(obj => res.status(200).json({
                message: "Place deleted",
                obj:obj
            })).catch(ex => res.status(500).json({
                message:"Place not deleted",
                err:ex
            }));
}

function replace(req,res,next){
    const id = req.params.id;
    let name = req.body.name ? req.body.name:"";
    let description = req.body.name ? req.body.name:"";
    let country = req.body.country ? req.body.country:"";
    let city = req.body.city ? req.body.city:"";
    let street = req.body.street ? req.body.street:"";
    let number = req.body.number ? req.body.number:"";
    let interior = req.body.interior ? req.body.interior:"";
    let zip = req.body.zip ? req.body.zip:"";
    let latitud = req.body.latitud ? req.body.latitud:"";
    let longitud = req.body.longitud ? req.body.longitud:"";

    let place = new Place({
        _name:name,
        _description:description,
        _country:country,
        _city:city,
        _street:street,
        _number:number,
        _interior:interior,
        _zip:zip,
        _latitud:latitud,
        _longitud:longitud
    });

    place.findOneAndUpdate({"_id": id}, institution, {new: true})
            .then(obj => {res.status(200).json({
                message: "Place updated",
                obj:obj
            })}).catch(ex => res.status(500).json({
                message:"Place not updated",
                err:ex
            }));
}

function update(req,res,next){
    const id = req.params.id;
    let name = req.body.name ? req.body.name:"";
    let description = req.body.name ? req.body.name:"";
    let country = req.body.country ? req.body.country:"";
    let city = req.body.city ? req.body.city:"";
    let street = req.body.street ? req.body.street:"";
    let number = req.body.number ? req.body.number:"";
    let interior = req.body.interior ? req.body.interior:"";
    let zip = req.body.zip ? req.body.zip:"";
    let latitud = req.body.latitud ? req.body.latitud:"";
    let longitud = req.body.longitud ? req.body.longitud:"";

    let place = new Object();

    if(name){
        place._name = name;
    }
    if(description){
        place._description = description;
    }
    if(country){
        place._country = country;
    }
    if(city){
        place._city = city;
    }
    if(street){
        place._street = street;
    }
    if(number){
        place._number = number;
    }
    if(interior){
        place._interior = interior;
    }
    if(zip){
        place._zip = zip;
    }
    if(latitud){
        place._latitud = latitud;
    }
    if(longitud){
        place._longitud = longitud;
    }

    Place.findOneAndUpdate({"_id": id}, place)
            .then(obj => res.status(200).json({
                message: "Place updated",
                obj:obj
            })).catch(ex => res.status(500).json({
                message:"Place not updated",
                err:ex
            }));
}

function destroy(req,res,next){
    const id = req.params.id;
    Place.findOneAndRemove({"_id": id})
            .then(obj => res.status(200).json({
                message: "Place deleted",
                obj:obj
            })).catch(ex => res.status(500).json({
                message:"Place not deleted",
                err:ex
            }));
}

module.exports = {list,index,create,replace,update,destroy};
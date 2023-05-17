const express = require('express');
const Institution = require('../models/institution');
const Place = require('../models/place');


function list(req, res, next){
    Institution.find().populate("_place").then(objs => res.status(200).json({
        message:"Institutions List",
        obj:objs
    })).catch(ex => res.status(500).json({
        message: "Error no info",
        obj:ex
    }));
};

function index(req, res, next){
    const id = req.params.id;
    Institution.findOne({"_id":id}).populate("_place").then(obj => res.status(200).json({
        message: `Institution with ID ${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:"Error no info",
        obj: ex
    }));
};

async function create(req,res,next){
    const name = req.body.name;
    const placeId = req.body.placeId;
    const description = req.body.description;
    
    let place = await Place.findOne({"_id":placeId});

    let institution = new Institution({
        name:name,
        place:place,
        description:description
    });

    institution.save().then(obj => res.status(200).json({
        message: "Instiution created",
        obj:obj
    })).catch(ex => res.status(500).json({
        message:"Institution not created",
        err:ex
    }))

}

async function replace(req,res,next){
    const id = req.params.id;
    let name = req.body.name ? req.body.name:"";
    let description = req.body.name ? req.body.name:"";
    let placeId = req.body.placeId ? req.body.placeId:"";
    let place = await Place.findOne({"_id":placeId});

    let institution = new Institution({
        _name:name,
        _description:description,
        _place:place
    })

    Institution.findOneAndUpdate({"_id":id},institution,{new:true})
               .then(obj => {res.status(200).json({
                message:"Institution update",
                obj:obj
               })}).catch(ex => res.status(500).json({
                message: "Institution not created",
                err: ex
               }));
    
}

async function update(req,res,next){
    
    const id = req.params.id;
    let name = req.body.name ? req.body.name:"";
    let description = req.body.name ? req.body.name:"";
    let placeId = req.body.placeId ? req.body.placeId:"";
    let place = await Place.findOne({"_id":placeId});

    let institution = new Object();

    if(name){
        institution._name = name;
    }
    if(description){
        institution._description = description;
    }
    if(place){
        institution._place = place;
    }

    Institution.findOneAndUpdate({"_id":id},institution)
               .then(obj => res.status(200).json({
                message: "Institution updated",
                obj:obj
               })).catch(ex => res.status(500).json({
                message:"Institution not update",
                err:ex
               }));

}

function destroy(req,res,next){
    const id = req.params.id;
    Institution.findByIdAndRemove({"_id":id}).then(obj=>res.status(200).json({
        message:"Institution Deleted",
        obj:obj
    })).catch(ex => res.status(500).json({
        message:"Institution not deleted",
        err : ex
    }))

}

module.exports = {list,index,create,replace,update,destroy};
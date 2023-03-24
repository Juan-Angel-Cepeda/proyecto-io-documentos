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

}

function replace(req,res,next){

}

function update(req,res,next){

}

function destroy(req,res,next){

}

module.exports = {list,index,create,replace,update,destroy};
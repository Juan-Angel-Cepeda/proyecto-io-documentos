const express = require('express');
const Institution = require('../models/institution');

function list(req, res, next){
    Institution.find().then(objs => res.status(200).json({
        message:"Institutions List",
        obj:objs
    })).catch(ex => res.status(500).json({
        message: "Error no info",
        obj:ex
    }));
};

function index(req, res, next){
    const id = req.params.id;
    Institution.findOne({"_id":id}).then(obj => res.status(200).json({
        message: `Institution with ID ${id}`,
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
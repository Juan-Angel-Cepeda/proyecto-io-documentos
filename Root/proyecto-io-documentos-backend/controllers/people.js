const express = require('express');
const Place = require('../models/place');
const Person = require('../models/person');

function list(req, res, next){
    Person.find().then(objs => res.status(200).json({
        message:"Person List",
        obj:objs
    })).catch(ex => res.status(500).json({
        message: "Error no info",
        obj:ex
    }));
};

function index(req, res, next){
    const id = req.params.id;
    Person.findOne({"_id":id}).then(obj => res.status(200).json({
        message: `Place with ID ${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:"Error no info",
        obj: ex
    }));
};

async function create(req,res,next){
    
    const name = req.body.name;
    const lastName = req.body.lastName;
    const date_of_birth = req.body.date_of_birth;
    const date_of_death = req.body.date_of_death;
    
    const fatherId = req.body.fatherId;
    const motherId = req.body.motherId;
    const childrenId = req.body.childrenId;
    
    const birth_place_id = req.body.birth_place_id;
    const death_place_id = req.body.death_place_id;

    let father = await Person.findOne({"_id":fatherId});
    let mother = await Person.findOne({"_id":motherId});
    let children = addChildren(childrenId);

    let birth_place = await Place.findOne({"_id":birth_place_id});
    let death_place = await Place.findOne({"_id":death_place_id});

    let person = new Person({
        name:name,
        lastName:lastName,
        date_of_birth:date_of_birth,
        date_of_birth:date_of_death,
        father:father,
        mother:mother,
        children:children,
        birth_place:birth_place,
        death_place:death_place,
    })

    person.save().then(obj => res.status(200).json({
        message:"Person created",
        obj:obj
    })).catch(ex => res.status(500).json({
        message:"document not created",
        err:ex
    }))

}

function replace(req,res,next){

}

function update(req,res,next){

}

function destroy(req,res,next){

}

function addChildren(req,res,next){

}


module.exports = {list,index,create,replace,update,destroy,addChildren};
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
    const id = req.params.id;
    let name = req.body.name ? req.body.name:"";
    let lastName = req.body.lastName ? req.body.lastName:"";
    let date_of_birth = req.body.date_of_birth ? req.body.date_of_birth:"";
    let date_of_death = req.body.date_of_death ? req.body.date_of_death:"";
    let father = req.body.father ? req.body.father:"";
    let mother = req.body.mother ? req.body.mother:"";
    let children = req.body.children ? req.body.children:"";
    let birth_place = req.body.birth_place ? req.body.birth_place:"";
    let death_place = req.body.death_place ? req.body.death_place:"";

    let person = new Person({
        _name:name,
        _lastName:lastName,
        _date_of_birth:date_of_birth,
        _date_of_death:date_of_death,
        _father:father,
        _mother:mother,
        _children:children,
        _birth_place:birth_place,
        _death_place:death_place,
    })

    Place.findOneAndUpdate({"_id":id},place)
            .then(obj => res.status(200).json({
                message:"Place updated",
                obj:obj
            }).catch(ex => res.status(500).json({
                message:"Error no info",
                obj:ex
            })));
}

function update(req,res,next){

    const id = req.params.id;
    let name = req.body.name ? req.body.name:"";
    let lastName = req.body.lastName ? req.body.lastName:"";
    let date_of_birth = req.body.date_of_birth ? req.body.date_of_birth:"";
    let date_of_death = req.body.date_of_death ? req.body.date_of_death:"";
    let father = req.body.father ? req.body.father:"";
    let mother = req.body.mother ? req.body.mother:"";
    let children = req.body.children ? req.body.children:"";
    let birth_place = req.body.birth_place ? req.body.birth_place:"";
    let death_place = req.body.death_place ? req.body.death_place:"";

    let person = new Object();

    if(name){
        person._name = name;
    }
    if(lastName){
        person._lastName = lastName;
    }
    if(date_of_birth){
        person._date_of_birth = date_of_birth;
    }
    if(date_of_death){
        person._date_of_death = date_of_death;
    }
    if(father){
        person._father = father;
    }
    if(mother){
        person._mother = mother;
    }
    if(children){
        person._children = children;
    }
    if(birth_place){
        person._birth_place = birth_place;
    }
    if(death_place){
        person._death_place = death_place;
    }

    Place.findOneAndUpdate({"_id": id}, person)
            .then(obj => res.status(200).json({
                message:"Place updated",
                obj:obj
            })).catch(ex => res.status(500).json({
                message:"Error no info",
                obj:ex
            }));
}


function destroy(req,res,next){

}

function addChildren(req,res,next){

}


module.exports = {list,index,create,replace,update,destroy,addChildren};
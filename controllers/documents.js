const express = require('express');
const  {json} = require('express');
const Document = require('../models/document');
const Author = require('../models/author');
const Person = require('../models/person');
const Place = require('../models/place');

function list(req, res, next){
    Document.find().populate("_place _author _sender _reciver _relations").then(objs => res.status(200).json({
        message:"Document List",
        obj:objs
    })).catch(ex => res.status(500).json({
        message: "Error no info",
        obj:ex
    }));
};

function index(req, res, next){
    const id = req.params.id;
    Document.findOne({"_id":id}).populate("_place _author _sender _reciver _relations").then(obj => res.status(200).json({
        message: `Document with ID ${id}`,
        obj:obj
    })).catch(ex => res.status(500).json({
        message:"Error no info",
        obj: ex
    }));
};

async function create(req,res,next){

    const title = req.body.title;
    const date = req.body.date;
    const description = req.body.description;
    const format = req.body.format;
    const placeId = req.body.placeId;
    const authorId = req.body.authorId;
    const senderId = req.body.senderId;
    const reciverId = req.body.reciverId;
    const context = req.body.context;
    const photos = req.body.photos;
    const colection = req.body.colection;
    const ubi = req.body.ubi;
    const relations = req.body.relations;
    
    let place = await Place.findOne({"_id":placeId});
    let author = await Person.findOne({"_id":authorId});
    let sender = await Person.findOne({"_id":senderId});
    let reciver = await Person.findOne({"_id":reciverId});
    

    let document = new Document({
        title:title,
        date:date,
        description:description,
        format:format,
        place:place,
        author:author,
        sender:sender,
        reciver:reciver,
        context:context,
        photos:photos,
        colection:colection,
        ubi:ubi,
        relations:relations
    });
    
    document.save().then(obj => res.status(200).json({
        message: "document created",
        obj:obj
    })).catch(ex => res.status(500).json({
        message:"document not created",
        err:ex
    }))
}

async function replace(req,res,next){

    const id = req.params.id;
    let title = req.body.title ? req.body.title: "";
    let date = req.body.date ? req.body.date: ""
    let description = req.body.description ? req.body.description: ""
    let format = req.body.format ? req.body.format: ""
    let placeId = req.body.map ? req.body.placeId: ""
    let authorId = req.body.author ? req.body.authorId: ""
    let emisorId = req.body.emisor ? req.body.emisorId: ""
    let receptorId = req.body.receptor ? req.body.receptorId: ""
    let context = req.body.context ? req.body.context: ""
    let photosPath = req.body.phothoPath ? req.body.phothoPath: ""
    let colection = req.body.colection ? req.body.colection: ""
    let ubi = req.body.ubi ? req.body.ubi: ""
    let relationId = req.body.relation ? req.body.relationId: ""

    let photos = req.body.photopath;
    let relations = addRelations(id,relationId);

    let map = await Place.findOne({"_id":placeId})
    let author = await Author.findOne({"_id":authorId});
    let emisor = await Person.findOne({"_id":emisorId});
    let receptor = await Person.findOne({"id":receptorId});

    let document = new Document({
        _title:title,
        _date:date,
        _description:description,
        _format:format,
        _map:map,
        _author:author,
        _emisor:emisor,
        _receptor:receptor,
        _context:context,
        _phothos:photos,
        _colection:colection,
        _ubi:ubi,
        _relations:relations
    });

    Document.findOneAndUpdate({"_id":id},document,{new:true})
            .then(obj => {res.status(200).json({
                message: "Document updates",
                obj:obj
            })}).catch(ex => res.status(500).json({
                message: "Docuemnt not updated",
                err: ex
            }))
}

async function update(req,res,next){

    const id = req.params.id;
    let title = req.params.title ? req.body.title: "";
    let date = req.params.date ? req.body.date: ""
    let description = req.params.description ? req.body.description: ""
    let format = req.params.format ? req.body.format: ""
    let placeId = req.params.map ? req.body.placeId: ""
    let authorId = req.params.author ? req.body.authorId: ""
    let emisorId = req.params.emisor ? req.body.emisorId: ""
    let receptorId = req.params.receptor ? req.body.receptorId: ""
    let context = req.params.context ? req.body.context: ""
    let photos = req.params.phothoPath ? req.body.phothoPath: ""
    let colection = req.params.colection ? req.body.colection: ""
    let ubi = req.params.ubi ? req.body.ubi: ""
    let relationId = req.params.relation ? req.body.relationId: ""

    let map = await Place.findOne({"_id":placeId})
    let author = await Author.findOne({"_id":authorId});
    let emisor = await Person.findOne({"_id":emisorId});
    let receptor = await Person.findOne({"id":receptorId});
    let relation = await Document.findOne({"id":relationId});

    let document = new Object();

    if(title){
        document._title = title;
    }
    if(date){
        document._date = date;
    }
    if(description){
        document._description = description;
    }
    if(format){
        document._format = format;
    }
    if(map){
        document._map = map;
    }
    if(author){
        document._author = author;
    }
    if(emisor){
        document._emisor = emisor;
    }
    if(receptor){
        document._receptor = receptor;
    }
    if(context){
        document._context = context;
    }
    if(photos){
        document._phothos.push(photos);
    }
    if(colection){
        document._colection = colection;
    }
    if(ubi){
        document._ubi = ubi
    }
    if(relation){
        document._relations.push(relation)
    }

    Document.findOneAndUpdate({"_id":id},document)
            .then(obj => res.status(200).json({
                message:"Document updated",
                obj:obj
            })).catch(ex => res.status(500).json({
                message:"Document not updated",
                err:ex
            }))
}

function destroy(req,res,next){
    const id = req.params.id;
    Document.findByIdAndRemove({"_id":id}).then(obj=>res.status(200).json({
        message: "Document deleted",
        obj:obj
    })).catch(ex => res.status(500).json({
        message: "Document not deleted",
        err:ex
    }))

}

module.exports = {list,index,create,replace,update,destroy};
const express = require('express');
const  {json} = require('express');
const Document = require('../models/document');
const Place = require('../models/place');
const Author = require('../models/author');
const Person = require('../models/person');
const Place = require('../models/place');

function list(req, res, next){
    Document.find().then(objs => res.status(200).json({
        message:"Document List",
        obj:objs
    })).catch(ex => res.status(500).json({
        message: "Error no info",
        obj:ex
    }));
};

function index(req, res, next){
    const id = req.params.id;
    Document.findOne({"_id":id}).then(obj => res.status(200).json({
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
    const emisorId = req.body.emisorId;
    const receptorId = req.body.receptorId;
    const photos = addPhotos(req.body.phothoPath);
    const context = req.body.context;
    const colection = req.body.colection;
    const ubi = req.body.ubi;
    const relation = addRelations(req.body.relationId);

    
    let map = await Place.findOne({"_id":placeId});
    let author = await Author.findOne({"_id":authorId});
    let emisor = await Person.findOne({"_id":emisorId});
    let receptor = await Person.findOne({"id":receptorId});

    let document = new Document({
        title:title,
        date:date,
        description:description,
        format:format,
        map:map,
        author:author,
        emisor:emisor,
        receptor:receptor,
        context:context,
        phothos:photos,
        colection:colection,
        ubi:ubi,
        relations:relation
    });
    
    document.save().then(obj = res.status(200).json({
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

    let photos = addPhotos(photosPath);
    let relations = addRelations(relationId);

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
                message: "Docuemnt not updated"
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
}

function destroy(req,res,next){
    const id = req.params.id;
    Document.findByIdAndRemove({"_id":id}).then(obj=>res.status(200).json({
        message: "Document deleted",
        obj:obj
    })).catch(ex => res.status(500).json({
        message: "Document not deleted",
        obj:ex
    }))

}
function addPhotos(req,res,next){
    const id = req.body.id;

    return photos
}
function deletePhotos(req,res,next){
    return photos
}
function deleteRelations(req,res,next){
    return relations
}

function addRelations(req,res,next){
    return relations

}
module.exports = {list,index,create,replace,update,destroy,deletePhotos,deleteRelations,addRelations};
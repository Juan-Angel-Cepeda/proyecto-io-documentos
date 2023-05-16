const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

async function create(req, res, next) {
    
    let name = req.body.name;
    let lastname = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;

    const salt = await bcrypt.genSalt(10);

    const passwordHash = await bcrypt.hash(password, salt);

    let user = new User({
        name: name,
        lastname: lastname,
        email: email,
        password: passwordHash,
        salt: salt
    });

    user.save().then(obj => res.status(200).json({
        message: "Usuario creado correctamente",
        obj: obj
        })).catch(ex => res.status(500).json({
            message: "No se pudo almacenar el usuario",
            obj: ex
        }));
}

module.exports = { 
    create
};
const express = require('express');
const router = express.Router();
const docucontroller = require('../controllers/documents');
const institutioncontroller = require('../controllers/institutions');

//RUTAS DE ADMINISTRACIÓN DE DOCUMENTOS
router.post('/',docucontroller.create);
router.put('/:id',docucontroller.replace);
router.patch('/:id',docucontroller.update);
router.delete('/:id',docucontroller.destroy);

//RUTAS DE ADMINISTRACIÓN DE INSTITUCIONES

router.post('/admin',institutioncontroller.create);
router.put('/admin/:id',institutioncontroller.replace);
router.patch('/admin/:id',institutioncontroller.update);
router.delete('/admin/:id',institutioncontroller.destroy);
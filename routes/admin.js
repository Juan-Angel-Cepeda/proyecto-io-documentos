const express = require('express');
const router = express.Router();
const docucontroller = require('../controllers/documents');
const institutioncontroller = require('../controllers/institutions');
const placecontroller = require('../controllers/places');
const personcontroller = require('../controllers/people');

//RUTAS DE ADMINISTRACIÓN DE DOCUMENTOS
router.post('/documents',docucontroller.create);
router.put('/documents/:id',docucontroller.replace);
router.patch('/documents/:id',docucontroller.update);
router.delete('/documents/:id',docucontroller.destroy);

//RUTAS DE ADMINISTRACIÓN DE INSTITUCIONES

router.post('/institutions',institutioncontroller.create);
router.put('/institutions/:id',institutioncontroller.replace);
router.patch('/institutions/:id',institutioncontroller.update);
router.delete('/institutions/:id',institutioncontroller.destroy);

//RUTAS DE ADMINISTRACIÓN DE PLACES

router.post('/places',placecontroller.create);
router.put('/places/:id',placecontroller.replace);
router.patch('/places/:id',placecontroller.update);
router.delete('/places/:id',placecontroller.destroy);

//RUTAS DE ADMINISTRACIÓN DE PLACES
router.post('/people',personcontroller.create);
router.put('/people/:id',personcontroller.replace);
router.patch('/people/:id',personcontroller.update);
router.delete('/people/:id',personcontroller.destroy);

module.exports = router;
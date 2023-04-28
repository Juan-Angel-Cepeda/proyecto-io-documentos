const express = require('express');
const router = express.Router();
const docucontroller = require('../controllers/documents');
const institutioncontroller = require('../controllers/institutions');
const placecontroller = require('../controllers/places');

//RUTAS DE ADMINISTRACIÓN DE DOCUMENTOS
router.post('/documents',docucontroller.create);
router.put('/documents/:id',docucontroller.replace);
router.patch('/documents/:id',docucontroller.update);
router.delete('/documents/:id',docucontroller.destroy);

//RUTAS DE ADMINISTRACIÓN DE INSTITUCIONES

router.post('/institution',institutioncontroller.create);
router.put('/institution/:id',institutioncontroller.replace);
router.patch('/institution/:id',institutioncontroller.update);
router.delete('/institution/:id',institutioncontroller.destroy);

//RUTAS DE ADMINISTRACIÓN DE PLACES

router.post('/places',placecontroller.create);
router.put('/places/:id',placecontroller.replace);
router.patch('/places/:id',placecontroller.update);
router.delete('/places/:id',placecontroller.destroy);

module.exports = router;
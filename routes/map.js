const express = require('express');
const router = express.Router();
const placesController = require('../controllers/places');

router.get('/',placesController.getMapsCoordenates);
module.exports = router;
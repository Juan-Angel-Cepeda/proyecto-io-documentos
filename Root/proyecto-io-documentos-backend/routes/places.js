const express = require('express');
const router = express.Router();
const controller = require('../controllers/places');

//for admin and visitor
router.get('/',controller.list);
router.get('/:id',controller.index);

//just for admin
module.exports = router;




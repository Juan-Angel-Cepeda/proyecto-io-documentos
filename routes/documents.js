const express = require('express');
const router = express.Router();
const controller = require('../controllers/documents');

//for admin and visitor
router.get('/',controller.list);
router.get('/:id',controller.index);

module.exports = router;




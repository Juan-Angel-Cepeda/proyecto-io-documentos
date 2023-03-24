const express = require('express');
const router = express.Router();
const controller = require('../controllers/institutions');

//for admin and visitor
router.get('/',controller.list);
router.get('/:id',controller.index);

//just for admin
router.post('/admin',controller.create);
router.put('/admin/:id',controller.replace);
router.patch('/admin/:id',controller.update);
router.delete('/admin/:id',controller.destroy);

module.exports = router;




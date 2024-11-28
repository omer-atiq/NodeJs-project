
const express = require('express');
const Client = require('../models/client.model.js');
const router = express.Router();
const {getClients} = require('../controllers/client.controller.js')

router.get('/getAllClients', getClients);



module.exports = router;
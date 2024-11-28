
const express = require('express');
const Client = require('../models/client.model.js');
const router = express.Router();
const {getClients,signupClient,authenticateClient} = require('../controllers/client.controller.js');

router.get('/getAllClients', getClients);
router.post('/signup', signupClient);
router.post('/authenticate', authenticateClient);

module.exports = router;
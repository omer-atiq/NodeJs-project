
const express = require('express');
const Client = require('../models/client.model.js');
const router = express.Router();
const {getClients,signupClient,authenticateClient,forgotpassswordClient,registerMembership} = require('../controllers/client.controller.js');

router.get('/getAllClients', getClients);
router.post('/signup', signupClient);
router.post('/authenticate', authenticateClient);
router.post('/forgotpassword', forgotpassswordClient);
router.post('/membership/register', registerMembership);


module.exports = router;
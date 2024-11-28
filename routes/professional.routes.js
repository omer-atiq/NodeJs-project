const express = require('express');
const Professional = require('../models/professional.model.js');
const router = express.Router();
const {getProfessionals,signupProfessional,authenticateProfessional} = require('../controllers/professional.controller.js');

router.get('/getAllProfessionals', getProfessionals);
router.post('/signup', signupProfessional);
router.post('/authenticate', authenticateProfessional);

module.exports = router;
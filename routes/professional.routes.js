const express = require('express');
const Professional = require('../models/professional.model.js');
const router = express.Router();
const {getProfessionals,signupProfessional,authenticateProfessional,forgotpassswordProfessional,registerMembership} = require('../controllers/professional.controller.js');

router.get('/getAllProfessionals', getProfessionals);
router.post('/signup', signupProfessional);
router.post('/authenticate', authenticateProfessional);
router.post('/forgotpassword', forgotpassswordProfessional);
router.post('/membership/register', registerMembership);

module.exports = router;
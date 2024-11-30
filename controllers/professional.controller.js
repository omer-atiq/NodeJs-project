const Professional = require('../models/professional.model.js');
const ProfessionalMemberShip = require('../models/professional.membership.model.js');;

const getProfessionals = async (req, res) => {
    try {
        const professional = await Professional.find({});
        res.success(professional)
    
      } catch (error) {
        res.error(error.message,500)
    
      }
}


const signupProfessional = async (req, res) => {
  try {

    const { email } = req.body;

    const professional = await Professional.findOne({ email: email })

    if (professional) {
      throw new Error("Email already exists");
    }
    else {
      const product = await Professional.create(req.body)
      res.success(product)
    }

  }
  catch (error) {
    res.error(error.message, 409)
  
  }
}


const registerMembership = async (req, res) => {
  try {

    const { email } = req.body;

    const professionalMemberShip = await ProfessionalMemberShip.findOne({ email: email })

    if (professionalMemberShip) {
      throw new Error("Membership already exists");
    }
    else {
      const membership = await ProfessionalMemberShip.create(req.body)
      res.success("Member ship is created and it is under review")
    }

  }
  catch (error) {
    res.error(error.message, 409)
  
  }
}



const authenticateProfessional = async (req, res) => {
  try {

    const { email, password } = req.body;
    const professional = await Professional.findOne({ email: email, password: password })

    if (!professional) {
      // Throw an error if no match is found
      throw new Error("Invalid email or password");
    }

    res.success(professional)

  }
  catch (error) {
    res.error(error.message, 401)
  }
}


const forgotpassswordProfessional = async (req, res) => {
  try {

    const { email } = req.body;
    const professional = await Professional.findOne({ email: email })

    if (!client) {
      // Throw an error if no match is found
      throw new Error("Email does not exists");
    }

    res.success('Temporary password sent to your email successfully')

  }
  catch (error) {
    res.error(error.message, 404)
  }
}




module.exports = {
    getProfessionals,
    signupProfessional,
    authenticateProfessional,
    forgotpassswordProfessional,
    registerMembership
}
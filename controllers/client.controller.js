const Client = require('../models/client.model.js')

const getClients = async (req, res) => {
    try {
        const products = await Client.find({});
        res.success(products)
    
      } catch (error) {
        res.error(error.message,500)
    
      }
}


const signupClient = async (req, res) => {
  try {

    const { email } = req.body;

    const client = await Client.findOne({ email: email })

    if (client) {
      throw new Error("Email already exists");
    }
    else {
      const product = await Client.create(req.body)
      res.success(product)
    }

  }
  catch (error) {
    res.error(error.message, 409)
  
  }
}



const authenticateClient = async (req, res) => {
  try {

    const { email, password } = req.body;
    const product = await Client.findOne({ email: email, password: password })

    if (!product) {
      // Throw an error if no match is found
      throw new Error("Invalid email or password");
    }

    res.success(product)

  }
  catch (error) {
    res.error(error.message, 401)
  }
}



module.exports = {
    getClients,
    signupClient,
    authenticateClient
}
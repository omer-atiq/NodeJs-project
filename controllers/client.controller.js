const Client = require('../models/client.model.js')

const getClients = async (req, res) => {
    try {
        const products = await Client.find({});
        res.success(products)
    
      } catch (error) {
        res.error(error.message,500)
    
      }
}

module.exports = {
    getClients
}
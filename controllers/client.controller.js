const Client = require('../models/client.model.js');
const { generateSecurePassword } = require('../common/utils.js');
const ClientMemberShip = require('../models/client.membership.model.js');
var nodemailer = require('nodemailer');



const getClients = async (req, res) => {
    try {
        const clients = await Client.find({});
        res.success(clients)
    
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

const registerMembership = async (req, res) => {
  try {

    const { email } = req.body;

    const clientMembership = await ClientMemberShip.findOne({ email: email })

    if (clientMembership) {
      throw new Error("Membership already exists");
    }
    else {
      const membership = await ClientMemberShip.create(req.body)
      res.success("Member ship is created and it is under review")
    }

  }
  catch (error) {
    res.error(error.message, 409)
  
  }
}



const authenticateClient = async (req, res) => {
  try {

    const { email, password } = req.body;
    const client = await Client.findOne({ email: email, password: password })

    if (!client) {
      // Throw an error if no match is found
      throw new Error("Invalid email or password");
    }

    res.success(product)

  }
  catch (error) {
    res.error(error.message, 401)
  }
}


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'omer.attique@gmail.com',
    pass: 'cdtu nnjr quuh hswr'
  }
});


const forgotpassswordClient = async (req, res) => {
  try {

    const { email } = req.body;
    const client = await Client.findOne({ email: email })

    if (!client) {
      // Throw an error if no match is found
      throw new Error("Email does not exists");
    }


    const randomPassword = generateSecurePassword(16);
     console.log('Generated Password:', randomPassword);   

    var mailOptions = {
      from:'omer.attique@gmail.com',
      to: email,
      subject: 'No-Reply Glammi App',
      text: `This is the auto-generated email by Glammi: ${randomPassword}`
    };

     // Send email using transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Failed to send email.');
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).send(`Email sent successfully: ${info.response}`);
    }
  });

    // res.success('Temporary password sent to your email successfully')

  }
  catch (error) {
    res.error(error.message, 404)
  }
}



module.exports = {
    getClients,
    signupClient,
    authenticateClient,
    forgotpassswordClient,
    registerMembership
}
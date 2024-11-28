const express = require('express');
const mongoose = require('mongoose');
const app = express()
const Client = require('./models/client.model.js');
const Professional = require('./models/professional.model.js');
const clientRoute = require("./routes/client.routes.js");
const ProfessionalRoute = require("./routes/professional.routes.js");
app.use(express.json());


const createResponse = (data = null, statusCode = 200, errorMessage = null) => {
  return {
    data,
    statusCode,
    errorMessage,
  };
};

app.use((req, res, next) => {
  res.success = (data) => {
    res.status(200).json(createResponse(data, 200, null));
  };

  res.error = (errorMessage, statusCode = 500) => {
    res.status(statusCode).json(createResponse(null, statusCode, errorMessage));
  };

  next();
});


app.use("/api/client", clientRoute);
app.use("/api/professional", ProfessionalRoute);



mongoose.connect('mongodb://localhost:27017/Glamiidb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


app.listen(3000, () => {
  console.log('Server is running on port 3000')

});

app.get('/', (req, res) => {
  res.send("Hello from Node Api updated v2")
});

// app.post('/api/client/signup', async (req, res) => {
//   try {

//     const { username } = req.body;

//     const client = await Client.findOne({ username: username })

//     if (client) {
//       throw new Error("Username already exists");
//     }
//     else {
//       const product = await Client.create(req.body)
//       res.success(product)
//     }

//   }
//   catch (error) {
//     res.error(error.message, 409)
  
//   }
// });


// app.post('/api/client/authenticate', async (req, res) => {
//   try {

//     const { username, password } = req.body;

//     const product = await Client.findOne({ username: username, password: password })


//     if (!product) {
//       // Throw an error if no match is found
//       throw new Error("Invalid username or password");
     
//     }

//     res.success(product)

//   }
//   catch (error) {

//     res.error(error.message, 401)

//   }
// });



// app.get('/api/getAllClients', async (req, res) => {
//   try {
//     const products = await Client.find({});
//     res.success(products)

//   } catch (error) {
//     res.error(error.message,500)

//   }
// });


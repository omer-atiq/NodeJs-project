const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
    serviceName: { type: String, required: true },
    serviceId: { type: Number, required: true },

  });

  const certificationSchema = new mongoose.Schema({
    certificationName: { type: String, required: true },
  });


  const availabilitySchema = new mongoose.Schema({
    dayofWeek: { type: String, required: false },
    timestamp: {
        type: Number,
        required: true,
      },
  });

const ProfessionalSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "Please enter the first name"]

        },
        lastname: {
            type: String,
            required: false,
            default: ""
        },
        email: {
            type: String,
            required: [true, "Please enter your email"]
        },
        password: {
            type: String,
            required: [true, "Please enter your password"]
        },
        tempPassword: {
            type: String,
            required: false,
            default: ""
        },
        phoneNumber: {
            type: Number,
            required: false
        },
        image: {
            type: String,
            required: false
        },
        yearsOfexperience:{
            type: Number,
            required: false
        },
        services:[servicesSchema],
        certifications:[certificationSchema],
        availabilities:[availabilitySchema]
    },
    {
        timestamps: true
    }
);

const Professional = mongoose.model("Professional",ProfessionalSchema);

module.exports = Professional;
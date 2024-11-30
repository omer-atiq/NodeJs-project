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

const ProfessionalMemberShipSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [false, "Please enter the first name"]

        },
        lastname: {
            type: String,
            required: false,
            default: ""
        },
        email: {
            type: String,
            required: [false, "Please enter your email"]
        },
        phoneNumber: {
            type: Number,
            required: false
        },
        address1: {
            type: String,
            required: false
        },
        address2: {
            type: String,
            required: false
        },
        preferences:{
            type:String,
            required: false
        },
        membershipStatus:{
            type:String,
            required: false,
            default: "Pending Approval"
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

const ProfessionalMemberShip = mongoose.model("ProfessionalMemberShip",ProfessionalMemberShipSchema);

module.exports = ProfessionalMemberShip;
const mongoose = require('mongoose');

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
    },
    {
        timestamps: true
    }
);

const Professional = mongoose.model("Professional",ProfessionalSchema);

module.exports = Professional;
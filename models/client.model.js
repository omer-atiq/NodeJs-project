const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema(
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
        preferences:{
            type:String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Client = mongoose.model("Client",ClientSchema);

module.exports = Client;
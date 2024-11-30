const mongoose = require('mongoose');

const ClientMemberShipSchema = mongoose.Schema(
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
        }
    },
    {
        timestamps: true
    }
);

const ClientMemberShip = mongoose.model("ClientMembership",ClientMemberShipSchema);

module.exports = ClientMemberShip;
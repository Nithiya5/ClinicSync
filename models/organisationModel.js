const mongoose = require('mongoose');
const { type } = require('os');

const orgSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    image:{
        type:String,
        
    },
    doctor:[{
        doctorId:{
            type:String
        },
        name:{
            type:String,
            required:true
        },
        speciality:{
            type:String,
            required:true
        },
        image:{
            type:String
        }
    }]
    
});

const Organisations = mongoose.model("Organisations",orgSchema);

module.exports = Organisations;
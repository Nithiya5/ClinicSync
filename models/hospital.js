const mongoose = require('mongoose');


const hospitalSchema = mongoose.Schema({
    
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
        },
        phoneNumber:{
            type:Number
        }
    }]
    
});

const Hospitals = mongoose.model("Hospitals",hospitalSchema);

module.exports = Hospitals;
const mongoose = require('mongoose');


const hospitalSchema = mongoose.Schema({
    orgId:{
        type:String,
        required:true
    },
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
        degree:{
            type:String,
            requird:true
        }
       
    }]
    
});

const Hospitals = mongoose.model("Hospitals",hospitalSchema);

module.exports = Hospitals;
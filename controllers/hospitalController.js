const Hospitals = require('../models/hospital');
const {v4:uuidv4} = require('uuid') ;
const Appointment = require('../models/appointmentModel');
const User = require('../models/usermodel');

const getHospital = async(req,res) =>{
    try{
       const org = await Hospitals.find();
       res.status(200).send(org);
    }
    catch(err){
        console.log(err);
    }
}

const addHospital = async (req, res) => {
    try {
      const {name, address, image, doctors = [] } = req.body;
  
      const newOrg = new Hospitals({
        orgId:uuidv4(),
        name,
        address,
        image,
        doctor: doctors.map(p => ({
          ...p,
          doctorId: uuidv4() 
        }))
      });
  
      await newOrg.save();
      res.status(201).send({ message: "Organisation added successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    }
  };


const  updateAppointment = async (req, res) => {
    try {
        const { appointmentId, status } = req.body;
        const appointment = await Appointment.findByIdAndUpdate(
            appointmentId,
            { status },
            { new: true }
        );

        if (!appointment) return res.status(404).json({ message: "Appointment not found" });

        res.json({ message: `Appointment ${status.toLowerCase()} successfully`, appointment });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};


const getOrganisationDashboard = async (req, res) => {
  try {
    const userId = req.user; 

    const organisation = await Hospitals.findOne({ orgId:userId });

    if (!organisation) {
      return res.status(404).json({ message: "Organisation not found" });
    }

    return res.status(200).json({
      orgId: organisation.orgId,
      name: organisation.name,
      address: organisation.address,
      image: organisation.image,
      doctors: organisation.doctor 
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};



  
 
  

module.exports = {getHospital,addHospital,getOrganisationDashboard,updateAppointment};
const Hospitals = require('../models/hospital');
const {v4:uuidv4} = require('uuid') 
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
      const {name, address, image, doctors } = req.body;
  
      const newOrg = new Hospitals({
        
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
  
  
  const addDoctor = async (req, res) => {
    try {
      const { orgId } = req.params; 
      const { name, speciality, image } = req.body;
  
      const organization = await Hospitals.findOne({ orgId });
      if (!organization) {
        return res.status(404).send('Organization not found');
      }
  
      const newDoctor = {
        name,
        speciality,
        image,
        doctorId: uuidv4()
      };
  
      organization.doctor.push(newDoctor);
      await organization.save();
  
      res.status(201).send('Doctor added successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    }
  };
  

module.exports = {getHospital,addHospital,addDoctor};
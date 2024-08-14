const Hospitals = require('../models/hospital');
const {v4:uuidv4} = require('uuid');



const getDoctors = async (req, res) => {
    try {
        const { orgId } = req.params;
        const organization = await Hospitals.findById(orgId);

        if (!organization) {
            return res.status(404).send({ message: "Organization not found" });
        }

        res.status(200).send(organization.doctor);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Server error" });
    }
};
const addDoctor = async (req, res) => {
    try {
      const { orgId } = req.params; 
      const { name, speciality, image,degree } = req.body;
  
      const organization = await Hospitals.findOne({ orgId });
      if (!organization) {
        return res.status(404).send('Organization not found');
      }
  
      const newDoctor = {
        name,
        speciality,
        image,
        degree,
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

module.exports = {getDoctors,addDoctor};

  
  
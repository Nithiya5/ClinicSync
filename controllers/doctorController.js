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

module.exports = {getDoctors};

  
  
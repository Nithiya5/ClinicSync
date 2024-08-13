const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
const { v4: uuidv4 } = require('uuid');


const addAppointment = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, address, dateOfBirth, age, gender, appointmentDate, appointmentTime } = req.body;
  const { doctorId } = req.params;

  try {
    const newAppointment = new Appointment({
      patientId: req.user._id, 
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      dateOfBirth,
      age,
      gender,
      doctorId,
      appointmentDate,
      appointmentTime
    });

    await newAppointment.save();
    res.status(201).send({ message: "Appointment booked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
};

module.exports = {addAppointment};

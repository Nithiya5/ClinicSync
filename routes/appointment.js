const express = require('express');
const doctorController = require('../controllers/doctorController');
const auth = require('../middlewares/auth')

const Router = express.Router();

Router.post('/bookappointment/:doctorId',auth,doctorController.addDoctor)

module.exports = Router;

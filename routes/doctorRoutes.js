const express = require('express');
const doctorController = require('../controllers/doctorController');

const Router = express.Router();

Router.get('/get-doctors/:orgId', doctorController.getDoctors);
Router.post('/add-doctor/:orgId',doctorController.addDoctor)

module.exports = Router;

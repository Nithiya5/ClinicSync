const express = require('express');
const Router = express.Router();
const hospitalcontroller = require('../controllers/hospitalController');


Router.get('/get-hospitals',hospitalcontroller.getHospital);
Router.post('/add-hospital',hospitalcontroller.addHospital);

module.exports = Router;
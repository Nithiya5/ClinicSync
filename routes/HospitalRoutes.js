const express = require('express');
const Router = express.Router();
const hospitalcontroller = require('../controllers/hospitalController');
const auth = require('../middlewares/auth')


Router.get('/get-hospitals',hospitalcontroller.getHospital);
Router.post('/add-hospital',hospitalcontroller.addHospital);
Router.get('/get-Hospital-dashboard',auth,hospitalcontroller.getOrganisationDashboard)
Router.put('/update-status',hospitalcontroller.updateAppointment)


module.exports = Router;
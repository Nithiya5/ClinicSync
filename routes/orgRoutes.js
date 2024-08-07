const express = require('express');
const Router = express.Router();
const orgcontroller = require('../controllers/organisationController');

Router.get('/get-org',orgcontroller.getOrg)
Router.post('/register-org',orgcontroller.addOrg);
Router.post('/add-doctor',orgcontroller.addOrg);

module.exports = Router;
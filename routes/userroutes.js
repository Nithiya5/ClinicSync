const express = require('express');
const Router = express.Router();
const usercontroller = require('../controllers/userController');


Router.post('/register',usercontroller.signup);
Router.post('/login',usercontroller.login);

module.exports = Router;
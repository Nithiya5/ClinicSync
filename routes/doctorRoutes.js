const express = require('express');
const doctorController = require('../controllers/doctorController');

const router = express.Router();

router.get('/get-doctors/:orgId', doctorController.getDoctors);

module.exports = router;

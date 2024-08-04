const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const userroutes = require('../ClinicSync/routes/userroutes')

mongoose.connect('mongodb+srv://nithiyaR:nithiya2005@cluster0.a02jqzo.mongodb.net/ClinicSync?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log("MongoDB connected")
});

app.use(bodyParser.json());
app.use(cors());
app.set('view engine','ejs');
app.use('/',userroutes);

app.listen(4000,() => {
    console.log("Server is running on 4000");
});
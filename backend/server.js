require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const workout = require('./routes/workout')

const app = express();

app.use(express.json());

app.use( '/api', workout);


mongoose.connect(process.env.MONGO_URL)
.then(()=>{app.listen(process.env.PORT,()=>{
    console.log("Listening on port " + process.env.PORT);
});})
.catch((err)=>console.log(err));





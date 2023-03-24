const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Models
const User = require('./models/User');

require('dotenv').config();

app.use(express.json());
app.use(cors(
    {
        credentials: true,
        // origin: '*'
        origin: 'http://localhost:5173'
    }
))


mongoose.connect(process.env.MONGO_URL).then((connection) => {console.log("mongodb connected.")})


app.get('/test', function (req, res) {
    res.status(200).json('OK!');
});


app.post('/register', function (req, res) {
    const {name, email, password} = req.body;
    res.status(200).json({name, email, password});
    User.create({
        name,
        email,
        password
    })
});




app.listen('5000', function () {})
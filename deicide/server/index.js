const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const BeatModel = require('../models/BeatModel');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://asapcaique:7OyR9oEYOw1bcj5C@cluster0.jgcbmfz.mongodb.net/")

app.get('/getBeats', (req, res) => {
    BeatModel.find()
    .then(beats => res.json(beats))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server run")
});
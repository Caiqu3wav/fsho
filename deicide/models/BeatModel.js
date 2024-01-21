const { Double } = require("mongodb");
const mongoose = require("mongoose")

const beatSchema = new mongoose.Schema({
    nome: String,
    estilos: Array,
    preco: Number,
    date: Date,
    bpm: Number,
    key: String
})

const BeatModel = mongoose.model("beats", beatSchema)

module.exports = BeatModel;
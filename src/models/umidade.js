const mongoose = require('mongoose');

const Umidade = mongoose.model('Temperatura',{
    umidade: String,
    data: Date,
    hora: String,
});

module.exports = Umidade;
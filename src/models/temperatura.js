const mongoose = require('mongoose');

const Temperatura = mongoose.model('Temperatura',{
    temperatura: String,
    data: Date,
    hora: String,
});

module.exports = Temperatura;
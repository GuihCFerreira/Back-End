const mongoose = require('mongoose');

const Temperatura = mongoose.model('Temperatura',{
    temperatura: String,
    data: String,
    hora: String,
});

module.exports = Temperatura;
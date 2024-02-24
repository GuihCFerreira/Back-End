const mongoose = require('mongoose');

const Pressao = mongoose.model('Temperatura',{
    pressao: String,
    data: Date,
    hora: String,
});

module.exports = Pressao;
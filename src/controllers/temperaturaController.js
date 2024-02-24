const controller = {};

const {getDataAtual} = require('../util/dateUtil');
const {getHoraAtual} = require('../util/timeUtil');

controller.atual = async function(req, res){
    res.status(200).json({"mensagem":"ta ligado"})
}

controller.lista = async function(req, res){
    res.status(200).json({"mensagem":"ta ligado 2"})
}

controller.criar = async function(req, res){

    const temperatura = req.body.temperatura;
    const dataAtual = getDataAtual();
    const horaAtual = getHoraAtual();

    const temperaturaObj = {
        temperatura,
        dataAtual,
        horaAtual
    }

    res.status(201).json({"mensagem":"ta criado"}) 
}

module.exports = controller;
const controller = {};
const {getDataAtual} = require('../util/dateUtil');
const {getHoraAtual} = require('../util/timeUtil');

controller.atual = async function(req, res){
    res.status(200).json({"mensagem":"ta ligado p"})
}

controller.lista = async function(req, res){
    res.status(200).json("dataFormatada")
}

controller.criar = async function(req, res){

    const pressao = req.body.pressao;
    const dataAtual = getDataAtual();
    const horaAtual = getHoraAtual();

    const pressaoObj = {
        pressao, 
        dataAtual,
        horaAtual
    }

    res.status(201).json({"mensagem":"ta criado p"}) 
}

module.exports = controller;
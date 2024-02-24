const controller = {};

const {getDataAtual} = require('../util/dateUtil');
const {getHoraAtual} = require('../util/timeUtil');

controller.atual = async function(req, res){
    res.status(200).json({"mensagem":"ta ligado u"})
}

controller.lista = async function(req, res){
    res.status(200).json({"mensagem":"ta ligado 2 u"})
}

controller.criar = async function(req, res){

    const umidade = req.body.umidade;
    const dataAtual = getDataAtual();
    const horaAtual = getHoraAtual();

    const umididaObj= {
        umidade,
        dataAtual,
        horaAtual
    }

    res.status(201).json({"mensagem":"ta criado u"}) 
}

module.exports = controller;
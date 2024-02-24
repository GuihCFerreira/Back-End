const mongoose = require('mongoose');


const connectDatabase = () =>{
    mongoose.connect(
        `mongodb+srv://guihdevtestes:53rv1d0rT35T3@cluster0.nnrk6ri.mongodb.net/pi4SemestreTeste?retryWrites=true&w=majority`
        )
        .then(()=>{
            console.log("Conexao efetuada com sucesso");
        })
        .catch((err)=>{
            console.log(err);
        })
}

module.exports={connectDatabase};

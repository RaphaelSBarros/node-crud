const ServicoExercicio = require("../services/exercicio");

const servico = new ServicoExercicio();

class ControllerExercicio{
    
    PegarUm(req, res){
        try{
            const result = servico.PegarUm(req.params.index);
            res.status(200).json({
                nomes: result
            })
        }catch(error){
            console.log(error);
            res.status(500).json({ message: error});
        }
    }

    PegarTodos(req, res){
        try{
            const result = servico.PegarTodos();
            res.status(200).json({
                nomes: result
            })
        }catch(error){
            console.log(error);
            res.status(500).json({ message: error});
        }
    }

    Add(req, res){
        try{
            const result = servico.Add(req.body.nome);
            res.status(201).json({
                nomes: result
            })
        }catch(error){
            console.log(error);
            res.status(500).json({ message: error});
        }
    }

    Alterar(req, res){
        try{
            const result = servico.Alterar(req.body.index, req.body.nome);
            res.status(201).json({
                nomes: result
            })
        }catch(error){
            console.log(error);
            res.status(500).json({ message: error});
        }
    }

    Deletar(req, res){
        try{
            const result = servico.Deletar(req.body.index);
            res.status(201).json({
                nomes: result
            })
        }catch(error){
            console.log(error);
            res.status(500).json({ message: error});
        }
    }
}

module.exports = ControllerExercicio;
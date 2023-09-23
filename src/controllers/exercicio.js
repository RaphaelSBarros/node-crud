const ServicoExercicio = require("../services/exercicio");

const servico = new ServicoExercicio();

class ControllerExercicio{
    
    PegarUm(req, res){
        try{
            const result = servico.PegarUm(req.params.index);

            res.status(200).json({
                nome: result
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao pegar um nome"});
        }
    }

    PegarTodos(req, res){
        try{
            const result = servico.PegarTodos();
            res.status(201).json({
                nomes: result
            })
        }catch(error){
            console.log(error);
            res.status(500).json({ message: "Erro ao listar nomes"});
        }
    }

    Add(req, res){
        try{
            servico.Add(req.body.nome);

            res.status(201).json({
                message: "Adicionado com sucesso"
            });
        }catch(error){
            console.log(error);
            res.status(500).json({ message: error});
        }
    }

    Alterar(req, res){
        try{
            servico.Alterar(req.params.index, req.params.nome);

            res.status(200).json({
                message: "Alterado com sucesso"
            })
        }catch(error){
            res.status(500).json({ message: "Erro ao alterar"});
        }
    }

    Deletar(req, res){
        try{
            servico.Deletar(req.params.index);
            res.status(200).json({
                message: "Deletado com sucesso"
            })
        }catch(error){
            console.log(error);
            res.status(500).json({ message: "Erro ao deletar"});
        }
    }
}

module.exports = ControllerExercicio;
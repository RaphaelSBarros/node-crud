const ServicoExercicio = require("../services/exercicio");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const config = require("../config");

const servico = new ServicoExercicio();

class ControllerExercicio{

    async Login(req, res){
        const{ email, senha } = req.body;

        const { dataValues: pessoa } = await servico.PegarUmPorEmail(email);

        if(!email || !senha){
            res.status(401).json({ message: "Email ou senha incorretos" });
        }

        if(!pessoa){
            res.status(401).json({ message: "Email ou senha incorretos" });
        }

        if(!(await bcrypt.compare(senha, pessoa.senha))){
            res.status(401).json({ message: "Email ou senha incorretos" });
        }

        const token = jwt.sign(
            { id: pessoa.id, email: pessoa.email, nome: pessoa.nome },
            config.secret
        )

        res.json({
            token
        })

    }
    
    async PegarUm(req, res){
        try{
            const result = await servico.PegarUm(req.params.id);

            res.status(200).json({
                nome: result
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao pegar um nome"});
        }
    }

    async PegarTodos(req, res){
        try{
            const result = await servico.PegarTodos();
            res.status(201).json({
                nomes: result
            })
        }catch(error){
            console.log(error);
            res.status(500).json({ message: "Erro ao listar nomes"});
        }
    }

    async Add(req, res){
        try{
            servico.Add(req.body.id, req.body.nome, req.body.email, req.body.senha);

            res.status(201).json({
                message: "Adicionado com sucesso"
            });
        }catch(error){
            console.log(error);
            res.status(500).json({ message: error});
        }
    }

    async Alterar(req, res){
        try{
            servico.Alterar(req.params.id, req.body.nome, req.body.email, req.body.senha);

            res.status(200).json({
                message: "Alterado com sucesso"
            })
        }catch(error){
            res.status(500).json({ message: "Erro ao alterar"});
        }
    }

    async Deletar(req, res){
        try{
            servico.Deletar(req.params.id);
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
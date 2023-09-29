const nomes = Array();
const Pessoa = require("../models/exercicio.js");

class RepositoryExercicio{

    async PegarUm(id){
        return Pessoa.findOne({
            where: { id }
        });
    }

    PegarTodos(){
        return nomes;
    }

    Add(nome){
        return nomes.push(nome);
    }

    Alterar(index, nome){
        nomes[index] = nome;
    }

    Deletar(index){
        nomes.splice(index, 1);
    }

}

module.exports = RepositoryExercicio;
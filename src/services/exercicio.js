const RepositoryExercicio = require("../repositories/exercicio");


const repositorio = new RepositoryExercicio();

class ServicoExercicio{
    
    PegarUm(index){
        return repositorio.PegarUm(index);
    }

    PegarTodos(){
        return repositorio.PegarTodos();
    }

    Add(nome){
        if(!nome){
            throw new Error("Favor preencher o nome.");
        }
        repositorio.Add(nome);
    }

    Alterar(index, nome){
        if(!nome){
            throw new Error("Favor preencher o nome.");
        }else if(!index || isNaN(index)){
            throw new Error("Favor preencher corretamente o index");
        }

        repositorio.Alterar(index, nome);
    }

    Deletar(index){
        if(!index){
            throw new Error("Favor preencher corretamente o index");
        }
        repositorio.Deletar(index)
    }
}

module.exports = ServicoExercicio;
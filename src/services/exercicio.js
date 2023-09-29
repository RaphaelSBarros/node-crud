const RepositoryExercicio = require("../repositories/exercicio");


const repositorio = new RepositoryExercicio();

class ServicoExercicio{
    
    async PegarUm(id){
        return repositorio.PegarUm(id);
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
        }else if(index < 0 || isNaN(index)){
            throw new Error("Favor preencher corretamente o index");
        }

        repositorio.Alterar(index, nome);
    }

    Deletar(index){
        if(index < 0 || isNaN(index) || index > this.PegarTodos().length){
            throw new Error("Favor preencher corretamente o index");
        }
        repositorio.Deletar(index)
    }
}

module.exports = ServicoExercicio;
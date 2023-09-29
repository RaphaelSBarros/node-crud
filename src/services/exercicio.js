const RepositoryExercicio = require("../repositories/exercicio");


const repositorio = new RepositoryExercicio();

class ServicoExercicio{
    
    async PegarUm(id){
        return repositorio.PegarUm(id);
    }

    async PegarTodos(){
        return repositorio.PegarTodos();
    }

    async Add(id, nome, email, senha){
        if(isNaN(id) || nome == "" || email == "" || senha == ""){
            throw new Error("Favor preencher os dados.");
        }
        repositorio.Add(id, nome, email, senha);
    }

    Alterar(index, nome){
        if(!nome){
            throw new Error("Favor preencher o nome.");
        }else if(index < 0 || isNaN(index)){
            throw new Error("Favor preencher corretamente o index");
        }

        repositorio.Alterar(index, nome);
    }

    async Deletar(id){
        if(id < 0 || isNaN(id) || id > this.PegarTodos().length){
            throw new Error("Favor preencher corretamente o index");
        }
        repositorio.Deletar(id)
    }
}

module.exports = ServicoExercicio;
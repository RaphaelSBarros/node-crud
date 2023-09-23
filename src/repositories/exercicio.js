const nomes = Array();

class RepositoryExercicio{

    PegarUm(index){
        return nomes[index];
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
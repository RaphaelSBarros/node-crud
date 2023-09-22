const { describe, expect, it } = require("@jest/globals");
const ServicoExercicio = require("../src/services/exercicio");

describe('Testes CRUD', () => {

    const servico = new ServicoExercicio();

    beforeAll(async () => {
        console.info('Iniciando TDD com jest!');
    });

    afterAll(() => {
        console.info('Encerrando os testes!');
    });

    it('Should add a name', () => {
        const qtde = servico.PegarTodos().length;
        servico.Add("Joao");
        const qtdeAfter = servico.PegarTodos().length;

        expect(qtdeAfter).toBe(qtde+1);
    })

    it('Should add a name and validade', () => {
        const nome = "Lucas";
        servico.Add(nome);

        const addedNome = servico.PegarUm(servico.PegarTodos().length - 1);
        console.log(addedNome);

        expect(nome).toBe(addedNome);
    })
})
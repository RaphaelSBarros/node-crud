const { describe, expect, it } = require("@jest/globals");
const ServicoExercicio = require("../src/services/exercicio");

describe("Testando a funcionalidade do banco", () => {
  const servico = new ServicoExercicio();

  beforeAll(async () => {
    console.info("Iniciando os Testes");
  });

  afterAll(() => {
    console.info("Encerrando os testes");
  });

  it("Should add a name", () => {
    const qtde = servico.PegarTodos().length;
    servico.Add("Joao");
    const qtdeAfter = servico.PegarTodos().length;

    expect(qtdeAfter).toBe(qtde + 1);
  });
});
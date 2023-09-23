const { describe, expect, it } = require("@jest/globals");
const ServicoExercicio = require("../src/services/exercicio");

describe("Testando a função de adicionar", () => {
  const servico = new ServicoExercicio();

  beforeAll(async () => {
    console.info("Iniciando os Testes da função Adicionar");
  });

  afterAll(() => {
    console.info("Encerrando os testes da função Adicionar");
  });

  it("Should add a name", () => {
    const qtde = servico.PegarTodos().length;
    servico.Add("Joao");
    const qtdeAfter = servico.PegarTodos().length;

    expect(qtdeAfter).toBe(qtde + 1);
  });

  it("Should add a name and validade", () => {
    const nome = "Lucas";
    servico.Add(nome);

    const addedNome = servico.PegarUm(servico.PegarTodos().length - 1);
    console.log(addedNome);

    expect(nome).toBe(addedNome);
  });
});

describe("Testando a função de Alterar", () => {
  const servico = new ServicoExercicio();

  beforeAll(async () => {
    console.info("Iniciando os Testes da função Alterar");
  });

  afterAll(() => {
    console.info("Encerrando os testes da função Alterar");
  });

  it("Should change a name", () => {
    const qtde = servico.PegarTodos().length;
    servico.Alterar(qtde - 1, "Raphael");

    const nameAfter = servico.PegarUm(qtde - 1);

    expect(nameAfter).toBe("Raphael");
  });
});

describe("Testando a função de Deletar", () => {
  const servico = new ServicoExercicio();

  beforeAll(async () => {
    console.info("Iniciando os Testes da função Deletar");
  });

  afterAll(() => {
    console.info("Encerrando os testes da função Deletar");
  });

  it("Should delete a name", () => {
    const qtde = servico.PegarTodos().length;
    servico.Deletar(1);
    const qtdeAfter = servico.PegarTodos().length;

    expect(qtdeAfter).toBe(qtde - 1);
  });
});

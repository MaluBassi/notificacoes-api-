// 1. Importa as funções que vamos testar
const { isEmail, minLength } = require("../../src/helpers/validators");

// 2. Testes da função isEmail
describe("validators.isEmail", () => {
  it("não retorna erro para um e-mail válido", () => {
    // Arrange — prepara
    const email = "ana@senai.br";
    // Act — executa
    const resultado = isEmail(email);
    // Assert — confere (nos validators, null = "sem erro")
    expect(resultado).toBeNull();
  });

  it("retorna mensagem de erro para e-mail sem @", () => {
    const resultado = isEmail("ana.senai.br");
    expect(resultado).toBe("E-mail inválido");
  });
});

// 3. Teste da função minLength (Item 2.3)
describe("validators.minLength", () => {
  it("aceita um texto com o número exato de caracteres mínimos", () => {
    // Arrange — prepara os dados de teste
    const valor = "Ana";
    const minimo = 3;
    const nomeCampo = "Nome";

    // Act — executa a função a ser testada
    const resultado = minLength(valor, minimo, nomeCampo);

    // Assert — verifica se o resultado é null (sem erro)
    expect(resultado).toBeNull();
  });
});
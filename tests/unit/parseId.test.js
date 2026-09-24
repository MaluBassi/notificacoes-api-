// tests/unit/parseId.test.js
const parseId = require("../../src/helpers/parseId");
const { ValidationError } = require("../../src/errors/AppError");

describe("parseId", () => {
  // Teste base fornecido no enunciado
  it("lança ValidationError quando o id não é número", () => {
    expect(() => parseId("abc")).toThrow(ValidationError);
  });

  // DESAFIO: Teste para verificar se um ID como "12abc" é rejeitado
  it("lança ValidationError quando o id contém caracteres não numéricos misturados (ex: '12abc')", () => {
    expect(() => parseId("12abc")).toThrow(ValidationError);
  });
});



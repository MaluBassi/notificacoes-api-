1. Qual é o item de prioridade n.º 1 no plano de testes do seu grupo?
O item de prioridade n.º 1 no plano de testes do meu grupo é o Login / Autenticação de Utilizadores.

2. Em um dos seus testes, aponte o que é o Arrange, o Act e o Assert.

Exemplo com o teste de validação de e-mail (validators.test.js):
it("não retorna erro para um e-mail válido", () => {
  // Arrange (Prepara)
  const email = "ana@senai.br";

  // Act (Executa)
  const resultado = isEmail(email);

  // Assert (Confere)
  expect(resultado).toBeNull();
});

Arrange (Preparar): É a fase de preparação onde se definem as variáveis e pré-condições necessárias para o teste (ex.: const email = "ana@senai.br";).

Act (Executar): É a fase em que a função a ser testada é efetivamente executada com os dados preparados (ex.: const resultado = isEmail(email);).

Assert (Verificar/Conferir): É a fase de validação onde se confirma se o resultado devolvido pela função é o esperado (ex.: expect(resultado).toBeNull();).

3. Um teste que nunca fica vermelho, nem com o código quebrado, serve para alguma coisa? Por quê?
Não, não serve para nada.
Um teste unitário só tem valor real se for capaz de falhar (ficar vermelho) quando o código sob teste contém um erro. Se o teste continua a passar (ficar verde) mesmo com o código alterado ou avariado, ele apenas gera uma falsa sensação de segurança e não cumpre o seu propósito de garantir a qualidade do software.


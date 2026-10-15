# Registro de Testes de Integração

**Aluno:** Maria Luiza
**Grupo:** Grupo 7  
**Data:** 15/10/2026  

## Banco de teste
* **Nome do banco de teste:** `notificacoes_test`  
* **Por que ele é separado do banco da API:** Para garantir o isolamento dos testes, evitando que dados de testes apaguem, dupliquem ou corrompam os dados reais de produção/desenvolvimento da API.

## Testes escritos

| # | Arquivo | O que o teste verifica | Verde ou vermelho? |
|---|---|---|---|
| 1 | `evento.integration.test.js` | Se grava o evento no banco com o nome correto | Verde |
| 2 | `participante.integration.test.js` | Se não grava participante com e-mail inválido (sem @) | Verde |
| 3 | `participante.integration.test.js` | Se a atualização grava o nome novo do participante no banco | Vermelho |

## Resultado
Linha "Tests:" da saída do npm run test:integration:
`Tests: 1 failed, 4 passed, 5 total`

## Defeito encontrado
* **Teste:** `ParticipanteService.atualizar (integração) > grava o nome novo no banco`
* **Esperado:** `"Ana Maria"`
* **Obtido:** `"Ana"`
* **O que o usuário da API veria:** A rota `PUT /participantes/:id` responde com status `200 OK` (passando a falsa impressão de sucesso), mas as alterações não são salvas permanentemente no banco de dados.
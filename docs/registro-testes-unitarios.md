# Registro de Testes Unitários
Aluno: Maria Luiza Bassi 
Grupo: Grupo 7
Data: 24/09/2026

## Testes escritos
| # | Arquivo                        | O que o teste verifica                | Tipo        |
| --| ------------------------------ | -----------------------------         | ----------- |
| 1 | tests/unit/validators.test.js  | Não retorna erro, email válido        |  sucesso    |
| 2 | tests/unit/validators.test.js  | Retorna erro para email sem @         |  falha      |
| 3 | tests/unit/validators.test.js  | Aceita texto com tamanho mínimo       |  borda      |
| 4 | parseId.test.js                | Lança ValidationError para id (12abc) |  falha      |


## Resultado
Passaram: 6
Falharam: 1

## Defeito encontrado
Teste: parseId.test.js com ID "12abc"
Esperado: Aparecer ValidationError
Obtido: A função aceitou, converteu para 12, sem erro

## Cobertura
% Lines da linha "helpers": 55.55%
Em uma frase, o que esse número significa: Siginifica que essas linhas do código foram executadas e validadas pelo teste
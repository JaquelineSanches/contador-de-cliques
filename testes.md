# Cenários de Teste - Projeto Contador de Cliques

Este documento reúne os principais cenários de teste elaborados para validar as regras de negócio, comportamento da interface e persistência de dados da aplicação **Contador de Cliques**.

---

## Informações gerais

**Projeto:** Contador de Cliques  
**Tecnologias:** HTML, CSS e JavaScript  
**Ambiente:** Navegador web  
**Objetivo dos testes:** Validar funcionamento das funcionalidades principais da aplicação

---

# Casos de Teste

## CT01 - Exibir valor inicial do contador

**Objetivo:** Validar o carregamento inicial da aplicação.  
**Pré-condição:** Navegador sem dados salvos no `localStorage`.

### Passos:

1. Abrir a aplicação pela primeira vez.

### Resultado esperado:

- O contador deve exibir o valor `0`.
- O histórico deve estar vazio.
- O tema inicial deve ser o modo claro.
- O ícone do botão de tema deve exibir `🌙`.

---

## CT02 - Incrementar contador em +1

**Objetivo:** Validar incremento unitário do contador.  
**Pré-condição:** Contador em `0`.

### Passos:

1. Clicar no botão `+1`.

### Resultado esperado:

- O contador deve exibir `1`.
- O histórico deve registrar `Adicionar - Valor: 1`.
- O valor deve ser salvo no `localStorage`.

---

## CT03 - Decrementar contador em -1 sem permitir valor negativo

**Objetivo:** Validar a regra de limite mínimo do contador.  
**Pré-condição:** Contador em `0`.

### Passos:

1. Clicar no botão `-1`.

### Resultado esperado:

- O contador deve permanecer em `0`.
- O sistema não deve exibir valores negativos.
- O valor salvo deve continuar sendo `0`.

---

## CT04 - Incrementar contador em +5

**Objetivo:** Validar incremento em múltiplos de cinco.  
**Pré-condição:** Contador em `0`.

### Passos:

1. Clicar no botão `+5`.

### Resultado esperado:

- O contador deve exibir `5`.
- O histórico deve registrar `Adicionar 5 - Valor: 5`.

---

## CT05 - Decrementar contador em -5

**Objetivo:** Validar decremento em múltiplos de cinco.  
**Pré-condição:** Contador em `10`.

### Passos:

1. Clicar no botão `-5`.

### Resultado esperado:

- O contador deve exibir `5`.
- O histórico deve registrar `Subtrair 5 - Valor: 5`.

---

## CT06 - Incrementar contador em +10

**Objetivo:** Validar incremento em múltiplos de dez.  
**Pré-condição:** Contador em `0`.

### Passos:

1. Clicar no botão `+10`.

### Resultado esperado:

- O contador deve exibir `10`.
- O histórico deve registrar `Adicionar 10 - Valor: 10`.

---

## CT07 - Decrementar contador em -10

**Objetivo:** Validar decremento em múltiplos de dez.  
**Pré-condição:** Contador em `20`.

### Passos:

1. Clicar no botão `-10`.

### Resultado esperado:

- O contador deve exibir `10`.
- O histórico deve registrar `Subtrair 10 - Valor: 10`.

---

## CT08 - Resetar contador

**Objetivo:** Validar funcionalidade de reset.  
**Pré-condição:** Contador maior que `0`.

### Passos:

1. Clicar no botão `Reset`.

### Resultado esperado:

- O contador deve voltar para `0`.
- O histórico deve registrar `Resetar - Valor: 0`.
- O valor salvo no `localStorage` deve ser atualizado para `0`.

---

## CT09 - Validar limite mínimo do contador

**Objetivo:** Garantir que o contador nunca fique abaixo de `0`.  
**Pré-condição:** Contador em `3`.

### Passos:

1. Clicar no botão `-5`.

### Resultado esperado:

- O contador deve exibir `0`.
- O sistema não deve permitir número negativo.

---

## CT10 - Validar limite máximo do contador

**Objetivo:** Garantir que o contador não ultrapasse `999`.  
**Pré-condição:** Contador em `995`.

### Passos:

1. Clicar no botão `+10`.

### Resultado esperado:

- O contador deve exibir `999`.
- O sistema não deve permitir valores maiores que `999`.

---

## CT11 - Persistir valor do contador após atualizar a página

**Objetivo:** Validar persistência do contador no navegador.  
**Pré-condição:** Contador ajustado para valor diferente de `0`.

### Passos:

1. Alterar o contador para `15`.
2. Atualizar a página.

### Resultado esperado:

- O contador deve continuar exibindo `15` após o recarregamento.

---

## CT12 - Persistir histórico após atualizar a página

**Objetivo:** Validar persistência do histórico.  
**Pré-condição:** Histórico com registros salvos.

### Passos:

1. Clicar em `+1`.
2. Clicar em `+5`.
3. Atualizar a página.

### Resultado esperado:

- O histórico deve continuar exibindo os registros após o recarregamento.

---

## CT13 - Validar limite de 5 registros no histórico

**Objetivo:** Garantir que o histórico armazene apenas os últimos 5 registros.  
**Pré-condição:** Histórico vazio.

### Passos:

1. Realizar 6 ações diferentes no contador.

### Resultado esperado:

- O histórico deve exibir apenas os 5 registros mais recentes.
- O registro mais antigo deve ser removido.

---

## CT14 - Validar ordem do histórico

**Objetivo:** Confirmar que as ações mais recentes aparecem primeiro.  
**Pré-condição:** Histórico com mais de um registro.

### Passos:

1. Realizar 3 ações sequenciais diferentes.
2. Observar a ordem do histórico.

### Resultado esperado:

- O item mais recente deve aparecer no topo da lista.
- O item mais antigo deve aparecer por último.

---

## CT15 - Ativar dark mode

**Objetivo:** Validar alternância para modo escuro.  
**Pré-condição:** Aplicação em modo claro.

### Passos:

1. Clicar no botão de tema.

### Resultado esperado:

- A aplicação deve mudar para modo escuro.
- O `body` deve receber a classe `dark`.
- O ícone do botão de tema deve mudar para `☀️`.

---

## CT16 - Desativar dark mode

**Objetivo:** Validar retorno ao modo claro.  
**Pré-condição:** Aplicação em modo escuro.

### Passos:

1. Clicar novamente no botão de tema.

### Resultado esperado:

- A aplicação deve voltar para o modo claro.
- A classe `dark` deve ser removida do `body`.
- O ícone do botão de tema deve mudar para `🌙`.

---

## CT17 - Persistir tema após atualizar a página

**Objetivo:** Validar persistência da preferência de tema.  
**Pré-condição:** Tema alterado para escuro.

### Passos:

1. Ativar o dark mode.
2. Atualizar a página.

### Resultado esperado:

- A aplicação deve permanecer em modo escuro após o recarregamento.
- O ícone do botão deve continuar coerente com o tema aplicado.

---

## CT18 - Validar animação ao alterar contador

**Objetivo:** Verificar feedback visual ao atualizar o valor do contador.  
**Pré-condição:** Aplicação carregada.

### Passos:

1. Clicar em qualquer botão que altere o valor do contador.

### Resultado esperado:

- O elemento do contador deve executar a animação configurada.

---

## CT19 - Validar cor do contador quando valor for zero

**Objetivo:** Verificar feedback visual do contador no estado zero.  
**Pré-condição:** Contador em `0`.

### Passos:

1. Observar a cor do número exibido.

### Resultado esperado:

- O contador deve ser exibido na cor cinza.

---

## CT20 - Validar cor do contador quando valor for maior que zero

**Objetivo:** Verificar feedback visual do contador em valor positivo.  
**Pré-condição:** Contador maior que `0`.

### Passos:

1. Clicar em `+1`.
2. Observar a cor do número exibido.

### Resultado esperado:

- O contador deve ser exibido na cor verde.

---

## CT21 - Validar atualização do histórico após reset

**Objetivo:** Confirmar registro da ação de reset no histórico.  
**Pré-condição:** Histórico com ações anteriores e contador maior que `0`.

### Passos:

1. Clicar no botão `Reset`.

### Resultado esperado:

- O histórico deve exibir a ação `Resetar - Valor: 0`.

---

## CT22 - Validar funcionamento contínuo após várias ações

**Objetivo:** Confirmar estabilidade da aplicação em uso contínuo.  
**Pré-condição:** Aplicação carregada.

### Passos:

1. Realizar múltiplas ações alternadas entre:
   - `+1`
   - `-1`
   - `+5`
   - `-5`
   - `+10`
   - `-10`
   - `Reset`

### Resultado esperado:

- O contador deve continuar funcionando normalmente.
- O histórico deve ser atualizado corretamente.
- O sistema não deve travar nem apresentar comportamento inconsistente.

---

# Possíveis melhorias futuras identificadas nos testes

- Exibir mensagem específica quando o usuário tentar diminuir abaixo de `0`.
- Exibir mensagem específica quando o usuário tentar aumentar acima de `999`.
- Adicionar data e hora no histórico.
- Criar testes automatizados para as principais regras da aplicação.
- Melhorar a rastreabilidade dos testes com status (Aprovado/Reprovado).

---

# Conclusão

Os cenários acima foram elaborados para validar as principais regras de negócio e comportamentos da aplicação, cobrindo:

- Funcionalidades principais
- Regras de limite
- Persistência de dados
- Histórico de ações
- Alternância de tema
- Feedback visual
- Experiência do usuário

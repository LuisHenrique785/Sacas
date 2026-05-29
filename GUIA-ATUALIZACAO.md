# Guia — Como Atualizar a Base de Dados Diariamente

> Use este guia toda vez que a planilha do Sheets for atualizada e você precisar
> sincronizar os dados com o aplicativo.

---

## O que você vai precisar

- Acesso ao Google Sheets da planilha de sacas (login com @mercadolivre.com)
- O aplicativo aberto: `https://luishenrique785.github.io/Sacas/`
- Cerca de **2 minutos**

---

## PARTE 1 — Baixar os arquivos do Google Sheets

### Passo 1 — Abrir o Google Sheets

1. Abra o navegador e acesse o Google Sheets
2. Abra a planilha de sacas (a mesma que você usa normalmente)
3. Você vai ver as abas na parte inferior da tela: **Base**, **Rota**, e outras

---

### Passo 2 — Baixar a aba "Base" como CSV

1. Clique na aba **Base** (parte inferior da tela)  
   → A planilha muda para mostrar as colunas: `qr_mae`, `saca_id`, `rota`

2. No menu superior, clique em **Arquivo**

3. Passe o mouse em **Fazer download**  
   → Um submenu vai aparecer do lado

4. Clique em **Valores separados por vírgula (.csv)**  
   → O arquivo vai ser baixado automaticamente

5. O arquivo vai aparecer na pasta **Downloads** com o nome  
   `Base.csv` (ou similar, como `Planilha sem título - Base.csv`)

> **Dica:** Renomeie o arquivo para `Base.csv` para facilitar

---

### Passo 3 — Baixar a aba "Rota" como CSV

1. Volte para o Google Sheets

2. Clique na aba **Rota** (parte inferior da tela)  
   → A planilha muda para mostrar as colunas: `saca_id`, `rota`

3. No menu superior, clique em **Arquivo**

4. Passe o mouse em **Fazer download**

5. Clique em **Valores separados por vírgula (.csv)**  
   → O arquivo vai ser baixado

6. O arquivo vai aparecer na pasta **Downloads** com o nome  
   `Rota.csv` (ou similar)

> **Dica:** Renomeie o arquivo para `Rota.csv` para facilitar

---

## PARTE 2 — Importar os arquivos no aplicativo

### Passo 4 — Abrir o aplicativo

1. No navegador, acesse:  
   **`https://luishenrique785.github.io/Sacas/`**

2. Você vai ver a tela principal do app com os campos:
   - IP da Impressora
   - Responsável
   - Tipo de Auditoria
   - ID da Saca
   - Quantidade

---

### Passo 5 — Abrir a tela de atualização

1. Role a tela para baixo (ou olhe abaixo dos campos)

2. Localize o botão laranja:  
   **`⬆️ ATUALIZAR BASE / ROTA`**

3. Clique neste botão  
   → Uma janela vai aparecer por cima da tela com o título  
   **"Atualizar Base / Rota"**

---

### Passo 6 — Selecionar o arquivo Base.csv

1. Na janela que abriu, você vai ver dois blocos de upload

2. No **primeiro bloco** (Base), clique na área cinza:  
   **`📁 Selecionar arquivo Base.csv`**  
   → Uma janela de seleção de arquivo do seu computador vai abrir

3. Navegue até a pasta **Downloads**

4. Selecione o arquivo **Base.csv** que você baixou no Passo 2

5. Clique em **Abrir**  
   → A área vai mostrar o nome do arquivo e embaixo aparece em verde:  
   **"XXXX sacas carregadas"** (onde XXXX é o número de linhas da planilha)

> **Se aparecer 0 sacas:** o arquivo pode estar errado (verifique se é a aba Base)

---

### Passo 7 — Selecionar o arquivo Rota.csv

1. No **segundo bloco** (Rota), clique na área cinza:  
   **`📁 Selecionar arquivo Rota.csv`**  
   → A janela de seleção de arquivo vai abrir novamente

2. Navegue até a pasta **Downloads**

3. Selecione o arquivo **Rota.csv** que você baixou no Passo 3

4. Clique em **Abrir**  
   → Embaixo aparece em verde:  
   **"XXXX sacas carregadas"**

> **Atenção:** O botão `IMPORTAR PARA O BANCO` só fica ativo quando pelo menos
> um dos dois arquivos foi carregado com sucesso

---

### Passo 8 — Importar os dados

1. Clique no botão verde:  
   **`IMPORTAR PARA O BANCO`**

2. Uma barra azul de progresso vai aparecer e avançar  
   → O app está apagando os dados antigos e gravando os novos

3. **Aguarde** até a barra chegar em 100%  
   → Isso pode levar de 5 a 30 segundos dependendo do tamanho da planilha

4. Quando terminar, aparece uma mensagem:  
   **"Base: X linhas importadas. Rota: Y linhas importadas."**  
   e um alerta de confirmação na tela

5. Clique em **OK** no alerta

6. Clique em **FECHAR** para fechar a janela

---

## PARTE 3 — Confirmar que funcionou

### Passo 9 — Verificar o status das rotas

1. Na tela principal, clique no botão azul:  
   **`📊 VER STATUS ROTAS`**

2. Uma janela vai aparecer mostrando cada rota com o progresso de sacas auditadas

3. Se as rotas aparecerem com os nomes corretos, a importação funcionou

---

## Resumo Rápido (para o dia a dia)

```
1. Google Sheets → aba "Base" → Arquivo → Download → CSV
2. Google Sheets → aba "Rota" → Arquivo → Download → CSV
3. Abrir o app → botão "⬆️ ATUALIZAR BASE / ROTA"
4. Selecionar Base.csv → Selecionar Rota.csv
5. Clicar "IMPORTAR PARA O BANCO" → aguardar → OK
```

---

## Erros comuns e soluções

| Problema | Causa provável | Solução |
|---|---|---|
| "0 sacas carregadas" | Arquivo CSV errado | Verifique se baixou a aba certa |
| Botão IMPORTAR continua cinza | Nenhum arquivo válido | Selecione pelo menos um dos dois arquivos |
| Barra trava no meio | Problema de conexão | Feche e tente novamente |
| Status das rotas mostra rotas erradas | Importou o arquivo errado | Repita o processo com os arquivos corretos |

---

## Frequência recomendada

- **Todo dia** antes de começar a auditoria
- **Ou sempre** que a planilha do Sheets for atualizada com novas sacas

---

*App: https://luishenrique785.github.io/Sacas/*

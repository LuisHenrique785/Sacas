# Setup — Sistema Auditoria

## Por que Supabase?

O app precisa ler dados de uma planilha restrita ao domínio corporativo,
mas sem Apps Script, sem OAuth próprio e sem acesso ao Google Cloud Console.
O Supabase é um banco de dados PostgreSQL gratuito e independente do Google.

---

## Passo 1 — Criar projeto no Supabase (5 min)

1. Acesse **https://supabase.com** e crie uma conta (grátis)
2. Clique em **New project**
3. Escolha um nome (ex: `auditoria-sacas`) e uma senha
4. Aguarde o projeto inicializar (~1 min)

---

## Passo 2 — Criar as tabelas (SQL Editor)

No painel do Supabase, vá em **SQL Editor** e execute:

```sql
-- Tabela Base (espelho da aba "Base" do Sheets)
create table base (
  id bigserial primary key,
  qr_mae text,
  saca_id text,
  rota text
);

-- Tabela Rota (espelho da aba "Rota" do Sheets)
create table rota (
  id bigserial primary key,
  saca_id text,
  rota text
);

-- Tabela Log (registros de auditoria)
create table log (
  id bigserial primary key,
  data text,
  responsavel text,
  auditoria text,
  saca_id text,
  qtd integer,
  qr_mae text,
  rota text
);

-- Libera acesso publico via chave anon (necessario para o app funcionar)
alter table base enable row level security;
alter table rota enable row level security;
alter table log  enable row level security;

create policy "acesso publico" on base for all using (true) with check (true);
create policy "acesso publico" on rota for all using (true) with check (true);
create policy "acesso publico" on log  for all using (true) with check (true);
```

---

## Passo 3 — Importar dados do Google Sheets

### Exportar as abas como CSV

No Google Sheets, para cada aba:
`Arquivo → Fazer download → Valores separados por vírgula (.csv)`

Exporte:
- Aba **Base** → `base.csv`
- Aba **Rota** → `rota.csv`
- Aba do **Log** (1ª aba) → `log.csv` *(opcional — histórico)*

### Importar no Supabase

No painel: **Table Editor** → selecionar a tabela → **Import data from CSV**

> Certifique-se de que os cabeçalhos do CSV coincidem com os nomes das colunas:
> - `base.csv`: `qr_mae`, `saca_id`, `rota`
> - `rota.csv`: `saca_id`, `rota`
> - `log.csv`: `data`, `responsavel`, `auditoria`, `saca_id`, `qtd`, `qr_mae`, `rota`

---

## Passo 4 — Pegar as credenciais

No painel do Supabase: **Settings → API**

Copie:
- **Project URL** → `https://xyzxyz.supabase.co`
- **anon public** key → chave longa começando com `eyJ...`

---

## Passo 5 — Configurar o index.html

Abra o `index.html` e preencha as duas constantes no topo do script:

```javascript
const SUPABASE_URL = 'https://xyzxyz.supabase.co';  // sua URL
const SUPABASE_KEY = 'eyJ...';                        // chave anon public
```

Salve, faça commit e push — o app já vai funcionar sem nenhum login.

---

## Observações

- O app **não precisa de login** — qualquer um com acesso à URL consegue usar
- A chave `anon` é segura para colocar no código HTML (é pública por design)
- Para adicionar controle de acesso futuramente, configure Row Level Security no Supabase
- O log histórico do Google Sheets pode continuar existindo — basta importar o CSV

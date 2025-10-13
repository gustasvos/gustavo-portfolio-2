# Portfolio Acadêmico - FATEC SJC

## Objetivo

- Criação e organização de rotas.
- Utilização do EJS para renderizar páginas dinâmicas.
- Exibição de variáveis, arrays e objetos no HTML.
- Estruturação de um site de portfólio acadêmico.
- Requisitos GET, POST, PUT e DELETE (CRUD usando GET, POST, PUT e DELETE).

---

## Requisitos da Atividade

### 1. Configuração do Projeto
- Inicie um projeto Node.js.
- Instale e configure as dependências: express e ejs.
- Configure o Express para usar EJS como motor de visualização.

### 2. Rotas obrigatórias

#### `/` (Página Inicial):
- Deve exibir uma mensagem de boas-vindas e apresentar o nome do estudante.

#### `/sobre` (Sobre Mim):
- Deve mostrar informações básicas do estudante (nome completo, curso, instituição de ensino, ano de ingresso).
- Esses dados devem ser passados como objeto para o EJS.

#### `/disciplinas` (Minhas Disciplinas):
- Deve exibir uma lista com as disciplinas já cursadas ou em andamento.
- Os nomes das disciplinas devem ser enviados como um **array**.

#### `/projetos` (Meus Projetos):
- Deve mostrar projetos acadêmicos (ex.: título, descrição e link).
- As informações devem ser enviadas como uma **lista de objetos**.

#### `/contato` (Contato):
- Deve exibir uma página com informações de contato (e-mail e/ou telefone).

#### `/dashboard` (Dashboard):
- Deve exibir estatísticas do portfólio, como:
  - Número total de disciplinas.
  - Número de projetos concluídos.
  - Tecnologias mais usadas.

### 3. Exibição no EJS
- Utilize variáveis simples (strings, números).
- Trabalhe com arrays e objetos para exibir listas e detalhes.

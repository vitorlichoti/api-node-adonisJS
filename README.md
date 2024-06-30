# API RESTful com AdonisJS

## Descrição

Esta é uma API RESTful construída com AdonisJS para gerenciar usuários, clientes, produtos e vendas. Esta API permite operações CRUD e autenticação de usuários.

## Requisitos

- Node.js >= 14.x
- NPM >= 6.x
- MySQL

## Instalação

Siga os passos abaixo para configurar e executar o projeto.

### Clonar o Repositório

```bash
git clone git@github.com:vitorlichoti/api-node-adonisJS.git
cd api-node-adonisJS
```

### Instalar Dependências

```bash
npm install
```

### Configuração do Banco de Dados

Renomeie o arquivo .env.example para .env e atualize as configurações do banco de dados conforme necessário:

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
```

### Rodar Migrações

Execute as migrações para criar as tabelas no banco de dados:

```bash
node ace migration:run
```

### Executar o Servidor

Inicie o servidor de desenvolvimento:

```bash
adonis serve --dev
```

A API estará disponível em http://127.0.0.1:3333.

---

## Endpoints

### Autenticação

- **POST /signup**: Registro de novo usuário.
- **POST /login**: Login de usuário.
- **POST /register**: Registro de novo usuário.
- **POST /authenticate**: Autenticação de usuário.

### Clientes

- **GET /clients**: Listar todos os clientes. Requer autenticação.
- **GET /clients/:id**: Detalhar um cliente. Requer autenticação.
- **POST /clients**: Criar um novo cliente. Requer autenticação.
- **PUT /clients/:id**: Atualizar um cliente. Requer autenticação.
- **DELETE /clients/:id**: Excluir um cliente. Requer autenticação.

### Produtos

- **GET /products**: Listar todos os produtos. Requer autenticação.
- **GET /products/:id**: Detalhar um produto. Requer autenticação.
- **POST /products**: Criar um novo produto. Requer autenticação.
- **PUT /products/:id**: Atualizar um produto. Requer autenticação.
- **DELETE /products/:id**: Excluir um produto. Requer autenticação.

### Vendas

- **GET /sales**: Listar todas as vendas.
- **POST /sales**: Registrar uma nova venda. Requer autenticação.

### Telefones

- **GET /phones**: Listar todos os telefones. Requer autenticação.
- **GET /phones/:id**: Detalhar um telefone. Requer autenticação.
- **POST /phones**: Criar um novo telefone. Requer autenticação.
- **PUT /phones/:id**: Atualizar um telefone. Requer autenticação.
- **DELETE /phones/:id**: Excluir um telefone. Requer autenticação.

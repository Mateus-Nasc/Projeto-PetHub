# PetHub API

O PetHub é uma API RESTful desenvolvida para gerenciar o cadastro de pets e doadores, facilitando o processo de adoção.

## Tecnologias Utilizadas

- NestJS
- TypeScript
- TypeORM: para comunicação com o banco de dados
- PostgreSQL
- Class-Validator & Class-Transformer: Para validação e transformação de dados das requisições (DTOs)

## Funcionalidades

- CRUD Completo: Criação, leitura, atualização e remoção de Usuários e Pets.
- Relacionamento 1:N: Um doador pode ter múltiplos pets cadastrados. Foi implementada a estratégia de Cascade Delete que remove automaticamente todos os pets vinculados ao usuario(doador) que foi excluido do sistema, garantindo a Integridade Referencial no banco de dados.
- Validação Inteligente: Uso de DTOs e `@nestjs/mapped-types` (`PartialType`) para validar dados tanto na criação (POST) quanto na atualização parcial (PATCH).
- Segurança (Serialização): Futuramente farei a implementação de Interceptores Globais (`ClassSerializerInterceptor`) para garantir que dados sensíveis, como **senhas de usuários**, nunca sejam expostos nas respostas da API.

---

## Como rodar o projeto localmente

Para rodar este projeto localmente, configure as variaveis de ambiente.

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- [PostgreSQL](https://www.postgresql.org/) rodando localmente (ou via Docker).
- Configurar as credenciais do banco de dados. Para isso siga como exemplo o modelo .env.exemplo

1. Clone o repositório:

   ```bash
   git clone [https://github.com/Mateus-Nasc/Projeto-PetHub.git](https://github.com/Mateus-Nasc/Projeto-PetHub.git)

   ```

2. entre na pasta e Instale as dependencias:

   ```bash
      cd backend
   ```
   ```bash
      npm install
   ```

3. Crie um arquivo .env na raiz do projeto (no caso na pasta backend):

   ```bash
   DB_TYPE=postgres
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=sua_senha
   DB_DATABASE=nome_do_banco
   ```

### Passo Final

Agora para o nest gerenciar as variaveis de ambiente do seu .env execute o
   comando:

```bash
 npm i @nestjs/config
```

## Executando o Projeto

Para iniciar o servidor:

`npm run start:dev`

A API estara disponivel em http://localhost:3000.

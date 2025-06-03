# Sistema de Autenticação com JWT em Node.js e Express

## Colaboradores
- [larissadossantosdarocha](https://github.com/larissadossantosdarocha)
- [larissavitoria06](https://github.com/larissavitoria06)

---

## Sobre o projeto

Este projeto implementa uma autenticação simples usando JSON Web Tokens (JWT) em um servidor Node.js com Express.

---

## Funcionalidades

- Servidor Express configurado para usar variáveis de ambiente (`.env`)
- Rotas organizadas em arquivos separados (`login.js` e `posts.js`)
- Middleware para validar tokens JWT
- Dados simulados de posts em um array para testes

---

## Estrutura do projeto

├── controllers
│ ├── login.js # Função que simula login e gera token JWT
│ └── posts.js # Funções que manipulam dados de posts
├── data
│ └── posts.js # Array com dados simulados de posts
├── middlewares
│ └── auth.js # Middleware para validar token JWT
├── routes
│ ├── login.js # Rota para login
│ └── posts.js # Rota para posts protegida por autenticação
├── server.js # Inicializa o servidor Express
└── .env # Variáveis de ambiente, incluindo SECRET_JWT


---

## Detalhes dos arquivos

### controllers/login.js

- Simula um login com credenciais fixas (e-mail e senha)
- Gera um token JWT com validade de 2 minutos usando uma chave secreta
- Retorna o token para o cliente

### controllers/posts.js

- Trabalha com o array de posts simulados
- Fornece funções para listar, buscar e ordenar posts

### data/posts.js

- Exporta um array de objetos representando posts
- Cada objeto contém:
  - `id`: número identificador único
  - `title`: título do post
  - `summary`: resumo curto do conteúdo
  - `date`: data da publicação no formato `YYYY-MM-DD`
  - `views`: número de visualizações
  - `likes`: número de curtidas

### middlewares/auth.js

- Middleware que verifica se o token JWT está presente e é válido
- Se o token for válido, anexa os dados do usuário à requisição e permite acesso
- Se o token for inválido ou ausente, bloqueia o acesso com erro 401

### routes/login.js

- Define a rota POST `/login` para receber dados de autenticação
- Chama o controlador que gera o token JWT após validação

### routes/posts.js

- Define a rota GET `/posts` protegida por middleware de autenticação JWT
- Somente usuários autenticados podem acessar essa rota e visualizar os posts

### server.js

- Inicializa o servidor Express
- Configura o middleware para interpretar JSON
- Importa e usa as rotas e middlewares
- Escuta requisições na porta 3000

---

### Importância das rotas

**-/login (POST)**
Permite que usuários façam login e obtenham um token JWT válido para acessar o sistema. Essencial para garantir que apenas usuários autorizados consigam prosseguir.
**-/posts (GET)**
Rota protegida que disponibiliza dados sensíveis (posts). Apenas usuários com token válido podem acessá-la, garantindo a segurança e privacidade das informações.

### Tecnologias utilizadas
-Node.js
-Express
-JSON Web Token (jsonwebtoken)
-dotenv
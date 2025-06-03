# Login - Auth

Projeto feito em dupla com [larissadossantosdarocha](https://github.com/larissadossantosdarocha)

## 📦 Sobre o projeto

Autenticação simples com JWT em Node.js usando Express.

## 🚀 Funcionalidades

- Servidor Express com leitura de variáveis `.env`
- Rotas separadas (`login.js`, `posts.js`)
- Middleware de autenticação JWT
- Lista de posts simulada em um array

## 📂 Estrutura

### `controllers/login.js`

- Simula um login com e-mail e senha fixos
- Gera e retorna um token JWT válido por 2 minutos

### `controllers/posts.js`

- Pode usar os dados do array `posts.js` para criar rotas como:
  - Listar todos os posts
  - Buscar post por ID
  - Ordenar ou filtrar posts

  ### `data/posts.js`

- Exporta um array com posts simulados
- Cada post tem: `id`, `title`, `summary`, `date`, `views`, `likes`

### `middlewares/auth.js`

- Middleware que verifica se o token JWT é válido
- Se for válido, libera acesso à rota
- Se não for, bloqueia com erro

### `server.js`

- Inicia o servidor Express
- Usa JSON como middleware
- Importa e usa as rotas
- Executa na porta listening on 3000

# Routes ⤵

## login.js ⤵

- Cria uma rota POST em `/login` que chama a função do controlador de login.
- Importância: permite que usuários se autentiquem, garantindo que só pessoas autorizadas acessem informações confidenciais. Essencial para a segurança do sistema.

## posts.js ⤵

- Cria uma rota GET em `/posts` protegida por um middleware que valida o token antes de chamar o controlador de posts.
- Importância: garante que apenas usuários autenticados possam acessar dados sensíveis, protegendo a privacidade e segurança das informações.









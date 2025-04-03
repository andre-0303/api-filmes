# 🎬 Z-Flix API

API para gerenciamento de filmes, permitindo listar, adicionar, atualizar e deletar filmes armazenados em um banco de dados MongoDB.

## 🚀 Tecnologias Utilizadas

- **Node.js** + Express.js
- **MongoDB** + Mongoose
- **Cors** para controle de acesso
- **Axios** para requisições HTTP (no frontend)

## 📌 Funcionalidades

- 📜 **Listar** todos os filmes
- ➕ **Adicionar** um novo filme
- 📝 **Atualizar** um filme existente
- ❌ **Deletar** um filme

## 📂 Estrutura do Projeto

```
📁 backend
│── 📄 index.js       # Configuração principal do servidor Express
│── 📄 db.js          # Conexão com o MongoDB
│── 📁 models         # Modelos do banco de dados
│   └── 📄 Filme.js   # Schema do filme
└── 📄 package.json   # Dependências do projeto
```

## 🔧 Configuração e Instalação

### 1️⃣ Clone o repositório
```sh
git clone https://github.com/seu-usuario/zflix-api.git
cd zflix-api
```

### 2️⃣ Instale as dependências
```sh
npm install
```

### 3️⃣ Configure o MongoDB
No arquivo `db.js`, insira sua **MongoDB URI** correta:
```js
const mongoURI = "mongodb+srv://usuario:senha@cluster.mongodb.net/nomedobanco";
```

### 4️⃣ Inicie o servidor
```sh
npm run dev
```
> O servidor rodará em: **http://localhost:3000**

## 🔌 Endpoints da API

| Método | Rota         | Descrição                        |
|--------|-------------|--------------------------------|
| GET    | `/filmes`   | Retorna todos os filmes        |
| POST   | `/filmes`   | Adiciona um novo filme         |
| PUT    | `/filmes/:id` | Atualiza um filme pelo ID     |
| DELETE | `/filmes/:id` | Remove um filme pelo ID       |

## 🛠 Testando com Thunder Client
1. Instale a extensão "Thunder Client" no VS Code.
2. Crie uma requisição `GET` para `http://localhost:3000/filmes`.
3. Para adicionar um filme, envie uma requisição `POST` com um JSON:
```json
{
  "titulo": "Novo Filme",
  "ano": 2024,
  "genero": "Ação",
  "diretor": "Diretor Famoso",
  "poster": "https://link-para-imagem.com/poster.jpg"
}
```

## 📜 Licença
Este projeto está sob a licença MIT.

---
Feito com ❤️ por **Bandeira Dev** 🚀


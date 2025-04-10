import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import Filme from "./models/Filme.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Conectar ao MongoDB
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Rotas
app.get("/", (req, res) => {
  res.send("Rota raiz");
});

// Listar filmes
app.get("/filmes", async (req, res) => {
  try {
    const filmes = await Filme.find();
    res.json(filmes);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar filmes" });
  }
});

// Adicionar um novo filme
app.post("/filmes", async (req, res) => {
  try {
    const novoFilme = new Filme(req.body);
    await novoFilme.save();
    res.status(201).json({ mensagem: "Filme adicionado!", filme: novoFilme });
  } catch (error) {
    res.status(400).json({ erro: "Erro ao adicionar filme" });
  }
});

// Deletar filme
app.delete("/filmes/:id", async (req, res) => {
  try {
    await Filme.findByIdAndDelete(req.params.id);
    res.json({ mensagem: "Filme deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao deletar filme" });
  }
});

// Atualizar filme
app.put("/filmes/:id", async (req, res) => {
  try {
    const filmeAtualizado = await Filme.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ mensagem: "Filme atualizado!", filme: filmeAtualizado });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao atualizar filme" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

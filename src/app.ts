import "reflect-metadata";
import { AppDataSource } from "./config/ormconfig";
import { config } from "dotenv";
import express from 'express'
import userRoutes from './routes/userRoutes'

config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use("/users", userRoutes);


app.get("/", (req, res) => {
  res.send("Servidor rodando!");
});



AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado!");
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
    
  })
  .catch((error) => console.log("Erro ao conectar:", error));
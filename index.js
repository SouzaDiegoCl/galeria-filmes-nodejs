//Importando o express
import express from "express";

//Conexao
import connection from "./config/sequelize-config.js";

//Models
import Filme from "./models/Filmes.js";

//Outras rotas

import FilmeController from "./controllers/FilmeControllers.js";

//Conexão
connection
  .authenticate()
  .then(() => {
    console.log(`Conexão estabelecida com o banco de dados!`);
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", FilmeController);

// Criando o banco de dados se ele não existir
connection
  .query(`CREATE DATABASE IF NOT EXISTS galeria_filmes_bd;`)
  .then(() => {
    console.log("O banco de dados está criado!");
  })
  .catch((error) => {
    console.log(error);
  });



const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro!${error}`);
  } else {
    console.log(`Servidor inciado com sucesso em: http://localhost:${port}.`);
  }
});

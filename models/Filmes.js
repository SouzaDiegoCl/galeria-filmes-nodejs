import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";

const Filme = connection.define("filmes", {
  título: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  duracao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  diretor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  distribuidora: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  classificacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Filme.sync({ force: false });
export default Filme;

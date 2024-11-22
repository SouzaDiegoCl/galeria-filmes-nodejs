import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";

const Filme = connection.define("filmes", {    
  poster_image_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  wallpaper_image_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  distribuidora: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  diretor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Filme.sync({ force: true });
export default Filme;

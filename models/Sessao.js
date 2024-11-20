import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config";

const Sessao = connection.define("sessoes", {
  horario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

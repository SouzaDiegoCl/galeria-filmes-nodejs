import { Sequelize } from "sequelize";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: 'galeria_filmes_bd',
  timezone: "-03:00",
});

export default connection;










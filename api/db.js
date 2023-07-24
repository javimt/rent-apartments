require("dotenv").config();
const { Sequelize } = require("sequelize");
const path = require("path");
const fs = require("fs");

const sequelize = new Sequelize(process.env.SEQUELIZE_URL, {
  native: false,
  protocol: "postgres",
  dialect: "postgres",
  logging: false,
});

const models = [];
// traer modelos
fs.readdirSync(path.join(__dirname, "src", "models"))
  .filter((dir) => dir.indexOf(".") != 0 && dir.slice(-3) === ".js")
  .forEach((dir) =>
    models.push(require(path.join(__dirname, "src", "models", dir)))
);

//inyeccion de sequelize
models.forEach((model) => model(sequelize));

const {} = sequelize.model;

// relaciones

module.exports = {
  ...sequelize.models,
  connection: sequelize,
};

require("dotenv").config();
const { Sequelize } = require("sequelize");
const path = require("path");
const fs = require("fs");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  native: false,
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
  /* dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }, */
});

const models = {};
fs.readdirSync(path.join(__dirname, "src", "models"))
  .filter((file) => file.endsWith(".js"))
  .forEach((file) => {
    const model = require(path.join(__dirname, "src", "models", file))(sequelize);
    models[model.name] = model;
  });

Object.keys(models).forEach((e) => {
  if (models[e].associate) {
    models[e].associate(models);
  }
});

module.exports = {
  ...sequelize.models,
  connection: sequelize,
};

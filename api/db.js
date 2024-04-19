require("dotenv").config();
const { Sequelize } = require("sequelize");
const path = require("path");
const fs = require("fs");
const pg = require('pg')

function setWorkSeting(production = false, ssl= false){
  const options = {
    native: false,
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions:pg,
    logging: false,
    // dialectOptions: {
    //   ssl: {
    //     require: ssl,
    //     rejectUnauthorized: false
    //   }
    // }, 
  }
    let url = production ? process.env.PRODUCTION_URL_DATABASE : process.env.DATABASE_URL
  let sequelize;
   return new Sequelize(url, options)
}

const sequelize = setWorkSeting(true)

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

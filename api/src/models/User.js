const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {

    id: {
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    auth0_sub: { // Nuevo campo para el identificador de Auth0
      type: DataTypes.STRING,
      allowNull: true, // Permitir null para registros manuales
      unique: true, // Cada usuario de Auth0 debe tener un auth0_sub único
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    image: {
      type: DataTypes.STRING
    },
    addres: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false
    },
    phone: {
      type: DataTypes.INTEGER,
    },
    country: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
}
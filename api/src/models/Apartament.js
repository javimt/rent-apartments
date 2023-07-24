const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Apartament", {

    image: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    ubication: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.FLOAT
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    
  });
};
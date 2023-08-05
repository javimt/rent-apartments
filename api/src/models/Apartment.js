const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Apartment", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    image: {
      type: DataTypes.TEXT,
    },
    rent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    ubication: {
      type: DataTypes.STRING,
    },
    availability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    description: {
      type: DataTypes.STRING,
    },
  });
};

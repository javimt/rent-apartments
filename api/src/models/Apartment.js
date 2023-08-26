const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Apartment", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    image: {
      type: DataTypes.TEXT,
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
    bedrooms: {
      type: DataTypes.INTEGER
    },
    bathrooms: {
      type: DataTypes.INTEGER
    },
    apartmenNumber: {
      type: DataTypes.STRING
    }
  },{timestamps: false});
};

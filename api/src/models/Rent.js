const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Rent", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },/* 
    rent: {
      type: DataTypes.STRING
    }, */
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },{ timestamps: false } );
};

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Message", {

    response: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
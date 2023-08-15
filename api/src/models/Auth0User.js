const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Auth0User", {
    
    sub: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    given_name: {
      type: DataTypes.STRING,
    },
    family_name: {
      type: DataTypes.STRING,
    },
    nickname: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    picture: {
      type: DataTypes.STRING,
    },
  });
};

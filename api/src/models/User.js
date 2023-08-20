const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {

    password: {
      type: DataTypes.STRING,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    lastname: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false
    },
    role: {
      type: DataTypes.ENUM("user", "admin", "superAdmin"),
      defaultValue: "user"
    }
  });
}

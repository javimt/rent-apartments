const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("User", {

    email: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.ENUM("user", "admin", "superAdmin"),
      defaultValue: "user"
    },
    banner: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {timestamps: false});
  User.associate = (models) => {
    User.hasMany(models.Apartment, { foreignKey: 'userId' });
    User.hasMany(models.Rent, { foreignKey: 'userId' });
    User.hasMany(models.Sale, { foreignKey: 'userId' });
    User.hasMany(models.Transaction);
  }
  return User;
}

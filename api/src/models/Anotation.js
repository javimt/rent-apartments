const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Anotations = sequelize.define("Anotations", {

    pending: {
      type: DataTypes.TEXT
    },
    observations: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.ENUM("pending", "resolved"),
      allowNull: false,
      defaultValue: "pending",
    },
  }, {timestamps: false});
  Anotations.associate = (models) => {
    Anotations.belongsTo(models.Apartment);
  }
  return Anotations;
}
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Rent = sequelize.define("Rent", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
    status: {
      type: DataTypes.ENUM('pending', 'active', 'expired', 'cancelled'),
      defaultValue: 'pending'
    }
  }, {timestamps: false});
  Rent.associate = (models) => {
    Rent.belongsTo(models.User, { foreignKey: 'userId' });
    Rent.belongsTo(models.Apartment, { foreignKey: 'apartmentId' });
  }
  return Rent;
};

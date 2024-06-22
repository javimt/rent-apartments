const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Sale = sequelize.define("Sale", {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {timestamps: false});
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'userId' });
    Sale.belongsTo(models.Apartment, { foreignKey: 'apartmentId' });
    Sale.hasMany(models.Transaction)
    Sale.belongsToMany(models.Exchange,{through: 'sale-exchange'}) 
  }
  return Sale;
};
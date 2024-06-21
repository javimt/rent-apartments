const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Transaction = sequelize.define("Transaction", {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    paypalId:{
      type:DataTypes.STRING
    },
    date: {
      type: DataTypes.DATEONLY
    },
    amount: {
      type: DataTypes.JSON
    },
    
  },{timestamps: false});
  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Rent)
    Transaction.belongsTo(models.Sale)
  }
  return Transaction;
}
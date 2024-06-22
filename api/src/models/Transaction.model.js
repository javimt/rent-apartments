const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const date = new Date()
  const Transaction = sequelize.define("Transaction", {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    paypalToken: {
      type: DataTypes.STRING
    },
    payerID:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    date: { //fecha en la que se genera la transaccion!
      type: DataTypes.DATEONLY,
      defaultValue: date
    },
    amount: { //monto de la transaccion
      type: DataTypes.JSON
    },
    status:{
      type: DataTypes.ENUM('success')
    }

  }, { timestamps: false });
  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Rent)
    Transaction.belongsTo(models.Sale)
  }
  return Transaction;
}
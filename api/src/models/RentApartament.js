const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Shoping", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    apartament_amount: {
      type: DataTypes.JSON,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  { timestamps: false }
  );
};

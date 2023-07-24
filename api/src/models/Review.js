const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Review", {
    
    comment: {
      type: DataTypes.TEXT,
    },
    rating:{
      type:DataTypes.FLOAT,
      defaultValue: 0,
      allowNull:false
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

  });
};

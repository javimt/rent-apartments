const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const City = sequelize.define('City', {
    
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    city: {
      type: DataTypes.STRING
    },
    barrio: {
      type: DataTypes.STRING
    }
  },{timestamps: false});
    City.associate = (models) => {
    City.hasMany(models.Apartment);
  };
  return City;
}
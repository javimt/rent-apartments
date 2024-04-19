const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Apartment = sequelize.define("Apartment", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    availability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    description: {
      type: DataTypes.STRING,
    },
    bedrooms: {
      type: DataTypes.INTEGER
    },
    size: {
      type: DataTypes.STRING
    },
    bathrooms: {
      type: DataTypes.INTEGER
    },
    urbanizacion: {
      type: DataTypes.STRING
    },
    lat: {
      type: DataTypes.DECIMAL(10, 6)
    },
    lon: {
      type: DataTypes.DECIMAL(10, 6)
    },
    status: {
      type: DataTypes.ENUM("rent", "sale", "sold"),
      allowNull: false,
    },
  },{timestamps: false});
  Apartment.associate = (models) => {
    Apartment.belongsTo(models.User, { foreignKey: 'userId' });
    Apartment.hasMany(models.Rent, { foreignKey: 'apartmentId' });
    Apartment.hasMany(models.Sale, { foreignKey: 'apartmentId' });
    Apartment.hasMany(models.Transaction);
    Apartment.belongsTo(models.City);
  }
  return Apartment;
};

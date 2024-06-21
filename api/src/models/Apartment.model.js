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
      type: DataTypes.TEXT,
    },
    bedrooms: {
      type: DataTypes.INTEGER
    },
    size: {
      type: DataTypes.FLOAT
    },
    rating: {
      type: DataTypes.JSON
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
    rentalType: {
      type: DataTypes.ENUM("monthly", "daily"),
      allowNull: false,
      defaultValue: "monthly"
    },
    services: {
      type: DataTypes.FLOAT
    }
  },{timestamps: false});
  Apartment.associate = (models) => {
    Apartment.belongsTo(models.User, { foreignKey: 'userId' });
    Apartment.hasMany(models.Rent, { foreignKey: 'apartmentId' });
    Apartment.hasMany(models.Sale, { foreignKey: 'apartmentId' });
    Apartment.belongsTo(models.City);
    Apartment.hasMany(models.Anotations);
  }
  return Apartment;
};

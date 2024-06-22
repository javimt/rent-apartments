const { DataTypes } = require("sequelize")

                     
module.exports = (sequelize)=>{
    const Exchange = sequelize.define('Exchange', {
        currency:{
            type: DataTypes.STRING,
            allowNull:false
        },
        value:{
            type: DataTypes.FLOAT,
            allowNull:false
        },
        date:{
            type:DataTypes.DATEONLY,
            defaultValue:new Date()
        }
    })

    Exchange.associate = (models)=>{
        Exchange.belongsToMany(models.Rent,{through: 'rent-exchange'}) 
        Exchange.belongsToMany(models.Sale,{through: 'sale-exchange'})
    }
    return Exchange
}
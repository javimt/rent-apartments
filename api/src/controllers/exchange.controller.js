const { Exchange } = require('../../db')
const {resSender, HttpStatusCodes} = require('../helpers/resSender.helper')

module.exports = {
    getExchange: async (req, res, next)=>{
        try {
            const exchange = await Exchange.findByPk(1)
            resSender(exchange, HttpStatusCodes.aceptado)
        } catch (error) {
            next(error)
        }
    }
}
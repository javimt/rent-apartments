const { Exchange } = require('../../db')
const axios = require('axios')

const getExchange = async ()=>{
    console.log('get exchange')
    try {
        const {data:{conversion_rates:{COP}}} = await axios.get(process.env.EXCHANGE_URL)
        const exchange = await Exchange.update({value:COP.toFixed(2), date:new Date()},{where:{currency:'COP'}})
        console.log('se actualizo el tipo de cambio!')
        console.log(exchange)
    } catch (error) {
        console.error(error)
    }

  }

  module.exports = {
    getExchange
  }
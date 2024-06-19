const { application } = require("express")
const axios = require('axios')
const { resSender } = require("../helpers/resSender.helper")
  

module.exports = {
    createOrder: async (req, res, next)=>{

        try {
            const order= {
                intent:'CAPTURE',
                purchase_units:[
                    {
                        amount:{
                            currency_code: 'USD',
                            value:'100.00'
                        }
                    }
                ],
                application_context: {
                    brand_name:'Mi Tienda',
                    landing_page: 'NO_PREFERENCE',
                    user_action: 'PAY_NOW',
                    return_url:`${process.env.API_DEV_URL}paypal/capture-order`,
                    cancel_url:`${process.env.API_DEV_URL}paypal/cancel-order`
                }
            }
            
            const params = new URLSearchParams()
            params.append('grant_type', 'client_credentials')
            const {data:{access_token}} = await axios.post(`${process.env.PAYPAL_SANDBOX_URL}v1/oauth2/token`,params, {
                auth:{
                    username: process.env.PAYPAL_CLIENT_ID,
                    password:process.env.PAYPAL_SECRET_KEY
                }
            })
          

            //se debe cambiar la url sandbox por la url de produccion
            const response = await axios.post(`${process.env.PAYPAL_SANDBOX_URL}v2/checkout/orders`, order, {
                headers:{
                    Authorization:`Bearer ${access_token}`
                }
            })

            console.log(response.data)
            res.redirect(response.data.links[1].href)
        } catch (error) {
            next(error)
        }
    },
    captureOrder: async (req, res, next)=>{

        try {
            
        } catch (error) {
            next(error)
        }
    },
    cancelOrder: async (req, res, next)=>{

        try {
            
        } catch (error) {
            next(error)
        }
    }
}
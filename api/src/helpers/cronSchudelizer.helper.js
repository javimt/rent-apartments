const cron = require("node-cron");

const axios = require('axios')
const { checkExpiredRents } = require("../sendEmails/rentExpiration");
const { sendReminderEmails } = require("../sendEmails/sendEmails");
const { sendMailPending } = require("../sendEmails/sendMailPending");
const { defaults } = require("pg");
const { getExchange } = require("../utilities/getChange");



module.exports = {
    startCron:()=>{
        
        cron.schedule("0 12 * * *", () => {
            console.log("Verifying expired rentals...");
            checkExpiredRents();
          });
          
          cron.schedule("0 0 * * *", () => {
            console.log("Verifying expired rentals...");
            checkExpiredRents();
          });
          
          cron.schedule('01 12 * * *', () => {
            console.log('Ejecutando tarea cron para enviar correos electrónicos de recordatorio...');
            sendReminderEmails();
          });
          
          cron.schedule('01 0 * * *', () => {
            console.log('Ejecutando tarea cron para enviar correos electrónicos de recordatorio...');
            sendReminderEmails();
          });
          
          cron.schedule('32 13 * * *', () => {
            console.log('Ejecutando tarea cron para enviar correos electrónicos de pendientes...');
            sendMailPending();
          });

          cron.schedule('0 11 * * *', getExchange)
          cron.schedule('0 18 * * *', getExchange)
    }
}



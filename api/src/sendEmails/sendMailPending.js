const { Anotations, Apartment } = require("../../db");
const { sendMail } = require('./mailer');

module.exports = {

  sendMailPending: async () => {
    try {
      const anotations = await Anotations.findAll({
        where: {
          status: 'pending',
        },
        attributes: ['pending'],
        include: {
          model: Apartment,
          attributes: ['urbanizacion']
        },
      })
  
      if(anotations.length === 0) {
        console.log("no hay anotaciones pendientes");
      } else {
        // Enviar correo al administrador con las anotaciones pendientes
        const adminEmail = 'javiergarciaplata69@gmail.com'; 
        const subject = 'Anotaciones Pendientes';
        const html = `Aquí están las anotaciones pendientes: ${JSON.stringify(anotations)}`;
        await sendMail(adminEmail, subject, html);
      }
      console.log(anotations);
    } catch (error) {
      console.error(error);
    }
  }
}
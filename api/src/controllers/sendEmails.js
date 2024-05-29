const { User, Rent, Apartment } = require("../../db");
const { sendMail } = require("../helpers/mailer");
const { Op } = require('sequelize');
const moment = require('moment-timezone');

module.exports = {
  sendReminderEmails: async () => {
    try {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 1);
      //const oneHourLater = new Date(currentDate);
      //oneHourLater.setHours(currentDate.getHours() - 12);
      //const oneHourBefore = new Date(currentTime.getTime() - (1 * 60 * 60 * 1000)); // una horan antes de finalizar la renta

      const upcomingRents = await Rent.findAll({
        where: {
          endDate: {
            [Op.lte]: currentDate, // asegura que el email se envie faltando un dia o menos
          },
          status: "active",
        },
        include: [{ model: User }, { model: Apartment }],
      });

      const mailPromises = upcomingRents.map((rent) => {
        const user = rent.User;
        const subject = "Recordatorio: Calificación de tu apartamento rentado";
        const text = `Hola ${user.name},\n\nTu renta finalizará en tres días. Por favor califica el apartamento que rentaste.`;
        const html = `
        <p>Hola <strong>${user.name}</strong>,</p>
        <p>Tu renta finalizará en tres días. Por favor califica el apartamento que rentaste.</p>
        <a href="https://www.medellinfurnishedapartment.com/#/apartment/${rent.apartmentId}">Calificar</a>`;

        return sendMail(user.email, subject, text, html);
      });

      await Promise.all(mailPromises);

      console.log(
        "Correos electrónicos de recordatorio enviados a los usuarios con rentas próximas a finalizar."
      );
    } catch (error) {
      console.error(
        "Error al enviar los correos electrónicos de recordatorio:",
        error
      );
    }
  },
};

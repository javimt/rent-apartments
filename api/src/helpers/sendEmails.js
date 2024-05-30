const { User, Rent, Apartment } = require("../../db");
const { sendMail } = require("./mailer");
const { Op } = require('sequelize');

module.exports = {
  sendReminderEmails: async () => {
    try {
      const currentDate = new Date();
      const oneDayBefore = new Date();
      oneDayBefore.setDate(currentDate.getDate() + 1);

      const upcomingRents = await Rent.findAll({
        where: {
          endDate: {
            [Op.lte]: oneDayBefore, // asegura que el email se envie faltando un dia o menos
          },
          status: "active",
        },
        include: [{ model: User }, { model: Apartment }],
      });
      console.log("🚀 ~ sendReminderEmails: ~ upcomingRents:", upcomingRents);

      const mailPromises = upcomingRents.map((rent) => {
        const user = rent.User;
        const subject = "Recordatorio: Calificación de tu apartamento rentado";
        const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0;">
          <div style="text-align: center; padding-bottom: 20px;">
            <img src="https://res.cloudinary.com/dlwjdmlpx/image/upload/q_100/v1693939333/PROYECTO%20PROPIEDADES/logo_rent_yurhr6.png" alt="Logo" style="max-width: 200px;">
          </div>
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #333;">Hola <strong>${user.name}</strong>,</h2>
            <p>Queremos recordarte que tu renta finalizará en menos de 24 horas.</p>
            <p>Por favor, toma un momento para calificar el apartamento que rentaste. Tu opinión es muy importante para nosotros y para futuros inquilinos.</p>
            <p style="text-align: center;">
              [1, 2, 3, 4, 5].map(rating => 
                <a href="http://localhost:3001/apartment/rating?apartmentId=${rent.apartmentId}&rating=${rating}" 
                  style="text-decoration: none; color: #FFD700; font-size: 24px;">
                  &#9733;
                </a>
              ).join('')}
            </p>
          </div>
          <div style="padding-top: 20px; text-align: center; color: #888;">
            <p>Gracias por elegir Medellin Furnished Apartments.</p>
            <p><small>&copy; 2024 Medellin Furnished Apartments. Todos los derechos reservados.</small></p>
          </div>
        </div>`;

        return sendMail(user.email, subject, html);
      });

      Promise.all(mailPromises).then(() => {
        console.log(
          "Correos electrónicos de recordatorio enviados a los usuarios con rentas próximas a finalizar."
        );
      })
      
    } catch (error) {
      console.error(
        "Error al enviar los correos electrónicos de recordatorio:",
        error
      );
    }
  },
};

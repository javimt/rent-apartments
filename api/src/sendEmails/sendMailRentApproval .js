const { sendMail } = require('./mailer');
const { User, Apartment, Rent } = require("../../db");

module.exports = {
  sendMailRentApproval: async (rentId) => {
    try {
      const rent = await Rent.findByPk(rentId, {
        include: [User, Apartment],
      });

      if (!rent) {
        throw new Error('Rent not found');
      }

      const user = rent.User;
      console.log("🚀 ~ sendMailRentApproval: ~ user:", user)
      const apartment = rent.Apartment;
      console.log("🚀 ~ sendMailRentApproval: ~ apartment:", apartment)
      const adminEmail = 'javiergarciaplata69@gmail.com';
      const subject = "Solicitud de Alquiler Aprobada";
      const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0;">
          <div style="text-align: center; padding-bottom: 20px;">
            <img src="https://res.cloudinary.com/dlwjdmlpx/image/upload/q_100/v1693939333/PROYECTO%20PROPIEDADES/logo_rent_yurhr6.png" alt="Logo" style="max-width: 200px;">
          </div>
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #333;">Hola <strong>${user.name}</strong>,</h2>
            <p>Nos complace informarte que tu solicitud de alquiler para el apartamento <strong>${apartment.urbanizacion}</strong> ha sido aprobada.</p>
            <p>Detalles de la renta:</p>
            <ul>
              <li><strong>Fecha de Inicio:</strong> ${new Date(rent.startDate).toLocaleDateString()}</li>
              <li><strong>Fecha de Fin:</strong> ${new Date(rent.endDate).toLocaleDateString()}</li>
              <li><strong>Precio:</strong> ${rent.priceAtRent}</li>
              <li><strong>Servicios:</strong> ${rent.servicesAtRent}</li>
            </ul>
            <p>Gracias por elegirnos.</p>
          </div>
          <div style="padding-top: 20px; text-align: center; color: #888;">
            <p>Gracias por elegir Medellin Furnished Apartments.</p>
            <p><small>&copy; 2024 Medellin Furnished Apartments. Todos los derechos reservados.</small></p>
          </div>
        </div>`;

      await sendMail(adminEmail, subject, html);
    } catch (error) {
      console.error('Error al enviar el correo de aprobación de renta:', error);
    }
  }
}

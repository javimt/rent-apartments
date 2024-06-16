const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Error al conectar con el servidor de correo:', error);
  } else {
    console.log('Servidor de correo conectado:', success);
  }
});

const sendMail = (to, subject, html) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    html
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendMail };

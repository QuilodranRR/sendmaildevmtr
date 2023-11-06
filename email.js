const nodemailer = require('nodemailer');
const fs = require('fs');
// Configura el transporte de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Ejemplo: 'Gmail'
  auth: {
    user: 'ricardoquilodran28@gmail.com', // Tu dirección de correo electrónico
    pass: 'ziaj mkqj cntz fipo', // Tu contraseña
  },
});

// Función para enviar un correo electrónico con un archivo adjunto
function enviarCorreo(destinatario, asunto, texto, filePath) {
  // Lee el contenido del archivo PDF
  const pdfContent = fs.readFileSync(filePath);

  const opcionesCorreo = {
    from: 'ricardoquilodran28@gmail.com',
    to: destinatario,
    subject: asunto,
    text: texto,
    attachments: [
      {
        filename: 'CheckList_Equipos_Criticos.pdf',
        content: pdfContent, // Adjunta el contenido del archivo PDF
      },
    ],
  };

  transporter.sendMail(opcionesCorreo, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado con éxito:', info.response);
    }
  });
}

module.exports = enviarCorreo;
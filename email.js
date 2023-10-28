const nodemailer = require('nodemailer');

// Configura el transporte de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Ejemplo: 'Gmail'
  auth: {
    user: 'ricardoquilodran28@gmail.com', // Tu dirección de correo electrónico
    pass: 'ziaj mkqj cntz fipo', // Tu contraseña
  },
});

// Función para enviar un correo electrónico con un archivo adjunto
function enviarCorreo(destinatario, asunto, texto, archivoAdjunto) {
  const opcionesCorreo = {
    from: 'ricardoquilodran28@gmail.com',
    to: destinatario,
    subject: asunto,
    text: texto,
    attachments: [
      {
        filename: 'archivo.pdf', // Nombre del archivo adjunto
        content: archivoAdjunto, // Contenido del archivo adjunto (PDF en formato Buffer)
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

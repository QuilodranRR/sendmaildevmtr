// email.js

const nodemailer = require('nodemailer');
const fs = require('fs');

// Configura el transporte de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Ejemplo: 'Gmail'
  auth: {
    user: 'permanencia.comunicacionesmetro@gmail.com', // Tu dirección de correo electrónico
    pass: 'fgun mjek rwej jbij', // Tu contraseña
  },
});

// Función para enviar un correo electrónico con un archivo adjunto
function enviarCorreo(destinatario, asunto, texto, filePath, ccList,jornada,turno,nombresProfesionales) {
  // Lee el contenido del archivo PDF
  const pdfContent = fs.readFileSync(filePath);

  const fechaEnvio = new Date().toLocaleString();
  const textoConFecha = `${texto}\nNombres Encargados : ${nombresProfesionales}\nJornada : ${jornada}\nTurno: ${turno} \nFecha y Hora: ${fechaEnvio} `;

  const opcionesCorreo = {
    from: 'permanencia.comunicacionesmetro@gmail.com',
    to: destinatario,
    cc: ccList.join(','),
    subject: asunto,
    text: `Respaldo de checkList equipos críticos de comunicación. \n${textoConFecha}` ,
    attachments: [
      {
        filename: `CheckList_Equipos_Criticos_Jornada:${jornada}_Turno:${turno}.pdf`,
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











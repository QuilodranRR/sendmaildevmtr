const express = require('express');
const app = express();
const multer = require('multer');
const cors = require('cors');
const puerto = process.env.PORT || 3000;
const enviarCorreo = require('./email'); // Importa la función de envío de correo.

// Configura el almacenamiento de archivos con multer.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directorio donde se guardarán los archivos.
  },
  filename: function (req, file, cb) {
    // Genera un nombre de archivo único.
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });


  


const corsOptions = {
  origin: 'http://localhost:8100', // Reemplaza con la URL de tu aplicación Angular
};

app.use(cors(corsOptions));


// Ruta para subir el archivo PDF.
app.post('/subir-pdf', upload.single('pdfData'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No se proporcionó ningún archivo PDF.' });
  }

  const filePath = req.file.path;

  // En este punto, filePath contiene la ruta del archivo PDF subido.
  // Puedes enviar este archivo por correo electrónico utilizando la función enviarCorreo.

  // Ejemplo de envío de correo electrónico.
  enviarCorreo(
    'ricardo.quilodran24@gmail.com ', // Reemplaza con la dirección de correo del destinatario.
    'Test PDF',
    'TEST ENVIO CORREO',
    filePath // Ruta del archivo adjunto.
  );

  res.status(200).json({ message: 'PDF recibido y procesado con éxito.' });
});

app.get('/', (req, res) => {
  const status = {
    "Status":"Running"
 };

 res.send(status);
 

});

app.listen(puerto, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${puerto}`);
});
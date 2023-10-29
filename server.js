const express = require('express');
const app = express();
const multer = require('multer'); // Importa la biblioteca multer.
const cors = require('cors');
const puerto = process.env.PORT || 3000;

// Configura el almacenamiento de archivos con multer.
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // El directorio donde se guardarán los archivos.
  },
  filename: function (req, file, cb) {
    // Genera un nombre de archivo único.
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });



app.use(cors());

// Ruta para subir el archivo PDF.
app.post('/subir-pdf', upload.single('pdfFile'), (req, res) => {
  if (!req.file) {
    // Si no se proporciona un archivo, devuelve un error.
    return res.status(400).json({ error: 'No se proporcionó ningún archivo PDF.' });
  }

  // En este punto, el archivo se ha subido con éxito y se puede acceder en req.file.
  // Puedes realizar las acciones necesarias, como guardar el archivo o procesarlo.

  // Ejemplo: Guardar el archivo en una carpeta específica.
  const filePath = req.file.path;

  // A partir de aquí, puedes realizar otras acciones como enviar el archivo por correo electrónico o procesarlo de la manera que necesites.

  res.status(200).json({ message: 'PDF recibido y procesado con éxito.' });
});

app.listen(puerto, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${puerto}`);
});

  

  
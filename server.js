const express = require('express');
const app = express();

const puerto = process.env.PORT || 3000; // Utiliza el puerto 3000 o un puerto definido por la variable de entorno PORT.


app.post('/subir-pdf', (req, res) => {
    // Aquí puedes procesar el PDF, guardarlo en el servidor o realizar cualquier otra acción necesaria.
  
    res.status(200).json({ message: 'PDF recibido y procesado con éxito.' });
  });




app.listen(puerto, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${puerto}`);
});


  

  
const express = require('express');
require('dotenv').config();

// console.log(process.env) 

// Crear el servidor de express

const app = express();



// Directorio público

app.use(express.static('public'));  


// Rutas

// TODO: auth // crear, login, renew
// TODO: CRUD: Eventos



// Escuchar peticiones

app.listen( process.env.PORT, () => {
  console.log(`Servido corriendo en puerto ${process.env.PORT}`);
})
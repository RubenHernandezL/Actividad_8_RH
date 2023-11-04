//requerimos express
const express = require('express');

//requerimos el cors para limitar o dar accesos
const cors = require('cors');

//creamos la app
const app = express();

//configuramos la aplicación de express
app.use(cors());
app.use(express.json());

//Rutas
app.use('/api', require('./routes/api'));


//exportamos la app
module.exports = app;
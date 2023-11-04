//requerimos la libreria de http para poder levantar el servidor
const http = require('node:http');

//requerimos la app
const app = require('./src/app');
const { error } = require('node:console');

//configuramos el dotenv par ala lectura de nuestro fichero .env
require("dotenv").config();

//configuramos la base de datos
require('./src/config/db');


//servidor
const server = http.createServer(app);
//
const PORT = process.env.PORT ?? 3000;
server.listen(PORT);

//gestionamos cuando se levante el server para que si todo ha ido bien se indique que se encuentra escuchando en el puerto...
server.on('listening', () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
server.on('error', () => {
    console.log(error);
})
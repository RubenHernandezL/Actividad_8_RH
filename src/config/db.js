//requerimos mongoDB
const mongoose = require('mongoose');

//lanzamos la conección leyendo el fichero de entorno .env
mongoose.connect(process.env.MONGO_URL);

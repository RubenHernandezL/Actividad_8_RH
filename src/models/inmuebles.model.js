//requerimos el componente schem de la librería para configurar la colección
const { Schema, model } = require('mongoose');

const inmueblesSchema = new Schema({
    piso: String,
    letra: String,
    extension: Number,
    habitaciones: Number,
    alquilado: Boolean,
    propietario: String,
    mail: String
}, {
    //configuramos los parametros
    versionKey: false,
    timestamps: true
});

module.exports = model('inmuebles', inmueblesSchema);

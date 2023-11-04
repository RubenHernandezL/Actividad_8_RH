//requerimos el model para verificar si existe el producto en la bd.
const inmueblesModel = require('../models/inmuebles.model');

//creamos el metodo que nos permita verificar si el ID del producto existe
const checkInmuebleId = async (req, res, next) => {
    //primero extraemos el id
    const { inmuebleId } = req.params;
    //luego hacemos una consulta a la base de datos para saber si ese id existe o no
    try {
        const result = await inmueblesModel.findById(inmuebleId);
        if (!result) {
            return res.json({ ERROR: "el inmueble no existe" });
        } else {
            next();
        };
    } catch (error) {
        res.json({ ERROR: error.message });
    };
};

module.exports = { checkInmuebleId };
//importamos el model
const inmueblesModel = require('../models/inmuebles.model');

// Creamos los metodos que controlaran las peticiones.
const getInmuebles = async (req, res) => {
    //aquí va el código para obtener los inmuebles de la base de datos y enviarlos en una respuesta JSON.
    //Gestionamos los errores con try catch
    try {
        const inmuebles = await inmueblesModel.find();
        res.json(inmuebles);
    } catch (error) {
        res.json({ ERROR: error.message });
    };
};

const getInmueblesById = async (req, res) => {
    //recuperamos el id de la ruta
    const { inmuebleId } = req.params;
    try {
        const inmueble = await inmueblesModel.findById(inmuebleId);
        res.json(inmueble);
    } catch (error) {
        res.json({ ERROR: error.message });
    }
};

const createInmueble = async (req, res) => {
    //aquí va el código para crear un nuevo inmueble en la base de datos a partir del body de la solicitud HTTP
    //gestionamos con try catch los errores y utilizamos la función create
    try {
        const result = await inmueblesModel.create(req.body);
        res.json(result);
    } catch (error) {
        res.json({ ERROR: error.message });
    };
};

const updateInmueble = async (req, res) => {
    //aqui va el código para actualizar el inmueble en la base de datos a partir del body de la solicitud HTTP
    //gestionamos con un try catch
    try {
        const { inmuebleId } = req.params;
        const result = await inmueblesModel.findByIdAndUpdate(inmuebleId, req.body, { new: true });
        res.json(result);
    } catch (error) {
        res.json({ ERROR: error.message });
    };
};

const deleteInmueble = async (req, res) => {
    //aqui va el código para eliminar el inmueble en la base de datos
    //gestionamos con try catch
    try {
        const { inmuebleId } = req.params;
        const result = await inmueblesModel.findByIdAndDelete(inmuebleId);
        res.json(result);
    } catch (error) {
        res.json({ ERROR: error.message });
    };
};

module.exports = { getInmuebles, getInmueblesById, createInmueble, updateInmueble, deleteInmueble };

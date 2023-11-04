//requerimos el modulo de rutas para poder delegar
const router = require('express').Router();

//requerimos el middleware para poder utilizarlo
const { checkInmuebleId } = require('../../middlewares/inmuebles.middleware');

//requerimos el controlador
const InmueblesController = require('../../controllers/inmuebles.controller');

//Creamos las rutas
router.get('/', InmueblesController.getInmuebles);
router.get('/:inmuebleId', checkInmuebleId, InmueblesController.getInmueblesById);
router.post('/', InmueblesController.createInmueble);
router.put('/:inmuebleId', checkInmuebleId, InmueblesController.updateInmueble);
router.delete('/:inmuebleId', checkInmuebleId, InmueblesController.deleteInmueble);

//exportamos
module.exports = router;
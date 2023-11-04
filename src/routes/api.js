//requerimos el componente de Route para poder gestionarlo
const router = require('express').Router();

//delegamos todas las rutas que provengan de /api/inmuebles a inmuebles.js
router.use('/inmuebles', require('./api/inmuebles'));

module.exports = router;
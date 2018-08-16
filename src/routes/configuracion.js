const express = require('express');
const app = express.Router();
const { Configuracion, Validacion } = require('../controllers');
const { validaConfiguracion, validaResolver } = require('../middleware/configuracion');
app.get('/', Configuracion.listar);
app.get('/:idConfiguracion', Configuracion.mostrar);
app.post('/', validaConfiguracion, Configuracion.crear);
app.post('/resolver/:idConfiguracion', validaResolver, Configuracion.resolver);
app.put('/', Configuracion.modificar);
app.delete('/', Configuracion.eliminar);
module.exports = app;
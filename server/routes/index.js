const express = require('express');
const router = express.Router();

//Controladores
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimoniosController = require('../controllers/testimoniosController');

// Función que exporta todas las rutas que contiene.
module.exports = function(){

    router.get('/', homeController.consultasHomepage);

    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/viajes', viajesController.consultaViajes);

    router.get('/viajes/:id', viajesController.consultaViaje);

    router.get('/testimonios', testimoniosController.consultaTestimonios);

    //Ruta utilizada cuando se llena el forulario.
    router.post('/testimonios', testimoniosController.agregarTestimonios)
 
    return router
}

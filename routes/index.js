import express from 'express'; 
import {
    paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales, 
    paginaViajes, 
    paginaDetalleViaje
} from '../controllers/paginasController.js'; 
import{
    guardarTestimonial
} from '../controllers/testimonialController.js'; 

const router = express.Router(); // instancia de express 

router.get('/', paginaInicio); // paginaInicio es el controlador 
   
router.get('/nosotros', paginaNosotros); 

router.get('/viajes', paginaViajes); 
router.get('/viajes/:slug', paginaDetalleViaje); // usando un comodin  que puedes nombrar como quieras, en lugar de crear una ruta para el 1, una para el 2  y que todos nos muestren lo mismo, solamente que con info de cada viaje, ese comodin carga un metodo del controlador que va a ser igual, y la unica diferencia va a ser esa variable sobre el viaje en el cual estamos tratando de ver

router.get('/testimoniales', paginaTestimoniales); 
router.post('/testimoniales', guardarTestimonial); // hacia  la pagina de testimoniales 

// se colocan rutas , dentro del router de express  para agregarlo a app de express juntandolas, solo tienes que tener una instancia de express o se reinicia el servidor y no va estar conectada una parte con la otra 
export default router; 
 import express, { response } from 'express'; 
 import router from './routes/index.js'; // en esta version si se tiene que colocar la extension
 import db from './config/db.js'; // extension es importante en esta nueva version

 const app=express(); // ejecutamos funcion para ejecutar express

 import dotenv from 'dotenv'; 
 dotenv.config({path:'variables.env'}); // porque vamos a generar variable extra en variables.env 


 //conectar la base de datos 
 db.authenticate()
    .then( ()=> console.log('Base de datos conectada'))
    .catch( error=> console.log(error)); 

/**Puerto y host para la app */
const host=process.env.HOST || '0.0.0.0'; 
//                   ------toma lo de variables.env (local)
//                                     ------dir IP no valida, pero heroku le asigna una
 //Definir puerto 
 const port = process.env.PORT || 4000; // o si no E 4000
               // --esta parte la asigna heroku o si es local toma 4000
               //-------------variable de entorno 
               // puedes crear un archivo y manejar algunas variables del entorno local y una vez que hagas el deployment tendrias otras variables ya para el entorno de produccion (node maneja esa parte automaticamente por ti)
               //esa variable de entorno con el puerto nos la va a asignar usualmente donde hagamos el deployment porque no sabemos que puerto va a haber disponible lo va asignar automaticamente 
               // como estamos en local la parte blanca no va a E por lo tanto se va a imprimir este 4000 abajo, pero una vez que hagamos el deployment, la variable blanca ya va a E  y ya no va a aparecer 4000, va a aparecer otro numero
               // que es muy dificil saber cual te va a tocar 


//habilitar PUG
app.set('view engine', 'pug');

//creando propio midleware
//obtener el año actual (lo vamos a pasar por variables internas de express)cuando visitas pag siempe tienes req y res
app.use((req,res, next) => {
    // console.log(res); // da mucha info en cmd
    // res.locals.unaVariable='Una Nueva Variable' // escribimos sobre objeto res
    // console.log(res.locals) // forma de compartir valores ej de este archivo hacia una vista 
    const year= new Date(); 
    res.locals.actualYear=year.getFullYear(); 
    res.locals.nombresitio="Agencia de Viajes"; 
    next(); 
}); 

// Agregar body parser para leer los datos de formulario( a veces se tiene que instalar una dependencia )
app.use(express.urlencoded({extended:true})); // ya aparece en cmd

// Definir la carpeta publica
app.use(express.static('public')); // agregamos la carpeta publica como los archivos estaticos de express, de esta forma tenemos acceso a sus archivos 

//agregar Router a app
app.use('/', router); // desde la pagina principal agrega router que agrega todas las paginas


 // Arrancando el servidor con .listen 
 app.listen(port, host,  () => { // con valores ya sea locales o de heroku
     //       -------puerto sobre el cual quieres ejecutar 
     console.log('El servidor esta funcionando')// si esta funcionando correctamente 
     //                                                        -------porque una vez que hagamos el deployment heroku esta variable tiene que estar creada 
 })
import Sequelize from 'sequelize'; 
//importamos archivo de config porque tiene una instancia de sequelize llamado db
import db from '../config/db.js'; 

//definimos nuestri primer modelo como lo exporto, lo podria importar en ell controlador para hacer la consulta
export const Viaje=db.define('viajes', { // objeto de configuracion para definir cada una de las tablas( en este caso la BD ya tiene una tabla que ya tiene contenido), pero usualmente colocarias lo que planeaste para tu proyecto, el id no es necesario, se da por hecho que E  
//                               ---nombre de la tabla en BD 

    titulo:{ // que tipo de dato va a tener y cuantos caracteres podemos utilizar (viene en documentacion de sequelize en que caso cada uno de ellos)
        type: Sequelize.STRING
    }, 
    precio:{
        type: Sequelize.STRING
    }, 
    fecha_ida:{
        type: Sequelize.DATE
    },
    fecha_vuelta:{
        type: Sequelize.DATE
    },
    imagen:{
        type: Sequelize.STRING
    },
    descripcion:{
        type: Sequelize.STRING
    },
    disponibles:{
        type: Sequelize.STRING
    },
    slug:{
        type: Sequelize.STRING
    },
}); 
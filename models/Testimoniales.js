import Sequelize from 'sequelize'; 
import db from '../config/db.js'; 

// export para poderlo importar en el controlador, y ahi crear los registros 
export const Testimonial=db.define('testimoniales', { // objeto de configuracion para definir cada una de las tablas( en este caso la BD ya tiene una tabla que ya tiene contenido), pero usualmente colocarias lo que planeaste para tu proyecto, el id no es necesario, porque el ORM da por hecho que E  
//                                        ---nombre de la tabla en BD 
//ahora tenemos acceso al modelo y a todos esos metodos que tiene sequelize crear registros o listarlos

    nombre:{ // que tipo de dato va a tener y cuantos caracteres podemos utilizar (viene en documentacion de sequelize en que caso cada uno de ellos)
        type: Sequelize.STRING
    }, 
    correo:{
        type: Sequelize.STRING
    }, 
    mensaje:{
        type: Sequelize.STRING
    },
    
}); 
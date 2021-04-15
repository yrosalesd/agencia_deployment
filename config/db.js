import Sequelize from 'sequelize'; 
// leer variables con DotENV y tener acceso a info del archivo variables.env
//require('dotenv').config({path:'variables.env}) no funciona por lo tanto: 
import dotenv from 'dotenv'; 
dotenv.config({path:'variables.env'}); 

console.log(process.env.BD_HOST); 

const db=new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS,  {
//                      ----- nombre BD a la que te quieres conectar 
//                                         -----nombre del usuario 
//                                               ----password
//                                                     -----serie de configuraciones 
    host: process.env.BD_HOST,
    port: process.env.BD_PORT, // vienen en workbench en la conexion 
    dialect: 'mysql',// porque sequelize es un ORM que tambien soporta posgress
    define:{
        timestamps: false // porque tiende a agregar un par de columnas cuando fue creado y cuando fue actualizado un registro
    }, 
    //resto configuracion de sequelize
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }, 
    operatorAliases: false

}); 

export default db; 
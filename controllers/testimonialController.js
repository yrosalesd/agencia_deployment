//importamos modelo en controlador 
import{Testimonial} from'../models/Testimoniales.js'; 


const guardarTestimonial= async (req, res) => {

    // Validar...
    const {nombre, correo, mensaje}= req.body; // destructuring , crear variable y extraer valor 
   
    const errores=[]; 

    if(nombre.trim() === ''){ // trim quita espacios en blanco al inicio y al final 
        errores.push({mensaje: 'El nombre esta vacio'});   

    }
    
    if(correo.trim() === ''){ // trim quita espacios en blanco al inicio y al final 
        errores.push({mensaje: 'El correo esta vacio'}); 

    }
    
    if(mensaje.trim() === ''){ // trim quita espacios en blanco al inicio y al final 
        errores.push({mensaje: 'El mensaje esta vacio'}); 

    }

    if (errores.length>0){ // almenos hay un error

        //Consultar Testimoniales Existentes 
        const testimoniales=await Testimonial.findAll();
        //mostrar la vista con errores
        res.render('testimoniales',{
        pagina: 'Testimoniales',
        errores,
        nombre, //para que no se borre lo que ya escribi en el formulario
        correo,
        mensaje,
        testimoniales
        })

    } else{
        //Almacenarlo en la BD 
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            }); 

            res.redirect('/testimoniales'); // lo lleva a testimoniales, y como tenemos un get a testimoniales, va a mostrar la pagina de testimoniales(terminamos la operacion)
        } catch (error) {
            console.log(error)
        }
    }
     
}

export{
    guardarTestimonial
}
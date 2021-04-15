// importamos modelo porque tiene todos los campos de la tabla y gracias al modelo tenemos acceso a los metodos 
import {Viaje} from '../models/Viaje.js'
import {Testimonial} from '../models/Testimoniales.js'

// se va a encargar de mostrar las diferentes paginas // cortamos codigo de index.js routes 
const paginaInicio= async (req, res) => { 

    // Consultar 3 viajes del modelo Viaje
    const promiseDB=[]; 

    promiseDB.push(Viaje.findAll({limit: 3 }));
    promiseDB.push(Testimonial.findAll({limit: 3 }))// los agrega en este orden al arreglo
    try {
        const resultado=await Promise.all(promiseDB); // arranca ambas consultas al mismo tiempo

        res.render('inicio',{ 
            pagina:'Inicio',
            clase:'home', // viene en la hoja de estilos
            viajes: resultado[0],
            testimoniales: resultado[1]
         });   
    } catch (error) {
        console.log(error); 
    }

   
}

const paginaNosotros=(req, res) => { // creamos una segunda pagina
    res.render('nosotros', {
        pagina:'Nosostros'
    });
                   
}

const paginaViajes= async(req, res) => { // creamos una segunda pagina
    //consultar BD 
    const viajes= await Viaje.findAll();  // se trae todos los resutados que halla en esa tabla
    //                    ---modelo
    console.log(viajes); //aparece en cmd , es un arreglo []
    res.render('viajes', {
        pagina:'Próximos Viajes',
        viajes, //pasar hacia la vista 
    });
                   
}

const paginaTestimoniales= async (req, res) => { // creamos una segunda pagina

    try {
        const testimoniales=await Testimonial.findAll(); //traer todos los testimoniales que vana estar en variable que podemos pasar hacia la vista

        res.render('testimoniales', {
            pagina:'Testimoniales',
            testimoniales // pasandolos hacia la vista 
        });        
    } catch (error) {
        console.log(error); 
        
    }
            
}

//Muestra un viaje por su slug
const paginaDetalleViaje= async (req, res) => {
    // console.log(req.params.viaje);  // params se asocia mucho con el comodin que tenemos en index.js 
    //                         ---- para acceder al String, nombre del comodin
    const{ slug }= req.params; // para extraer y crear la variable del comodin

    // en caso de que no pueda hacer la consulta a la BD app no va a fallar 
    try {
        const viaje= await Viaje.findOne({where:{ slug }}); // objeto slug:slug   se trae uno solo finOne, ejemplo al que tenga el slug de viaje a rio de janeiro
        
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error); 
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes, 
    paginaTestimoniales,
    paginaDetalleViaje
}
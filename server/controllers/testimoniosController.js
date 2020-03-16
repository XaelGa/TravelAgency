const testimonio = require('../models/Opinions');

exports.consultaTestimonios = async (req,res) => {
    const testimonios = await testimonio.findAll();
        res.render('testimonios', {
            page: 'Testimonios',
            testimonios
        });
}

exports.agregarTestimonios =  async (req, res) =>{
    // Validar que todos los campos esten llenos
    let{name, email, message} = req.body;

    let errores =[];

    if(!name){
        errores.push({'mensaje': 'Agrega tu nombre por favor.'});
    } else if(!email){
        errores.push({'mensaje': 'Agrega tu correo por favor.'});
    } else if(!message){
        errores.push({'mensaje': 'Agrega un mensaje por favor.'});
    }

    //Revisar por errores
    if(errores.length > 0){
        //muestra la vista con errores
        const testimonios = await testimonio.findAll();
        res.render('testimonios',{
            errores,
            name,
            email,
            message,
            page: 'Testimonios',
            testimonios
        })
    }else{
        testimonio.create({
            name,
            email,
            message
        }).then(testimonio => res.redirect('/testimonios'))
          .catch(error => console.log(error));
    }
}


const Viaje = require('../models/Trips');

exports.consultaViajes = async(req,res) => {
    const viajes = await Viaje.findAll();
     res.render('viajes', {
         page: 'Próximos Viajes',
         viajes
     });
 }

 exports.consultaViaje = async(req,res) => {
    const viaje = await Viaje.findByPk(req.params.id);
         res.render('viaje', {
            viaje
        });
}
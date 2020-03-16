const viaje = require('../models/Trips');
const testimonio = require('../models/Opinions');
var Sequelize = require('sequelize');

exports.consultasHomepage = async (req,res) => {

    const promises = [];
   
    //Trae los primeros tres viajes de la base de datos.
    const viajes = await viaje.findAll({order: Sequelize.literal('startDate Desc'), limit: 3});

    //Trae lo
    let testimonios = await testimonio.findAll({order: Sequelize.literal('id Desc'), limit:3});
    res.render('index', {
        page: 'Próximos Viajes',
        clase: 'home',
        viajes,
        testimonios
    });

}
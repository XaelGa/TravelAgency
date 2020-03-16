const Sequelize = require('sequelize');
const db = require('../config/database');

const trip = db.define('trips', {
    tittle:{
       type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    startDate:{
        type: Sequelize.DATE
    },
    endDate:{
        type: Sequelize.DATE
    },
    image:{
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    places:{
        type: Sequelize.STRING
    }
});

module.exports = trip
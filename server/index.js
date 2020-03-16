// importar express
const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser')
const configs = require('./config');
require('dotenv').config({path: 'variables.env'});

//Creación de un servidor express
const app = express();

//Habilita pug
app.set('view engine', 'pug');

//Añadiendo vistas
app.set('views', path.join(__dirname, './views'));

//Creando una ruta hacia la carpeta estática llamada public.
app.use(express.static('public'));

// validar en que ambiente nos encontramos.
const config = configs[app.get('env')];

// Crear la variable para el sitio web.
app.locals.title = config.siteName;

//Muestra la fecha actual calculada del servidor y genera una ruta.
app.use((req,res,next ) => {

        const date = new Date();
        res.locals.fechaActual = date.getFullYear();  //Uso de locals
        res.locals.url = req.path;
        return next();
})
//Ejecutar el body-parser
app.use(bodyParser.urlencoded({extended: true}));

//cargar las rutas del otro archivo index en la carpeta routes:
app.use('/', routes());

//Puerto y host para la app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

//El puerto de escucha.
app.listen(port, host, ()=>{
console.log('The server is running');                                           
});
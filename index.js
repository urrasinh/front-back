const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const expressFileUpload = require('express-fileUpload')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const secretKey = 'shhhh'



app.listen(3000, () => console.log("El servidor está inicializado en el puerto 3000"))

// Middlewares

app.use(bodyParser.urlencoded({ extended: false})) // recibe carga img por formulario html
app.use(bodyParser.json()) // Recibe Payload de las consultas PUT POST 
app.use(express.static(__dirname + '/public')) // Contenido estatico en la carpeta public
app.use( // carga de archivo
    expressFileUpload({
    limits: { fileSize: 5000000 },
    abortOnLimit: true,
    responseOnLimit: "El peso del archivo que intentas subir supera el limite permitido",
})
)
app.use('/css', express.static(__dirname + 'node_modules/bootstrap/dist/css')) 
// configuracion de Handlebars
app.engine(
    'handlebars',
    exphbs({
        defaultLayout: 'main',
        layotsDir: `${__dirname}/views/mainLayout`,
    })
)
app.set('view engine', 'handlebras')
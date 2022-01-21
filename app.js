const argv = require('./config/yargs.js').yargs;
const {crearArchivo} = require("./crearArchivo.js")
 
 crearArchivo(argv.base,argv.listar);

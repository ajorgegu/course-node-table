const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

// const [ , , arg3 = 5] = process.argv
// const [, base] = arg3.split('=')


crearArchivo(argv.base, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.red, 'creado'))
    .catch(err => console.error(err));
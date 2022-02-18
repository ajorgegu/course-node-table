const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        demandOption: true,
                        describe: 'Muestra la tabla de multiplicar en consola'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        demandOption: true,
                        describe: 'Límite de la tabla de multiplicar'
                    })
                    .check((argv, options) => {
                        if(isNaN(argv.b)){
                            throw 'La base debe de ser un número'
                        }
                        if(isNaN(argv.h)){
                            throw 'El límite debe de ser un número'
                        }
                        return true;
                    })
                    .argv;


module.exports = argv;
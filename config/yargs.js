const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        type: 'number',
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Lista o no en consola la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        demandOption: false,
        type: 'number',
        describe: 'Hasta dónde quieres multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número.'
        }
        return true;
    })
    .argv;


module.exports = argv;
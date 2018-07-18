const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: true,
        alias: 'l',
        default: 10

    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multipilcar', opts)
    .command('crear', 'Guardamos en un fichero', opts)
    .help()
    .argv;

module.exports = {
    argv
}
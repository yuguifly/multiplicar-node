//requireds
//const fs = require('fs');
//const fs = require('express'); no existe este, se instala y se usa
//const fs = require('./'); archivos que nosotro creamos 
// LO PASAMOS AL FICHERO yargs.js
// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multipilcar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             demand: true,
//             alias: 'l',
//             default: 10

//         }
//     })
//     .command('crear', 'Guardamos en un fichero', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             demand: true,
//             alias: 'l',
//             default: 10

//         }
//     })
//     .help()
//     .argv;

const argv = require('./config/yargs').argv;
const colors = require('colors/safe'); //poner color a los logs pero pasandolo como argumento
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
//recuperamos el argumento 1
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        // .then(archivo => console.log(archivo))
        // .catch(e => console.log(e))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e))
        break;
    default:
        break;
}
//let base = 'abc';

//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(argv.limite);


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e))
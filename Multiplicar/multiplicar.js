//requireds
const fs = require('fs');
const colors = require('colors'); //poner color a los logs

let listarTabla = (base, limite = 10) => {
        //return new Promise((resolve, reject) => {
        //let data = '';
        console.log('--------------------'.green);
        console.log(`------tabla del ${base}--------------`.green);
        console.log('--------------------'.green);
        for (let i = 0; i < limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }

    }
    //FORMA2 poner module.exports.
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        for (let i = 0; i < limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`Tablas/tabla-${base}-al${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`.green)

        });
    });
}

//FORMA1
module.exports = {
    crearArchivo,
    listarTabla
}
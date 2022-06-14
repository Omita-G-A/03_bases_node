const fs = require('fs'); // per requerir paquet file system. Mirar documentació Nodejs
// const argv = require('yargs')
//     .option('l', {
//         alias:'listar',
//         default: false,
//         type: 'boolean'
//     })
//     .argv;
const colors = require('colors');



const crearArchivo = async (base = 1, listar=false, hasta = 10) => {

    try {
        let output = '';
        let consola = '';

        console.log('Tabla del: '.magenta, colors.magenta(base));


        for (let i = 1; i <= hasta; i++) {
            output += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;

        };

        if (listar) {
            console.log(consola); //imprimirà en consola sa tabla des 5 sa barra invertida i sa n és un salto de línia
        }

        fs.writeFileSync(`./output/tabla_${base}.txt`, output);

        return `Tabla_${base} creada.`;

    } catch (err) {
        
        throw err
        
    }



};


module.exports = {
    crearArchivo
};
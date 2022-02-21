const colors = require('colors');
 const fs = require('fs');
 const crearArchivo = async (base, listar, hasta) => {

    try{
        let salida = ''
    
        for(let i=1; i<=hasta; i++){
            salida += `${base} X ${i} = ${base*i}\n`
        }
        const nombreArchivo = `tabla_${base}.txt`
        if(listar){
            console.log(colors.cyan(salida));
        }
        // fs.writeFile(nombreArchivo, salida, (err) => {
        //     if(err){
        //         throw err;
        //     }
    
        //     console.log('Proceso ejecutado!');
        //     return nombreArchivo
        // }).
        fs.writeFileSync(`./salida/${nombreArchivo}`, salida);
        return nombreArchivo;
    }catch(err){
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}
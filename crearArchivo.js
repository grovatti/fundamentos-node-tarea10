const color = require("colors/safe")
const salida = './salida/';
const separador = '================================';

crearArchivo = (iMultiplicador,sListar) =>{
    let itera = "";
    let marco = "";
    
    marco+= sListar ? color.red(separador) : `\n${separador}`
    marco+= '\nTABLA DEL: '  
    marco+= sListar ? color.bold(color.red(iMultiplicador)) : `${iMultiplicador}\n`
    
    
    for(let ifor=1;ifor<=10 ; ifor++)
        {itera+= `${ifor} x ${sListar ? color.green(iMultiplicador) : iMultiplicador} = ${sListar ? color.blue(iMultiplicador*ifor) : iMultiplicador*ifor}\n`;}
        
    marco+= `\n${itera}`
    marco+= sListar ? color.red(separador) : `${separador}`

    if(sListar){
        console.log(marco);
        }
    else{
        let fs = require('fs') ;
        fs.writeFile(`${salida}tabla-del-${iMultiplicador}.txt`,marco,function(err){
            if(err){console.log(color.bgRed(color.white(`Error ${err.message}`)));} 
            else{console.log(color.bgGreen(color.black(`Guardada la tabla del ${iMultiplicador}`)));}
        })
    }
    
}

module.exports = {crearArchivo}
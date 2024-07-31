const fs = require('fs').promises;



function eliminarImagen(ruta){
    const unaPromesa =  fs.unlink(ruta, (err) => {
        if (err) throw err;
        console.log('path/file.txt was deleted');
      });

      return unaPromesa;
}

module.exports = {eliminarImagen}
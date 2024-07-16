const fs = require('fs');
const path = require('path');

function getFilesSync(directoryPath) {
    console.log("--> test 'getFileSync'")
    return fs.readdirSync(directoryPath).map(file => path.join(directoryPath, file));
}

function dameImagenes(){
    let colImg = getFilesSync('./public/done');
    let coleImag = []
    //console.log(colImg[0])
    //console.log(colImg[0].split('\\'))
    //console.log(colImg[0].split('\\')[1]+"/"+colImg[0].split('\\')[2])
    let dirIma = colImg[0].split('\\')
    //console.log(dirIma[1]+"/"+dirIma[2])
    colImg.forEach(x=>{
        dirIma = x.split('\\')
        coleImag.push(dirIma[1]+"/"+dirIma[2])
    })
    //console.log(coleImag);
    return coleImag
}

//const files = getFilesSync('./public/done');
//console.log(files);

dameImagenes();
module.exports = {getFilesSync, dameImagenes}
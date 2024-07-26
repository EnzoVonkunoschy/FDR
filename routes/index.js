var express = require('express');
var router = express.Router();
var imgFiles = require('../test.js')
const fs = require('fs').promises;
const path = require('path')
const Modelo = require('../modelo.js')

/* GET home page. */
router.get('/administracion', function(req, res, next) {
  console.log(req.body);
  //console.log(imgFiles.getFilesSync('.\\public\\done'))
  //var colImg = imgFiles.getFilesSync('.\\public\\done')
  var colImg = imgFiles.dameImagenes()
  console.log("colImg")
  console.log(colImg)
  let ri = colImg[12] //'/done/photo-1565286093825.png'
  res.render('menu', { title: 'Express' , images: colImg});
});

router.get('/index', function(req, res, next) {

  var colImg = imgFiles.dameImagenes()

  let ri = colImg[12] //'/done/photo-1565286093825.png'
  res.render('index', { title: 'Express' , images: colImg});
});

router.get('/load', function(req, res, next) {
  res.render('load', { });
});

router.get('/delimage',(req, res)=>{
  var colImg = imgFiles.dameImagenes()
  res.render('delimage',{title: 'Valor de title',images: colImg})
})

router.post('/eliminarimagen',(req,res)=>{
  console.log(req.body)
  console.log(req.body.eliminar)
  console.log('/public/'+req.body.eliminar)
  console.log(path.dirname(__dirname)+'/public/'+req.body.eliminar)
  console.log(path.dirname(__dirname)+path.normalize('/public/'+req.body.eliminar))
  console.log()
  let ruta = path.dirname(__dirname)+path.normalize('/public/'+req.body.eliminar)

  //Para emigrar a otro archivo
  Modelo.eliminarImagen(ruta)
    .then(()=>{
      var colImg = imgFiles.dameImagenes()
      res.render('delimage', { title: 'Express' , images: colImg});
    })
    .catch((error)=>{console.log("Se ha producido un error al borrar el archivo!!!")})



  //res.send("wait a minute....")
})

module.exports = router;

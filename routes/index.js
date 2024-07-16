var express = require('express');
var router = express.Router();
var imgFiles = require('../test.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.body);
  //console.log(imgFiles.getFilesSync('.\\public\\done'))
  //var colImg = imgFiles.getFilesSync('.\\public\\done')
  var colImg = imgFiles.dameImagenes()
  console.log("colImg")
  console.log(colImg)
  let ri = colImg[12] //'/done/photo-1565286093825.png'
  res.render('index', { title: 'Express' , images: colImg});
});

module.exports = router;

var jade = require('jade');
var pretty = require('pretty');
var fs = require('fs');

var root = '../';

//Check for appropriate folders

fs.readdir( root, function(err, files){
  if (err) throw err;

  if (!fs.existsSync(root + '/regions')){
    fs.mkdirSync(root + '/regions');

    if (!fs.existsSync(root + '/regions/src')){
      fs.mkdirSync(root + '/regions/src');
    }
  }

});

// Render Jade templates

fs.readdir(root + '/regions/src', function(err, files){
  if (err) throw err;

  files.forEach(function(file){
    if (file.indexOf('.jade') > -1){

      var html = jade.renderFile(root + '/regions/' + file);
      fs.writeFile(file.replace('.jade', '.region'), pretty(html));

    }
  });

});
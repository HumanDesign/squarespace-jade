var jade = require('jade');
var pretty = require('pretty');
var fs = require('fs');

module.exports = function() {

  //Check for appropriate files and folders

  if (!fs.existsSync('./index.js')){
    fs.writeFile('./index.js');
  }

  if (!fs.existsSync('./regions')){
    fs.mkdirSync('./regions');
  }

  // Render Jade templates

  fs.readdir('./regions', function(err, files){
    if (err) throw err;

    files.forEach(function(file){
      if (file.indexOf('.jade') > -1){

        var html = jade.renderFile('./regions/' + file);
        fs.writeFile(file.replace('.jade', '.region'), pretty(html));

      }
    });

  });

};


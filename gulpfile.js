

var gulp = require('gulp');
var rimraf = require('rimraf');


gulp.task('clean:nodemodules', function (cb) {
 
 
  //return del(['../NODEJS/**/node_modules']);
  
  
  //del(['../NODEJS/**/node_modules']).then(paths => {
	  
  //  console.log('Deleted files and folders:\n', paths.join('\n'));
	
  //});
  
  
  
  
  rimraf('../NODEJS/**/node_modules',{ force: true }, cb);


  //rimraf('../NODEJS/**/bower_components',{ force: true }, cb);


  //rimraf('../NODEJS/**/public/lib',{ force: true }, cb);
  
  


});

gulp.task('default', ['clean:nodemodules']);
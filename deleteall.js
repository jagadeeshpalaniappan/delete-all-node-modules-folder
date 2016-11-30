
var findRemoveSync = require('find-remove');



var result = findRemoveSync('../NODEJS', {dir: 'node_modules'});


console.log("############ NODE MODULES");
console.log(result);

var result = findRemoveSync('../NODEJS', {dir: 'bower_components'});

console.log("############ BOWER ");
console.log(result);


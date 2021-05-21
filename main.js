const fs = require('fs'); 
//getting the commands from the scripts file
const create = require('./scripts/create'); 
const read = require('./scripts/read');
const update = require('./scripts/update');  
//packing it up for publication
const package = { 
    create: create, 
   read: read, 
   update: update,  
}
module.exports = package; 
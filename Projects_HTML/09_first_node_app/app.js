const log = require('./logger.js');
const path = require('path');

let path_object = path.parse(__filename);
log(path_object);
const sayhi = require('./1-module.js');
const name = require('./2-modules.js');
const data = require('./module-alternate.js');
require('./mind-greande.js')


console.log(data);

sayhi('Siddhant');
sayhi(name.sid);
sayhi(name.sh);


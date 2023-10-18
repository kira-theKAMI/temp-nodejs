const path = require('path')

console.log(path.sep);

const filepath = path.join('/basics', '1-module.js')
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absolute = path.resolve(__dirname, 'basics', '1-module.js');
console.log(absolute);

console.log(absolute.split(path.sep));
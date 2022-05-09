utils = require('./util');
const fs = require('fs');
const _fsP = fs.promises;

utils.createFile('temp.txt','create file success!')

console.log(fs.readdirSync('.'))




console.log(_fsP.readdir('.').toString())

;(async ()=>{
    console.log(await _fsP.readdir('.'))
})();


console.log(utils.addNumbers(3,4))

console.log(utils.adict.name);

const _fs = require('fs');

const _fsP = _fs.promises;


const fs = require('fs')
function addNumbers(a,b){
    return a+b;
}

adict={
    name:'Raj',
    age:'32'
}

function createFile(name,contents){
    console.log(contents)
    fs.writeFileSync(name,contents);
    console.log('file written');
}

module.exports.addNumbers=addNumbers;
module.exports.adict=adict;
module.exports.createFile=createFile;
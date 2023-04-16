const fs = require('fs');

function read() {
const data = fs.readFileSync('Hello.txt')
console.log(data.toString())
}

exports.read = fs.readFileSync
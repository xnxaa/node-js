const path = require('path')
const fs = require('fs')
// sebelum di normalize
const filePath = __dirname + '/../03.sycnchronus/03.append/file/hello.txt'

// sesudah di normalize
const normalizefilepath = path.normalize(filePath)
console.log(filepath, normalizefilepath)
const data = fs.readFileSync(normalizefilepath)
console.log(data.toString())


// path.join(__dirname, './some-direktory/some-file.txt'))
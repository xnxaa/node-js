const read = require("../02.read-file").read
const write = require("../01.write-file").write

function append (file, data) {
    const oldData = read(file)
    write(file, oldData + '\n' + data)
}

append('Hello.txt', 'Hello from node.js');
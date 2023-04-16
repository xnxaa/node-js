const fs = require('fs');

function write() {
// write me-replace data
fs.writeFileSync('Hello.txt', 'Hello from node.js', {
    encoding: 'utf-8',
});
}
exports.write = fs.writeFileSync
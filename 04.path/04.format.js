const path = require('path')

console.log(path.format( {

    root: '/some-root',
    base: 'format',
    dir: '04.path',
    ext: 'js',
    name: '04.format'
}))
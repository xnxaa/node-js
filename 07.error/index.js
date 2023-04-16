// reference error
const a = {
    b: 1
}

class CustomError extends Error {
    constructor(message) {
        super(message)
        this.name = 'CustomError'
    }
}

// type Error
console.log(a.b.c.d)

// error
// aaa

// throw 
// type error
if(a.b.c === undefined) {
    throw new Error('a.b.c is undefined')
}

// error adalah sebuah class karena ada "new"
// throw adalah objek dari error
// track trace adalah property dari class error

// mendefinisikan error yang kita buat sendiri

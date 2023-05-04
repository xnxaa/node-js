// promise = sebuah objek yang merepresentasikan
// keberhasilan / kegagalan sebuah event asynchronous
// di masa mendatang 

// promise berfungsi menyelesaikan masalah callback hell
// fetch mengembalikan promise


// resolve dan reject adalah callback
// janji (terpenuhi/ ingkar)
// states (fulfilled / rejected / pending)
// 3 fungsi callback (resolve / reject /  finally)
// aksi (terpenuhi/resolve = then / catch = reject)

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) =>{
// if (ditepati) {
//     resolve('janji sudah ditepati')
// } else {
//     reject('Ingkar janji');
// }
// });



// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' +response));


// contoh 2
// let = ditepati = true
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu')
//         }, 2000);
        
//     }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));

// janji2
//     .finally(() => console.log('selesai menunggu'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' +response));
// console.log('selesai');


// promise.all = menjalankan ketika banyak promise
// dijalankan sekaligus

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Kevin Feidge',
            pemeran: 'RDJ'
    }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandung',
            temp: 26,
            kondisi: 'Cerah berawan'
        }]);
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));
Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => { 
        const [film, cuaaca] = response;
        console.log(film);
        console.log(cuaca);
    });


function cobaAsynchronous (teks, callback) {
setTimeout(() => {
callback(`halo saya dari ${teks}`);
}, 0);
}

console.log('hello world');

let promise = new Promise(function(resolve, reject) { cobaAsynchronous ('productzilla', function (teks) { resolve(teks);
});
})
promise.then(function (teks) {
console.log(teks);
})
console.log('I love JavaScript. ');

// async function promisedFunction() {

//     return await Promise.resolve('resolved')
//     }
//     let promised = await promisedFunction()
function fibonachi(x) {
    let number = 1;
    let temporary = 0;
    for (let i = 0; i < x; i++) {
    //    console.log(temporary, '+', number, '=', number+temporary)
       let hasil = temporary + number;
       temporary = number;
       number = hasil;
    }  
    return number;
}

// jadi non blocking/asynchronous = menggunakan callback function
// asynchronous
function fibonachiAsync(x, callback) {
    setTimeout(() => {
        const result = fibonachi(x)
        callback(result)
    }, 0)
} 

function plus(a,b){
    return a + b;
}

function plusAsync(a,b, callback){
    setTimeout(() => {
        const result = plus(a,b)
        callback(result)
    }, 0)
}


fibonachiAsync(1000, function(result) {
    console.log('fibonachi', result)
})
const hasilasync = fibonachi(100)

console.log(hasilasync);
console.log(fibonachi(3));
console.log('=================')

fibonachiAsync(10, function(result) {
    plusAsync(result,10,function(hasilTambah) {
        console.log('hasil pertambahan', hasilTambah)
        plusAsync(result, 10, function(hasilTambah) {
            console.log('hasil pertambahan', hasilTambah)
        })
    })

    // const hasilpertambahan = plus(result, 10)
    // console.log('hasil pertambahan', hasilpertambahan)
})
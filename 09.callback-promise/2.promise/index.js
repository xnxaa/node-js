function fibonachi(x) {
    if (!parseInt(x)) {
        throw new Error('si x harus berbentuk nomer')
    }
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
    if(typeof a !== 'number') {
        throw new Error('a harus berbentuk nomer')
    }
        if (!parseInt(x)) {
            throw new Error('si b harus berbentuk nomer')
        }
    return a + b;
}

function plusAsync(a,b, callback){
    setTimeout(() => {
        try {
        const result = plus(a,b)
        callback(undefined, result)
        } catch(err) {
            callback(err)
        }
    }, 0)
}



function fibonachiPromise (x) {
return new Promise(function(resolve, reject) {
fibonachiAsync(x, function(err, result) {
    if(err) reject(err)
    resolve(result)
})
}) 
}


function plusPromise(a,b) {
    return new Promise(function(resolve, reject) {
        plusAsync(x, function(err, result) {
            if(err) reject(err)
            resolve(result)
        })
        })
    }



fibonachiPromise(10).then(function(result) {
    return plusPromise(result, 10)
}).then(function(hasilTambah) {
    return plusPromise(hasilTambah, 10)
}).then(function(hasilTambah2) {
    console.log(`hasil pertambahan`, hasilTambah2)
}).catch(function (err) {
    console.log(`hasil error`, err.message)
})


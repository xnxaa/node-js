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




async function main() {
  const hasilFibonachi10 = await fibonachiPromise(10)
  console.log(`fibonachi 10`, hasilFibonachi10)
  const hasilTambah = await plusPromise(hasilFibonachi10, 10)
  const hasilTambah2 = await plusPromise(hasilFibonachi10, 20)
  console.log(`hasil pertambahan`, hasilTambah2)
    const hasil = await plusPromise('a', 10)
    console.log(hasil)
}
// await akan menunggu proses const selesai
// await = jadi synchronous

main().then().catch(err => {
    console.log(`error`, err.message)
})
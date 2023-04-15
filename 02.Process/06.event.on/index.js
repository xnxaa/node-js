process.on('exit', function(code) {
    if (code === 20)
    console.log('execution time reached 10 seconds')
    if (code === 0) 
        console.log(`success to run the program`);
    console.log(`exit code:`, code);
})


process.on('beforeExit', function(code){
    console.log('before exit')
});


process.on('uncaughtException', function(err){
    console.log(`Error Detection:`, err);
});


process.on('SIGINT', function() {
    console.log('SIGINT');
    process.exit()
});


process.on('SIGTERM', function() {
    console.log('SIGTERM');
    process.exit()
});

const startExecTime = new Date().getTime();
for (let i = 0; i < 500; i++) {
    const currentExecTime = new Date().getTime();
    // process lebih dari 2 detik
    if (currentExecTime - startExecTime > 10000) {
        process.exit(20);
    }
    // if(i === 1000) {
    //     throw new Error(`error on ${i} iteration`);
    // }   
}
const finishExecTime = new Date().getTime();
console.log('Execution time:', (finishExecTime - startExecTime)/1000, 'seconds');



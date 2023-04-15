const startExecTime = new Date().getTime();
for (let i = 0; i < 5000000000; i++) {
    const currentExecTime = new Date().getTime();
    // process lebih dari 2 detik
    if (currentExecTime - startExecTime > 10000) {
        console.log(`execution time reached 10 seconds: on ${i} ieration`);
        process.exit(1);
    }   
}
const finishExecTime = new Date().getTime();
console.log('Execution time:', (finishExecTime - startExecTime)/1000, 'seconds');



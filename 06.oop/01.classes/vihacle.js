export default class Vihacle {
    engineStatus;
    engineVolume;


    // constructor = yang dipanggil di awal intansiasi
    constructor(engineVolume) {
        this.engineStatus = false;
        this.engineVolume = engineVolume;
    }

    // method
    turnOnEngine() {
        this.engineStatus = true;
        console.log('Engine is On');
    }

    turnOffEngine() {
        this.engineStatus = false;
        console.log('Engine is Off');
    }

    fireHorn() {
        console.log('BEEP BEEP');
    }
}
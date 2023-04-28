import Vihacle from './vihacle.js';

export default class car extends Vihacle {
    color
    brand
    type



    // constructor = yang dipanggil di awal intansiasi
    constructor(brand, color, type, engineVolume) {
        super(engineVolume);
        this.brand = brand;
        this.color = color;
        this.type = type;
    }
    // super = memanggil constructor parent

    // method
    // turnOnEngine() {
    //     this.engineStatus = true;
    //     console.log('Engine is On');
    // }

    // turnOffEngine() {
    //     this.engineStatus = false;
    //     console.log('Engine is Off');
    // }

    setBrand(brand) {
        this.brand = brand;
    }

    getBrand() {
        return this.brand;
    }

    fireHorn() {
        super.fireHorn();
        console.log('TON TON');
    }
}
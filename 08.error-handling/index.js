import Car from './01.classes/car.js'

const carList = [];
const carHonda = new Car('Honda', 'red', 'sedan', 2000);
const carAvanza = new Car('Toyota', 'red', 'MVP', 1500);
const carXenia = new Car('Daihatsu', 'red', 'MVP', 1500);


carList.push(carHonda, carAvanza, carXenia);
console.log(carList);

function findCarbyBrand(brand) {
    try {
    const foundedcar = carList.find(function(car) {
        return car.brand === brand;
    })
    return foundedcar.type;
} catch (err) {
    if(err.name === 'TypeError') {
        return 'Brand not Found';
    }
}
}

console.log('================ find car =================')
console.log(findCarbyBrand('Honda'))
console.log('harusnys tereksekusi')


// function greeting(name, callback) {
//     console.log("Hello, " + name);
//     callback();
//   }
  
//   function message() {
//     console.log("How are you today?");
//   }
  
//   greeting("Zilla", message);

//   try {
//     undefinedFunction();
//   } catch (error) {
//     console.log(error.message);
//   }
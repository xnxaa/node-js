import {
    phi,
    plus,
    minus,
    multiply,
} from './math.js'

// cara 1
import * as m from './math.js'
console.log(`2 + 3 = ${m.plus(2,3)}`);

// cara 2
console.log(phi);
console.log(`2 + 3 = ${plus(2,3)}`);
console.log(`2 - 3 = ${minus(2,3)}`);
console.log(`2 * 3 = ${multiply(2,3)}`);

// cara 3
import penambahan from './math.js'
console.log(`2 + 3 = ${penambahan(2,3)}`);
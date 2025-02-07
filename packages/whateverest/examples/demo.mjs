import * as whateverest from "../dist/whateverest.mjs";
console.log(whateverest);

const vector = whateverest.vector({ x: 10, y: 10 });
console.log(vector);

const randomWalk = whateverest.randomWalk(10);
console.log(randomWalk);

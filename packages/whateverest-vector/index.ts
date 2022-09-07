interface Location {
  x: number;
  y: number;
}
interface Vector {
  location: Location;
  add: typeof add;
  subtract: typeof subtract;
  divide: typeof divide;
  multiply: typeof multiply;
  magnitude: typeof magnitude;
  normalize: typeof normalize;
  limit: typeof limit;
}

function add(vectorA: Vector, vectorB: Vector): Vector {
  return {
    ...vectorA,
    location: {
      x: vectorA.location.x + vectorB.location.x,
      y: vectorA.location.y + vectorB.location.y,
    },
  };
}

function subtract(vectorA: Vector, vectorB: Vector): Vector {
  return {
    ...vectorA,
    location: {
      x: vectorA.location.x - vectorB.location.x,
      y: vectorA.location.y - vectorB.location.y,
    },
  };
}

function multiply(vector: Vector, multiplier: number): Vector {
  return {
    ...vector,
    location: {
      x: vector.location.x * multiplier,
      y: vector.location.y * multiplier,
    },
  };
}

function divide(vector: Vector, divisor: number): Vector {
  return {
    ...vector,
    location: {
      x: vector.location.x / divisor,
      y: vector.location.y / divisor,
    },
  };
}

function magnitude(vector: Vector): number {
  const { location } = vector;
  return Math.sqrt(location.x * location.x + location.y * location.y);
}

function normalize(vector: Vector): Vector {
  const mag = magnitude(vector);
  if (mag != 0) {
    return divide(vector, mag);
  }
  return vector;
}

function limit(vector: Vector, max: number): Vector {
  const mag = magnitude(vector);
  if (mag > max) {
    let newVector = normalize(vector);
    newVector = newVector.multiply(newVector, max);
    return newVector;
  }
  return vector;
}

function vector({ x, y }: Location) {
  return {
    location: {
      x,
      y,
    },
    add,
    subtract,
    divide,
    multiply,
    magnitude,
    normalize,
    limit,
  };
}

export default vector;

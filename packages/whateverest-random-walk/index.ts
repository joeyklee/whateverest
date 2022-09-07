const randomWalk = (steps: number): { x: number; y: number }[] => {
  return [...new Array(steps).fill(null)].map((stem) => ({
    x: Math.random(),
    y: Math.random(),
  }));
};

export default randomWalk;

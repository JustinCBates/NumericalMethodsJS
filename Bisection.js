// The bisection method finds a value x_root that represents an approximation of a root of f(x)
// bracketed by a range of initial values for x.
function bisection(func, minX, maxX, maxErr, maxIterations) {
  // Check to ensure the signs of f(x) flip between minX and maxX
  // If they do not then inappropriate bracket points have been
  // selected and the method will fail to find a zero crossing.
  if (func(minX) * func(maxX) >= 0) {
    throw new Error(
      `A value of ${minX} produces ${func(
        minX
      )} which is the same sign as what a value ${maxX} produces ${func(maxX)}.`
    );
  }

  let midX = minX;
  let iter = 1;
  let relErr = maxX - minX;

  // Iterate until the relative error is less than the desired maximum
  // error or a maximum number of iterations is performed.
  while (relErr >= maxErr && iter <= maxIterations) {
    // Find middle point
    midX = (minX + maxX) / 2;

    // Find the endpoint that flips the sign of the evaluated function
    if (func(midX) * func(minX) < 0) {
      maxX = midX;
    } else {
      minX = midX;
    }

    // Update convergence variables.
    relErr = Math.abs(func(midX));
    iter++;
  }
  return midX;
}

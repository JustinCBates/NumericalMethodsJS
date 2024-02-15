// The falsePosition method finds a value x_root that represents an approximation of a root of f(x)
// bracketed by a range of initial values for x.  It is an enhancement of the bisection method.
function falsePosition(func, minX, maxX, maxError, maxIterations) {
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

  // Initialize result
  let midX = minX;
  let iter = 1;
  let relErr = maxX - minX;

  // Iterate until the relative error is less than the desired maximum
  // error or a maximum number of iterations is performed.
  while (relErr > maxError && iter <= maxIterations) {
    // Find the point that touches x axis
    midX = Math.floor(
      (minX * func(maxX) - maxX * func(minX)) / (func(maxX) - func(minX))
    );

    // Find the endpoint that flips the sign of the evaluated function
    if (func(midX) * func(minX) < 0) {
      maxX = midX;
    } else {
      minX = midX;
    }

    // Update convergence variables.
    relErr = maxX - minX;
    iter++;
  }
  return midX;
}

// This implementation of the Newton Raphsom Method requires the user to pass the
// function and another function that is the first derivative of the function,
// an ititial guess for x = x_0, and the maximum error the user seeks to achieve.
function newtonRaphson(func, derivFunc, x_0, maxErr, maxIterations) {
  let x_n = x_0;
  let h = func(x_n) / derivFunc(x_n);
  let relErr = Math.abs(h);
  let iter = 1;

  // Iterate until the relative error is less than the desired maximum
  // error or a maximum number of iterations is performed.
  while (relErr >= maxErr && iter <= maxIterations) {
    h = func(x_n) / derivFunc(x_n);
    // Update x_n
    x_n = x_n - h;

    // Update convergence variables.
    relErr = Math.abs(h);
    iter++;
  }
  return x_n;
}

// This implementation of the Newton Raphsom Method requires the user to pass a
// composite function that represents the function being solved divided by its
// first derivative, an initial guess for x=x_0, and the maximum error the user
// seeks to achieve.
function newtonRaphson2(funch, x_0, maxErr, maxIterations) {
  let x_n = x_0;
  let h = funch(x_n);
  let relErr = Math.abs(h);
  let iter = 1;

  // Iterate until the relative error is less than the desired maximum
  // error or a maximum number of iterations is performed.
  while (relErr >= maxErr && iter <= maxIterations) {
    h = func(x_n);
    // Update x_n
    x_n = x_n - h;

    // Update convergence variables.
    relErr = Math.abs(h);
    iter++;
  }
  return x_n;
}

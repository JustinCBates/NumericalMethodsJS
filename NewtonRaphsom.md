The Newton Raphsom method is defined by the following equation:
(1) x_n+1 = x_n - f(x_n)/f'(x_n)

here x_n is an evaluated value at iteration n and x_n+1 is the new value at the next iteration.
f(x) is a function with respect to x and f'(x) is the first derivative of that same function.
f(x_n) is then the function evaluated at the the guess of x at iteration n.

(2) e = x_n+1 - x_n is then a useful measure of relative error that can be used to determine when the method has been iterated enough times to provide a reasonably accurate answer for the value x.

We can combine equation (2) with (1) by rewriting (1) such that:
x_n+1 - x_n = -f(x_n)/f'(x_n)
or
e = -f(x_n)/f'(x_n)

This method is used to find roots of polynomials, or rather a single root from the given initial guess of x_n.
It can fail in many ways. It requires the function to be a smooth and continuous function and is heavily reliant upon the initial guess as to which root it may find, which may not be the root of interest.

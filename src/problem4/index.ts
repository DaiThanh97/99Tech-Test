// Problem 4: Three ways to sum to n

// Sum using For Loop
function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//  Sum using formula
function sum_to_n_b(n: number): number {
  return (n * (n + 1)) / 2;
}

// Sum using recursion
function sum_to_n_c(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n + sum_to_n_c(n - 1);
}

// Output
console.log(sum_to_n_a(5));
console.log(sum_to_n_b(6));
console.log(sum_to_n_c(7));

#!/usr/bin/node

const arg = parseInt(process.argv[2], 10);

function factorial(n) {
  if (isNaN(n)) {
    return 1;
  }
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(arg));

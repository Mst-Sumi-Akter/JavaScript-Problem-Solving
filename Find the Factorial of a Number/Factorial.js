function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); //Factorial of a number n is the multiplication of all positive integers from 1 to n. so 5!=1*2*3*4*5=120

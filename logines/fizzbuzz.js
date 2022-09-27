// Write a program that prints the numbers from 1 to 100 and for multiples of ‘3’ print “Fizz” instead of the number and for the multiples of ‘5’ print “Buzz”.

for (let index = 1; index < 101; index++) {
  if (index % 15 === 0) {
    console.log('FizzBuzz');
  } else if (index % 3 === 0) {
    console.log('Fizz');
  } else if (index % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(index);
  }
}

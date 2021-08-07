// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// This is declaring a function named "buildABear" with 5 parameters in it.
function buildABear(name, age, fur, clothes, specialPower) {
  // Declaring a variable inside a function named "greetings" with the value of a string that uses interpolation with one of the parameters.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  // Declaring a variable named 'demographics' with the value of an array of the parameters "name" and "age".
  var demographics = [name, age];
  // Declaring a variable named 'powerSaying' with a value of a string that uses contatenation with the parameter "specialPower".
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Declaring a variable named 'builtBear' with the value of an object. The object has six key-value pairs that provide info about the built bear.
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
// Stops the execution of the function above and returns a value from that function.
  return builtBear
}
// Calling the function buildABear and giving it arguments.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Calling the function buildABear again and givin git new values for the arguments.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// Declaring a function named FizzBuzz wiht 3 parameters in it.
function fizzBuzz(num1, num2, range) {
  // Declaring a `for` loop with a variable initialized at 0, a condition that ends when the "i" is no longer less than or equal to
  // the value of argument "range", and "i" will increase by one.
  for (var i = 0; i <= range; i++) {
    // If statement that will evaluate a condition. The condition is using an logical AND operator to evaluate two separate conditions.
    // first condition is if the modulus of "i" and "num1" is strictly equal to zero it will evaluate true. Second condition is if
    // the modulus of "i" and "num2" is strictly equal to 0 it will evaluate to true. Both conditions inside the paranthesis
    // have to evalaute to true for the logical AND operation to evaluate to true.
    if (i % num1 === 0 && i % num2 === 0) {
      // If the logical and operator evalautes to true the code block underneat will print.
      console.log('fizzbuzz');
      // `else if` statement checking a condition. If the modulus of "i" and "num1" is strictly equal to 0 it will evaluate to true.
    } else if (i % num1 === 0) {
      // If `else if` statement evaluates to true it will log 'fizz'.
      console.log('fizz');
      // `esle if` statement evaluating a condition. If modulus of "i" and "num2" is stricly equal to 0 it will evaluate to true.
    } else if (i % num2 === 0) {
      // If `else if` evaluates to true 'buzz' will be logged.
      console.log('buzz');
      // If none of the previous conditions evaluates to true this block of code will execute.
    } else {
      // The value of "i" will be logged.
      console.log(i);
    }
  }
}
// Calling the function 'fizzBuzz' and giving it arguments.
fizzBuzz(3, 5, 100);
// calling the function 'fizzBuzz' and giving it new argument values.
fizzbuzz(5, 8, 400);

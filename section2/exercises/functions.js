/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.
function sayHello() {
  console.log("Oh, Hello!");
}

sayHello();
sayHello();
//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
function greetMe(name) {
  console.log(name);
}

greetMe("Ricardo");
greetMe("Vanessa");
greetMe("Mark");

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function countAge(kidAge, parentAge) {
  console.log(kidAge + parentAge);
}

countAge(2, 33);
countAge(5, 30);
countAge(12, 41);
// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function describeRelationship(name1, name2) {
  console.log(name1 + " and " + name2 + " are BFFS");
}

describeRelationship("Oscar", "Ruck");

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
I named the function "describeRelationship" because we wanted to get an end result of "Oscar" and "Ruck"
being BFFS so that told me that we were going to describe what these two were to eachother. If we want to display other people being
BFFS we can just call the function and change the arguments.
For my parameters I used "name1" and "name2" because because that's the type of information we are getting. I added the number at the
end of the name to distinguish between the two of them just so I and whoever is looking at my code can have a better idea
of which is which.

*/

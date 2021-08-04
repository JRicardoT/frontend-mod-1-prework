/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 4;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
We have an if else statement that provides two sets of code.
if condition1, doorChoice is strictly equal to 1 evaluates to true, bearClothing is given the value of "hat".
if condition1 evaluates to false bearClothing is given the value of "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
The variable bearClothing.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
The bearClothing value would be "scarf", because the first condition is not met so it would evaluate to false.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
If condition2, bearChoice is strictly equal to 1 evaluates to true, it executes the block of code "You offer..."
If conditon2 evaluates to false and condition3, bearChoice is strictly equal to 2 evaluates to true, it executes the block of code "You tell..."
If condition2 and condition3 evaluate to false. Condition4, bearChoice strictly equals evaluates to true, it executes the code "You run..."
Block of code "You stay..." executes if none of the conditions above evaluate to true.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
condition4, bearChoice strictly equals 3 would evaluate to true, and the line of code "You run..." would execute.
Assuming that we're still using "scarf" from the previous question, the outcome of what will be logged in the console is:
You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a scarf
It looks like that scarf is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
if  doorChoice is given the value of 1. Condition1, doorChoice is strictly equal to 1 would evaluate to true, and bearClothing would be given the value of "hat"
if variable bearChoice is given the value of 2. Condition3, bearChoice is strictly equal to 2 would evaluate true, and the block of code "You tell..." executes
The final outcome will be:
You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a hat
It looks like that hat is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a hat
It looks like that hat is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You stay with the bear and become it's best friend!
*/

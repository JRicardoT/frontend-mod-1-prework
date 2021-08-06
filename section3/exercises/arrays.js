/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/


//-------------------
// PART 1: Animals: Array Syntax
//-------------------

// EXAMPLE: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals);

// EXAMPLE: Write code below that will log "Zebra" from the animals array
// YOUR CODE HERE
console.log(animals[0]);

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
animals.push("Gorilla");
console.log(animals);
// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals[3] = ("Panther");
console.log(animals)
// YOU DO: Write code that will log the String "Elephant" in the animals array
console.log(animals[2]);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ["banana", "orange", "mango", "apple"];
console.log(foods);

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
foods.unshift("broccoli");
console.log(foods);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
foods.pop();
console.log(foods);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
foods.push("carrots", "tomatoes", "potatoes");
console.log(foods);
// YOU DO: Remove the food that is in index position 0.
foods.shift();
console.log(foods);
//-------------------
// PART 3: Where are Arrays used?
//-------------------

/*
Sometimes we need to hold on to multiple pieces of data, but have it grouped together in a list.
This is why programming languages have arrays!

One example of a web/mobile application that uses arrays is Instagram. Each user has a set of posts
associated with their account. Each post, is one of potentially many, that are grouped together in a list,
or, array.

The post itself likely has more complex data, but here's one way we can think about it:
*/

var posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];

// YOU DO: Think of a web application you commonly use. Where do you see LISTS utilized, where arrays
// may be storing data? Come up with 3 examples - they could be from different web applications or
// all from the same one.

// 1: This is also an oversimplification of how the data is stored but im going to use amazon for this first
// example. If we think of the cart in amazon we probably have items that we're thinking of buying in the
// future. So I think amazon's application saves these items as an array. For example:
var cart = ["LED desk lamp", "power strip", "beats pill speaker"];

// 2: Now Im going to be referring to facebook for the next two examples. I think Facebook stores the
 //people in our friendlist in arrays and this is how I picture it:
 var friends = ["Chris Evans", "Chris Hemsworth", "Mark Ruffalo", "Tom Holland"]
// 3: In your Facebook profile you can also add your featured Pictured and I think those are also
// stored as an array.
var featuredPhotos = ["picture in Tokyo", "picture with elephant", "picture with monkey", "picture with friends"];



//-------------------
// Part 4: Don't let yourself forget everything from Section 2 of Pre-work
//-------------------

/*
YOU DO:
Using the variables defined below, write a program that will tell a user if they
will be able to call an Uber.

The user can call an uber if they have 15% battery remaining, or more. In this case, it doesn't matter
if the user has a charger at all, or what type.
The can call an uber if they have a charger and it is a car charger.

*/
var percentBatteryLeft = 16;
var hasCharger = false;
var chargerType = "car";

// Write your conditional here

// if first condition, the percentage of the battery is greater than or equal to 15 evaluates
// to true, it will print the line "You can call an uber".
if (percentBatteryLeft >= 15) {
  console.log("You can call an uber");
// If first contition evaluates to false, it will go to this second block of code. In this
// case it's using a logical And operator to compare both conditions. It will only evaluate to true
// if both conditions themselves evaluate to true. If it does evaluate to true it will print out
// the line "You can now call an uber".
} else if ((hasCharger === true) && (chargerType === "car")){
  console.log("You can now call an uber");
  // If none of the conditions above evaluate to true the line "Please charge phone" will be logged.
} else {
  console.log("Please charge phone");
}


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟

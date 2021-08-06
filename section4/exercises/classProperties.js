/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Bulldog {

}
var spike = new Bulldog();
console.log(spike);
var flashy = new Bulldog();
console.log(flashy);

// Prompt 2: Snack
class Nuts {

}
var cashew = new Nuts();
console.log(cashew);
var almond = new Nuts();
console.log(almond);
// Prompt 3: Shirt
class Tshirt {

}
var express = new Tshirt();
console.log(express);
var bananaRepublic = new Tshirt();
console.log(bananaRepublic);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Pug {
constructor(name, color, inches) {
  this.name = name;
  this.fur = color;
  this.size = inches;
 }
}
var frank = new Pug();
console.log(frank);
// Prompt 2: Snack
class Chips {
  constructor(name, taste, feel) {
    this.brand = name;
    this.flavor = taste;
    this.texture = feel;
  }
 }
var doritos = new Chips();
 console.log(doritos);
// Prompt 3: Shirt
class SleevelessShirt {
  constructor(kind, dollars, location) {
    this.material = kind;
    this.price = dollars;
    this.made = location;
  }
}
var gymshark = new SleevelessShirt();
console.log(gymshark);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor(breed, lbs, color) {
    this.breed = breed;
    this.weight = lbs;
    this.fur = color;
  }
}
var max = new Dog("Husky", 45, "Black and white");
console.log(max);
var scooby = new Dog("Shar Pei", 32, "Brown");
console.log(scooby)
// Prompt 2: Snack
class Snack {
  constructor(brand, calories, grams) {
    this.brand = brand;
    this.calories = calories;
    this.sugar = grams;
  }
}
var cookie = new Snack("Oreo", 180, "6 g");
console.log(cookie);
var potatoChips = new Snack("kettle", 360, "3 g");
console.log(potatoChips);
// Prompt 3: Shirt
class Shirt {
  constructor(kind, dollars, location) {
    this.material = kind;
    this.price = dollars;
    this.made = location;
  }
}
var dressShirt = new Shirt("Flannel", 80, "USA");
console.log(dressShirt);
var poloShirt = new Shirt("Cotton", 30, "China");
console.log(poloShirt);

//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.
var guests = parseInt(prompt("Please enter the number of guests"));
var donuts = parseInt(prompt("Please enter the number of donuts"));
//write a conditional to check if there are enough donuts
if (donuts > guests) {
  alert("We have " + donuts + " donuts and " + guests + " guests. Seems like thats a good enough ratio.");
} else {
  alert("Oh no! There are only " + donuts + " donuts for " + guests + "guests! We don't have enough donuts for each guest!");
}
//alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.

/*
    Functions are Objects
    The first thing we need to know is that in Javascript,
    functions are first-class objects.
    As such, we can work with them in the same way we work with other objects, 
    like assigning them to variables and passing them as arguments into other functions. 
    This is important,
    because it’s the latter technique that allows us to extend functionality in our applications.
*/

/*
    A callback function is a function that is passed as an argument to another function,
    to be “called back” at a later time.
    A function that accepts other functions as arguments is called a higher-order function, 
    which contains the logic for when the callback function gets executed. 
    It’s the combination of these two that allow us to extend our functionality.
*/

function sayHello() {
  alert("Hello and Welcome my dear user");
}
setTimeout(sayHello, 3000);

// SetTimeOut With anonymous Function
setTimeout(function () {
  alert("Alert After Five Second");
}, 5000);

// Example With Dom
const button = document.querySelector("button");

button.addEventListener("click", dontClick);
function dontClick() {
  alert("👹👹👹👹👹👹 BOOOO 👹👹👹👹👹👹");
}

// Example With Dom Anonymous Function

button.addEventListener("click", function () {
  alert("Why Click ME 👻");
});

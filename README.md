# Coding basics.

Programming basically mean dealing, or manipulating data. Data is information that we store in our
computer programs.

## Data types.

There are several data types with which we're gonna work with.
Here's a list and how to define these data types in JavaScript.

- Number, or integers -> 10.
- Strings, representations of text. "This, is a string"
- Booleans are values that can be true or false. true / false.

All data in JavaScript is just a combination of these types of data.

In order to store data, we can make use of variables. You can think of a variable as a box that you can fit one thing in. To create a new variable, use the keyword var, followed by the name of the variable.

For example:

```
var year = 2019
var game = "tic tac toe";
var wearsGlasses = false;
```

## Complex data structures.

### Arrays

JavaScript lets you create and group together data in more interesting ways with arrays. An array is just a list of other JavaScript data values.

This is how you define an array:

This is an array with numbers:

```
var numbers = [ 10, 20, 30 40 ];
```

This is an array with strings:

```
var names = ["Laura", "Gijs" ];
```

But there can also be a mix of values:

```
var mixOfValues = ["A string", 33, true ];
```

When it’s time to access elements in an array, you use square brackets with the index of the element you want. The of an element is the location of data expressed in a numeric value.

The first element of an array is expressed with 0, the second one 1 etc..
For example,

var indexExample = ["This is the first element", "This is the second element", "This is the third element" ];

In order to get the first element:

```
indexExample[0] // "This the first element"
```

In order to get the second element:

```
indexExample[1] // "This the second element"
```

In order to get the third element:

```
indexExample[2] // "This the third element"
```

Lastly, we can also have arrays nested inside arrays.

```
var nestedArray = [ [ "One", "Two", "Three" ], [ "Four", "Five", "Six" ] ]; // This is a two dimensional array.
```

To access a nested array we can append the index number of the nested array. For example:

```
nestedArray[0][1] // returns the string "Two".
nestedArray[1][2] // returns the string "Six"
```

### Objects

While arrays are mostly used to represent lists of multiple things, objects are often used to represent single things with multiple characteristics, or attributes. Every object consists of a property/value pair. For example, a representation of a car in JavaScript could be:

```
var car = {
    colour: "black",
    manufacturedIn: 1992,
    brand: "Volvo"
}
```

Unlike arrays, objects don't have index numbers. Therefore, in order to access the values we've to use the 'dot' notation. For example:

In order to get the color of our car we can write:

```
car.colour // "black"
car.manufacturedIn // 1992
car.brand // "Volvo"
```

We can add new properties like so:

```
car.owner = "Batman";
```

Or change the value of a property like this:

```
car.owner = "Robin"
```

## Control structures.

### Conditionals

A conditional says, “If something is true, do this. Otherwise, do that.”

The if statement is the simplest of JavaScript’s control structures. It’s used to run code only if a condition is true. For example

```
var name = "Gijs";
if( name === "Gijs" ) {
    // This is the body of the if statement. And will excute of the condition is true

}
else {
    //Otherwise this part will execute.

}
```

### Loops.

Conditionals allow you to run a piece of code once if a condition is true. Loops, on the other hand, allow you to run a piece of code multiple times, depending on whether a condition remains true.

The syntax is as follows:

```
for (setup; condition; increment) {
    console.log("Do something");
}
```

Setup: the code that runs before the loop starts annd which sets an initial value. It’s generally used to create a variable to track the number of times the loop has run.
Condition: Something that is either true or false.
Increment: Something to run after each repetition of the loop body. It’s generally used to update the looping variable.

```
for(var index = 0; 1 < 10; i++) {
    // this loop will run 10 times. And everytime the value of index will increase with 1.

}
```

The most common loop is the for loop and it's often used to run over the value of an array.

```
var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
for (var i = 0; i < animals.length; i++) {
    console.log("This zoo contains a " + animals[i] + ".");
}
```

In this loop, i starts at 0 and goes up to one less than animals.length, which in this case is 3. The numbers 0, 1, 2, and 3 are the indexes of the animals in the animals array.

## Functions

A function is a way to bundle code so that it can be reused. Functions allow us to run the same piece of code from multiple places in a program without having to copy and paste the code repeatedly.

The basic syntax of a function is as follows:

```
function nameOfFunction (){
    // body of function.
    console.log("Hello!");
}
```

The code above is a function declaration. A declaration means how should a function behave/what should it do. It's only a description, so no code really has been excuted yet. We can do that by calling the function.

```
nameOfFunction(); // prints out "Hello!"
```

## DOM Manipulation

The DOM, or document object model, is what allows JavaScript to access the content of a web page. Web browsers use the DOM to keep track of the elements on a page (such as paragraphs, headings, and other HTML elements), and JavaScript can manipulate DOM elements in various ways.

When you load an HTML document into a browser, the browser converts the elements into a tree-like structure. This tree is known as the DOM tree.

The browser gives JavaScript programmers a way to access and modify this tree structure using a collection of methods, this is called DOM manipulation.

### Selecting DOM elements

Every HTML element is a node in the DOM tree and they're JavaScript object. In order to get one of these elements the browser provides some built in methods. Consider the following HTML

```
<html>
    <body>
        <h1 id="header">Hello there.</h1>
    </body>
</html>
```

Now in order to get that the h1 element we can write the following JavaScript:

```
var header = document.getElementById("header");
```

The header variable now is an object that represents the h1 one we see on our webpage. Since header is an object we can get access to the object's properties and change their values.

We can change the text of that header, for example, like so:

```
    header.innerText = "Goodbye!";
```

The getElementById method selects only one element. But sometimes we want select multiple elements at once. Consider the following HTML.

```
<html>
    <body>
        <h1>One</h1>
        <h1>Two</h1>
        <h1>Three</h1>
    </body>
</html>
```

In order to select all the h1 elements at once.

```
var collectionOfHeaders = document.getElementsByTagName("h1");
```

The collectionOfHeaders variable here is a list (an array like structure). We can loop over the collection and change the object at once.

```
for(var index = 0; i < collectionOfHeaders.length; i++){
    var oneHeader = collectionOfHeaders[index]; // this is one header element.
    oneHeader.innerText = "You've changed me!";
}
```

### Event listeners or, how to define user interaction.

Event listeners can be considered as attributes on HTML elements that wait (listen) for user interaction and then trigger certain functionality as defined by the developer.

For example,

```
<html>
    <body>
        <h1 id="header">One</h1>
        <button id="btn">Click me!</button>
    </body>
</html>
```

We can add an event listener on the button like so:

```
    var button = document.getElementById("btn");
    button.onClick = function() {
        console.log("the button has been clicked");
    }

```

When someone clicks the button, the console will display: "the button has been clicked";

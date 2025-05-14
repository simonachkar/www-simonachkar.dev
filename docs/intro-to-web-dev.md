---
title: 'Introduction to Web Development'
date: '2023-10-02'
imgUrl: 'https://res.cloudinary.com/dzoanfblg/image/upload/v1707099547/simonachkar.dev/x3camgippi6p9c33tpxm.png'
---

Web Development is the art of crafting the digital landscapes we navigate every day, from the websites we browse to the applications that make our lives easier.

In this guide, I'll try my best to lay down the essential groundwork you need before embarking on your journey through the world of web development. We'll cover the basics of HTML, CSS, and JavaScript — the three pillars of web development.

I acknowledge that this is a lengthy read, so please don't hesitate to go through it at your preferred pace and take short breaks as needed. ☕️

## Table of Contents:

- [Understanding the Basics](#basics)
- [HTML: The Structure of the Web](#html)
- [CSS: Styling Your Web Pages](#css)
- [JavaScript: The Language of the Web](#js)
- [The Journey Ahead: Front-end Frameworks and Beyond](#outro)

<a name="basics"></a>

## Understanding the Basics

How does the web work? At its core, the World Wide Web is a system of interconnected documents and resources that are accessed via the internet. These documents, often in the form of web pages, are displayed in web browsers, allowing users to consume information, interact with applications, and navigate the digital landscape.

Think of the web as a massive library filled with books (web pages) connected by a network of pathways (the internet). When you want to read a book (access a web page), you use a magic tool called a web browser (like Chrome, Firefox, Safari, etc.).

<a name="html"></a>

## HTML: The Structure of the Web

![](https://user-images.githubusercontent.com/19724710/272027432-b02fc37a-f710-4687-b198-f50f46b1d4b0.jpg)

HTML (HyperText Markup Language) is used to give content to a web page and instructs web browsers on how to structure that content. Think about it as the blueprint for your web page. Each piece of content on a web page, such as text, images, links, and forms, is represented using HTML elements enclosed within tags.

### HTML Tags

HTML elements are marked by opening and closing tags. These tags are like instructions that tell the browser how to display the content. The opening tag indicates the beginning of an element, and the closing tag marks its end. Here's an example of a basic HTML structure:

```html
<!doctype html>
<html>
  <head>
    <title>Simple Web Page</title>
  </head>

  <body>
    <h1>Welcome to My Web Page</h1>

    <p>This is a paragraph of text.</p>

    <a href="https://www.example.com">Visit Example</a>

    <div>
      <h2>Some Important Info</h2>

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>

    <img src="image.jpg" alt="Image Description" />
  </body>
</html>
```

In this example:

- `<!DOCTYPE html>`: This **declaration** tells the browser that the document is an HTML5 document.
- `<html>`: This element serves as the root element of the page, encapsulating all other elements.
- `<head>`: Contains meta-information about the document, such as the page title.
- `<title>`: Sets the title of the web page, which appears in the browser's tab or title bar.
- `<body>`: Contains the visible content of the web page.
- `<h1>`: Represents a top-level heading.
- `<p>`: Stands for a paragraph of text.
- `<a>`: Creates a hyperlink with the "href" attribute pointing to an external URL.
- `<div>`: A generic container for grouping elements.
- `<h2>`: A secondary-level heading.
- `<ul`>: Defines an **u**nordered **l**ist (bullet points) - There is also the **o**rdered **l**ist (`<ol>`) that represents list items in a numbered list.
- `<li>`: Represents list items within an unordered list.
- `<img>`: Displays an image with the "src" attribute specifying the image file and "alt" providing alternative text for accessibility.

### Comments

In HTML, comments can be added between an opening `<!--` and a closing `-->`.

Content inside of comments will not be rendered by browsers, and are usually used to describe a part of code or provide other details. Comments can span single or multiple lines.

```html
<!-- I'm a comment -->
<div>Content</div>

<!--
  Comments can be 
  multiple lines long.
-->
```

### Semantic HTML

Semantic HTML is about using elements that convey meaning to both humans and machines. For example:

- `<header>`: Defines a header for a document or a section.
- `<nav>`: Represents a navigation menu.
- `<section>`: Defines a section of content.
- `<article>`: Represents an independent, self-contained piece of content, such as a blog post.

Using semantic elements improves accessibility and search engine optimization (SEO) because it helps browsers and search engines understand the structure of your content.

<a name="css"></a>

## CSS: Styling Your Web Pages

![](https://user-images.githubusercontent.com/19724710/272027854-d1faef31-8f2d-48c7-8753-9add86228bf9.jpg)

CSS (Cascading Style Sheets) is the tool that adds style and aesthetics to your HTML structure. It allows you to control the presentation, layout, and design of your web pages. In this section, we'll explore the basics of CSS and demonstrate how to apply styles to HTML elements.

### Understanding CSS

CSS works by selecting HTML elements and defining how they should appear. It enables you to control properties like colors, fonts, margins, padding, and more.

### Applying CSS Styles

There are three main ways to apply CSS styles to an HTML page:

#### 1. Inline Styles

You can apply styles directly to individual HTML elements using the "style" attribute. Here's an example:

```html
<p style="color: blue; font-size: 16px;">This is a blue paragraph with a 16px font size.</p>
```

#### 2. Internal Stylesheet

You can include CSS rules within the `<style>` element in the HTML `<head>` section. This method applies styles to elements on the same page. Here's an example:

```html
<!doctype html>
<html>
  <head>
    <title>My Web Page</title>
    <style>
      p {
        color: green;
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <p>This is a green paragraph with an 18px font size.</p>
  </body>
</html>
```

#### 3. External Stylesheet

You can create a separate CSS file (e.g., "styles.css") and link it to your HTML pages using the `<link>` element. This method allows you to re-use styles across multiple pages. Here's an example:

```css
/* styles.css file */

p {
  color: red;
  font-size: 20px;
}

.blue-text {
  color: blue;
}

.large-font {
  font-size: 24px;
}

/* Btw that's how you would write a comment in a CSS file */
```

```html
<!doctype html>
<html>
  <head>
    <title>My Web Page</title>
    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <p class="blue-text">This is a blue paragraph.</p>
    <p class="large-font">This paragraph has a larger font size.</p>
  </body>
</html>
```

In this example, we've also defined two **CSS classes**, "blue-text" and "large-font," in the external stylesheet. These classes can then be applied to various HTML elements using the class attribute.

### Basic CSS Properties

Let's revisit some fundamental CSS properties and their usage:

- `color`: Sets the text color.
- `font-size`: Adjusts the font size.
- `margin`: Defines space around an element.
- `padding`: Determines space within an element.
- `background-color`: Sets the background color.
- `border`: Adds a border around an element.

Here's an example applying these properties using CSS classes:

```html
<!doctype html>
<html>
  <head>
    <title>Styling with CSS</title>
    <link rel="stylesheet" type="text/css" href="styles.css" />
  </head>
  <body>
    <div class="box blue-text large-font">
      This is a styled box with blue text and a larger font size.
    </div>
  </body>
</html>
```

```css
/* styles.css */

.box {
  color: white;
  font-size: 16px;
  margin: 10px;
  padding: 20px;
  background-color: #3498db;
  border: 2px solid #2980b9;
}

.blue-text {
  color: blue;
}

.large-font {
  font-size: 24px;
}
```

In this example, we've applied CSS classes to a `<div>` element, enhancing its appearance using properties defined in an external stylesheet. CSS classes offer a versatile way to maintain a consistent design across various elements throughout your web page. It's important to note that properties specified in classes can override properties defined in other classes, allowing for control over styling. For instance, the `blue-text` class overwrites the text color set in the `box` class, resulting in blue text, and the `large-font` class sets a larger font size, overriding the default size defined in the `box` class.

<a name="js"></a>

## JavaScript: The Language of the Web

![](https://user-images.githubusercontent.com/19724710/272027970-2a6da6f0-3770-4a80-ad36-78a4e3f97383.jpg)

JavaScript (JS) is a widely-used programming language that plays a central role in web development. It allows you to add interactivity and functionality to web pages, making them dynamic and engaging. In this section, we'll explore the fundamentals of JavaScript to provide you with a solid foundation before you dive into the world of front-end frameworks.

### What is JavaScript

JavaScript is a scripting language that allows you to add dynamic behavior to web pages. It can interact with HTML and CSS, enabling you to respond to user actions, modify page content, and communicate with servers. JavaScript is executed by web browsers, making it a vital part of front-end web development.

### Your First JavaScript Code

Let's start with a simple "Hello, World!" example. Create an HTML file (e.g., `index.html`) and open it in your text editor. Add the following code:

```html
<!doctype html>
<html>
  <head>
    <title>My First JavaScript Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>

    <script>
      // JavaScript code goes here
      alert('Welcome to JavaScript!')
    </script>
  </body>
</html>
```

In this example:

We include a `<script>` tag within the HTML body. This is where our JavaScript code will reside.

Inside the `<script>` tag, we have a simple `alert()` statement that displays a popup alert with the message "Welcome to JavaScript!" when the page is loaded.

You can open this HTML file in your web browser to see the JavaScript code in action.

### Variables and Data Types

In JavaScript, you use variables to store and manage data. These variables can hold various data types, such as strings, numbers, booleans, arrays, and objects. Furthermore, JavaScript provides different declaration keywords, including `const`, `let`, and `var`, each with distinct behaviors. Here's how you declare and initialize variables:

```js
// Declaring variables
let name
let age

// Initializing variables
name = 'John'
age = 30

// Declaring & Initializing variables
let isAuthorized = false
```

In JavaScript, variables serve as containers to store and manage data. You can declare variables using three primary keywords: `const`, `let`, and `var`.

- `const` is used for variables that should remain **constant**, meaning their values cannot be reassigned once set.
- `let` is used for variables that can be reassigned, and they have block-level scope, making them accessible only within the block of code where they are defined.
- `var`is now considered outdated in modern JavaScript, declares variables with function scope.

> [More on `const`, `let`, and `var`](https://www.freecodecamp.org/news/differences-between-var-let-const-javascript/)

### Data Types

JavaScript supports various data types, and variables can hold values of different types. Here are some of the primary data types:

#### Strings

Strings are used to represent textual data. They are enclosed in either single quotes (`'`) or double quotes (`"`), or backticks (\` \`) when using template literals for string interpolation.

```js
const greeting = 'Hello, World!'
const name = 'Alice'
const message = `Hi, ${name}!` // Using template literals for string interpolation
```

#### Numbers

Numbers can be integers or floating-point values (decimal numbers). JavaScript treats all numbers as floating-point values.

```js
const age = 25
const pi = 3.14159
```

#### Booleans

Booleans represent either `true` or `false`. They are commonly used for conditional statements and logical operations.

```js
const isLogged = true
const hasPermission = false
```

#### Arrays

Arrays are ordered collections of values. Each element in an array can have a different data type, and you can manipulate arrays using various methods and operations.

```js
const fruits = ['apple', 'banana', 'cherry']
const mixedArray = [42, 'Hello', true]
```

#### Objects

Objects are collections of key-value pairs, where keys are strings (or symbols) and values can be of any data type. Objects are versatile and used to represent structured data.

```js
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  'is-admin': true,
  printName: () => {
    return `Name: ${firstName} ${lastName}`
  },
}
```

### Working with Arrays and Objects

Arrays and objects are fundamental data structures in JavaScript. You can create, manipulate, and iterate through them. Here's an example of an array and an object:

```js
// Array
const fruits = ['apple', 'banana', 'cherry']

// Object
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
}
```

#### Manipulating Arrays

##### Adding and Removing Elements

You can add elements to the end of an array using the push method and remove the last element using pop. For example:

```js
const fruits = ['apple', 'banana', 'cherry']

// Adding an element to the end
fruits.push('orange') // ['apple', 'banana', 'cherry', 'orange']

// Removing the last element
const removedFruit = fruits.pop() // 'orange' is removed, and removedFruit is 'orange'
```

##### Access and Update

You can access array elements by their index and update them. Array indices are zero-based, meaning the first element is at index 0. For example:

```js
const colors = ['red', 'green', 'blue']

// Accessing an element
const firstColor = colors[0] // 'red'

// Updating an element
colors[1] = 'yellow' // ['red', 'yellow', 'blue']
```

##### Filtering and Mapping

The `filter` method creates a new array with all elements that pass a test (provided as a function). For example, filtering even numbers:

```js
const numbers = [1, 2, 3, 4, 5, 6]
const evenNumbers = numbers.filter((num) => num % 2 === 0) // [2, 4, 6]
```

The `map` method creates a new array by applying a function to each element in the original array. For example, doubling each number:

```js
const numbers = [1, 2, 3]
const doubledNumbers = numbers.map((num) => num * 2) // [2, 4, 6]
```

#### Manipulating Objects

##### Adding Properties

You can add properties to an object by simply assigning a value to a new key. For example:

```js
const person = {
  name: 'Alice',
  age: 30,
}

person.city = 'Halifax' // Adding a new property
```

#### Updating Properties

You can update the value of an existing property by reassigning it. For example:

```js
person.age = 31 // Updating the age property
```

#### Deleting Properties

You can delete a property from an object using the delete keyword. For example:

```js
delete person.city // Removing the city property
```

### Functions

Functions are blocks of reusable code that can perform specific tasks when called. They help you organize your code, make it more modular, and avoid repetition. In JavaScript, you can declare functions using the `function` keyword or use arrow functions for shorter syntax. Here's how to declare and use a function:

```js
// Function declaration
function greet(name) {
  return `Hello, ${name}!`
}

// Function expression (using arrow function)
const add = (a, b) => a + b

// Calling functions
const greeting = greet('Alice') // 'Hello, Alice!'
const sum = add(3, 5) // 8
```

### Loops

Loops allow you to repeat a block of code multiple times. They are essential for iterating through arrays, objects, and performing tasks like data processing. JavaScript offers several types of loops, including `for`, `while`, and `for of`. Here are examples of `for`, `while`, and `for of` loops:

```js
// Using a for loop
const fruits = ['apple', 'banana', 'cherry']
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

// Using a while loop
let i = 0
while (i < fruits.length) {
  console.log(fruits[i])
  i++
}

// Using a for...of loop
for (const fruit of fruits) {
  console.log(fruit)
}
```

### Conditional Statements

Conditional statements are used to make decisions in your code. They allow you to execute different code blocks based on conditions. JavaScript provides `if`, `else if`, and `else` statements for conditional branching. Here's an example:

```js
const age = 18

if (age < 18) {
  console.log('You are under 18 years old.')
} else if (age >= 18 && age < 65) {
  console.log('You are an adult.')
} else {
  console.log('You are a senior citizen.')
}

// Output: You are an adult.
```

In addition to traditional if-else statements, JavaScript provides a concise way to handle conditional expressions using the **conditional (ternary) operator**:

```js
const age = 18
const message = age >= 18 ? 'You are an adult.' : 'You are under 18 years old.'

console.log(message) // Output: You are an adult.
```

Furthermore, you can achieve the same result by nesting conditional operators for more complex conditions:

```js
const age = 18
const message =
  age < 18
    ? 'You are under 18 years old.'
    : age >= 18 && age < 65
    ? 'You are an adult.'
    : 'You are a senior citizen.'

console.log(message) // Output: You are an adult.
```

### DOM Manipulation

The Document Object Model (DOM) represents the structure of an HTML document as a tree-like structure. You can manipulate the DOM using JavaScript to change the content, structure, or appearance of a web page dynamically. Here's a simple example of changing the text of an HTML element using JavaScript:

```html
<!doctype html>
<html>
  <head>
    <title>DOM Manipulation Example</title>
  </head>
  <body>
    <p id="demo">This is a paragraph.</p>

    <script>
      // Accessing an element by its id
      const paragraph = document.getElementById('demo')

      // Modifying the content
      paragraph.textContent = 'This text is updated with JavaScript!'
    </script>
  </body>
</html>
```

In the example above, the first `<script>` tag contains inline JavaScript code, while the second one links to an external JavaScript file named "script.js." Including JavaScript externally is preferred for larger projects to maintain code separation and reusability.

With these additional sections, you now have a comprehensive introduction to JavaScript for web development, covering variables, data types, functions, loops, conditional statements, DOM manipulation, and how to add JavaScript to HTML files. Happy coding!

### JavaScript Resources

- [JavaScript Tutorial on W3 Schools](https://www.w3schools.com/js/)
- [Video: JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour](https://www.youtube.com/watch?v=W6NZfCO5SIk)

<a name="outro"></a>

## The Journey Ahead: Front-end Frameworks and Beyond

![](https://user-images.githubusercontent.com/19724710/272071809-6afbd25f-9d0a-4770-ab7f-7bbeda061d6b.png)

Congratulations on finishing that much of the article! With a solid foundation in HTML, CSS, and JavaScript. I hope that now you are ready to explore the exciting world of front-end development.

### Front-end Frameworks

Front-end frameworks are powerful tools that simplify web application development. They provide pre-built components and structures, making it easier to create interactive and responsive user interfaces. Here are a few key options:

- **React**: Facebook's JavaScript library, known for its component-based architecture and flexibility, is widely used for building user interfaces.
- **Angular**: Developed by Google, Angular is a comprehensive framework that offers a complete package for building web apps. It provides a robust structure for your projects, including powerful tools for routing, form handling, and state management.
- **Vue**: A progressive framework, that focuses on ease of integration and gradual adoption. It's an excellent choice for both beginners and experienced developers who want a lightweight yet powerful framework.

### Exploring Back-End Development

While front-end development is captivating, understanding the back-end is equally essential for comprehensive web development. The back-end is like the engine behind the scenes, handling data, logic, and server operations.

- **Node.js**: To step into the world of back-end development, Node.js is an excellent starting point. It's a JavaScript runtime environment that allows you to build server-side applications using the same language you've been using for the front-end.
- **Express.js**: When paired with Node.js, Express.js becomes a powerful framework for building robust back-end APIs. It simplifies the creation of RESTful services and handles routing, middleware, and more.
- **Databases**: Explore databases like MongoDB, MySQL, or PostgreSQL to store and manage data in your applications. Understanding databases is crucial for creating dynamic and data-driven web apps.
- **Python (Django/Flask)**: Python is a versatile language for web development. Django and Flask are popular Python frameworks for building web applications with different levels of complexity.

### Wrapping Up

I hope this guide has been a helpful step in your journey to learning web development. Remember that web development is an ever-evolving field, and there's always something new to explore. Whether you're excited about diving into front-end frameworks like React, Angular, and Vue, or you're considering venturing into the back-end with technologies like Node.js, the world of web development is full of possibilities.

If you have any questions, please reach out [simon.al.achkar@smu.ca](mailto:simon.al.achkar@smu.ca).

Enjoy the journey, stay curious, and keep coding! 🚀

<b><h1 align="center"><img src="media/logo.svg">WEBTEMBER - Session 3</h1></b>

21/Sep/2025 - Sunday<br>
Presenter: Sreenikethan Iyer
<!-- TODO: Add GDrive recording link -->

Table of contents:
1. [Intro to JavaScript](#1-intro-to-javascript)
2. [Intro to React](#2-intro-to-react)
3. [Create a React project](#3-create-a-react-project)
4. [Build portfolio website](#4-build-portfolio-website)



---



# **1. Intro to JavaScript**
It's a programming language used for both front-end and back-end development. For Webtember, we'll be using it for front-end only.

Do note that learning a programming language takes a lot of effort, time and dedication. This session helps you to get started on essential basics, so that you get the "vibe" of it. A lot of stuff covered here is primarily useful for React.

Here's a summary:

1. **Variables** - `let` is used to declare variables. `const` is used to declare constant values which you won't be changing later.

2. **Data-types**
    - "Primitive" types - string, number, boolean, `null` & `undefined`
    - Arrays - collection of objects.
        ```js
        const myArray = [1, 2, 3];
        ```

3. **Operators**
    - Arithmetic (`+`, `-`, `*`, `/`)
    - Comparison (`===`, `!==`)
    - Logical (`&&`, `||`)

4. **Control Flow** - almost same syntax as C/Java/etc
    - `if/else` statements
        ```js
        if (condition1) {
            // statements to execute when `condition1` is true
        } else if (condition2) {
            // statements to execute when `condition2` is true
        } else {
            // statements to execute when none of the above are true
        }
        ```
    - `for` loop:
        ```js
        for (let i = 0; i < 100; i++) {
            // statements to run in every iteration
            // You can use the value of `i` as you wish. Example:
            console.log("Iteration number: " + i);
        }
        ```
    - `while` loop:
        ```js
        while (condition) {
            // statements
        }
        ```

5. **Functions** - they're a block of code which can take inputs, run statements, and give outputs.
    - Example of a normal function:
        ```js
        function addNumbers(num1, num2) {
            const sum = num1 + num2;
            return sum;
        }
        ```
    - Arrow functions - they're still a function, but written in "expression form".
        ```js
        const myFunction = (num1, num2) => num1 + num2;

        console.log(myFunction(1, 2)); // prints 3
        ```
    - Arrow functions can be even passed entirely to OTHER functions as inputs! Example:
        ```js
        // this function ACCEPTS an entire function as an argument
        function runMyFunction(f, value1, value2) {
            const output = f(value1, value2);
            return output;
        }

        const myFunction = (num1, num2) => num1 + num2; // declare your arrow function here, and store it in a constant
        console.log( runMyFunction(myFunction, 1, 2) ); // pass the arrow function itself to another function! Output :3
        ```

6. **Functional Programming** - it's a programming pattern, just like OOP. The main goal is to use certain functions extensively, such as `array.map()`, `array.filter()`, `array.reduce()`.

    - `array.map()` - convert each element in an array to something else. It takes a FUNCTION as an argument, which is applied on to every item. Example:
        ```js
        const numbers = [1, 2, 3];

        const doubled = numbers.map( num => num * 2 );

        console.log(doubled); // Output: [2, 4, 6]
        ```



---



# **2. Intro to React**
<!-- introduce React -->
<!-- introduce Vite -->



---



# **3. Create a React project**
Create a template React project, using Vite:
```shell
npm create vite@latest . -- --template react
npm i
```

Do a test run:
```shell
npm run dev
```



---



# **4. Build portfolio website**


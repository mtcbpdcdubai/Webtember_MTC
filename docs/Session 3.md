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

Do note that learning a programming language takes a lot of effort, time and dedication. This session helps you to get started on essential basics, so that you get the ✨*vibe*✨ of it. A lot of stuff covered here is primarily useful for React.

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

        const doubled = numbers.map( (num) => num * 2 ); // that's an arrow function!!

        console.log(doubled); // Output: [2, 4, 6]
        ```



---



# **2. Intro to React**
React.js is a popular JavaScript library for building dynamic and interactive user interfaces, especially for single-page applications. Its main selling point is the fact that it uses something called a "virtual DOM", which helps to improve performance when updating any elements on the page!

Now, React uses a variant of JavaScript called "JSX", which browsers can't execute. That's where you need Vite.<br>
Vite is a build tool. Here's what it offers you:
1. Converts JSX code into regular JS code, so that your browsers can run it.
2. Super fast reloading of webpage whenever you make a change.
3. Compacts and merges all your JS code into just a few files, improving the loading times. Kind of like WALL·E 🤖 <!-- wassup, curious perceiver  -->



---



# **3. Create a React project**
1. Create a template React project, using Vite. ([official docs](https://v3.tailwindcss.com/docs/guides/vite))

    In your Documents folder, run these commands, **one by one**. Here, `my-portfolio` is the folder name. Change it to whatever you want.

    ```shell
    npm create vite@latest my-portfolio -- --template react
    cd my-portfolio
    npm install -D tailwindcss@3 postcss autoprefixer
    npx tailwindcss init -p
    ```

2. Open this folder in VS Code.
    ```shell
    code .
    ```

3. Let's configure Tailwind CSS.

    Open `tailwind.config.js`, and replace `content: []` with the following:
    ```js
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    ```

    Open `src/index.css`, and add these at the top:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

4. Install these extensions inside VS Code:
    - [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
    - [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)

5. Do a test run:

    ```shell
    npm run dev
    ```



---



# **4. Build portfolio website**

🔥

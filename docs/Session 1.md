<!-- TODO:
- check title if it's okay
- create multiple versions of this file, to demonstrate in VCS
-->

<b><h1 align="center"><img src="media/logo.svg"> WEBTEMBER - Session 1</h1></b>

07/Sep/2025 - Sunday<br>
Presenter: Sreenikethan Iyer

Table of contents:
1. [Introduction](#1-introduction)
2. [Components of a "Tech stack"](#2-components-of-a-tech-stack)
3. [Web dev concepts](#3-web-dev-concepts)
4. [Dev setup prerequisites](#4-dev-setup-prerequisites)
5. [Useful tips](#5-useful-tips)
6. [Project setup](#6-project-setup)

---

# **1. Introduction**

Welcome to the **Webtember Workshop Series**!

This hands-on workshop is designed to give participants a practical understanding of web development. By the end of the session, you'll have the skills to build your own portfolio website similar to [this example](https://webtembermtc.netlify.app/).

The workshop provides a **concise and practical briefing** on HTML, CSS, JavaScript, and React.js, helping you connect the dots and build a modern web application from scratch.

In this session, you will learn:

1. **Basics of HTML** - Understand the structure of a webpage using essential tags and elements.
2. **Basics of CSS** - Style your webpage effectively using selectors, properties, and layouts.
3. **Basics of JavaScript** - Add interactivity and dynamic behavior to your website.
4. **Introduction to React.js** - Learn how to integrate HTML, CSS, and JS into React components to build modern web apps.
5. **Version Control with Git & GitHub** - Set up your GitHub account, use basic Git commands, and share your project online.
6. **Development Environment Setup** - Install and use VS Code, and learn basic terminal commands essential for project development.

By the end of the workshop, you will be able to:

- Understand the **basic structure of a web page using HTML**.
- Style web pages effectively with **CSS**.
- Add interactivity using **JavaScript**.
- Build and understand **React.js components** and how HTML, CSS, and JS integrate.
- Set up **VS Code** and use the **terminal for development tasks**.
- Use **Git and GitHub** for version control and project sharing.
- Build and **deploy your own portfolio website**.

---



# **2. Components of a "Tech stack"**
A tech stack is the combination of all the technologies we use to build and run an entire application. Here, "stack" refers to the way these different technologies are "layered" on top of each other to create a complete application.

You can It includes the following aspects:
- Programming languages (JavaScript, [Python](https://python.org), …)
- Frameworks and libraries ([React](https://react.dev), [Angular](https://angular.dev), …)
- Databases ([MySQL](https://mysql.com), [PostgreSQL](https://postgresql.org), [MongoDB](https://mongodb.com), …)
- Tools
    - Version control ([Git](https://git-scm.com), [GitHub](https://github.com), …)
    - Package managers ([npm](https://www.npmjs.com), [pip](https://pypi.org/), …)
    - Build tools and bundlers ([Vite](https://vite.dev), [Babel](https://babeljs.io), …)
- APIs
- etc…

The tech stack chosen for any given application can also be described using these components, each of which involve a combination of the technologies mentioned above. Here are the top 3 components that you can start learning about:

1. **Front-end a.k.a. Client-side**

    Client-side refers to the code and tech that runs on the users' devices. This component mainly deals with how your app is *presented* to the user, and this is what your user *interacts* with. Here's some scenarios for client-side software:
    - Instagram app on your phone
    - LMS website that you see on your laptop
    - The Telnet/SSH window that you see in your CP and OOPS labs

    The data for client-side software is usually received from the back-end.

2. **Back-end a.k.a. Server-side**

    Server-side refers to the code and tech that runs on a dedicated server. This component mainly deals with the "*business logic*" of your app and behind-the-scenes stuff. Here's some scenarios for server-side software:
    - The Instagram server in Meta's control
    - The game server that tells you about other players
    - The ChatGPT model software that runs on OpenAI's machines

3. **Databases**

    Anything which has to persist for a long time is stored in databases. The server-side software interacts with databases very closely. Here's some scenarios for databases:
    - Storing the Instagram posts and reels that you upload
    - Storing the courses that you are enrolled into
    - Storing your past conversations you've had with ChatGPT

---

# **3. Web dev concepts**
<!-- TODO: content -->
<img src="media/1_html_css_js.png" />

---

# **4. Dev setup prerequisites**
<!-- TODO: content -->

---

# **5. Useful tips**
<!-- TODO: content -->

---

# **6. Project setup**
Follow the steps below to set up your development environment and start building your portfolio website:

1. **Install Visual Studio Code (VS Code)**  
   - Download: [https://code.visualstudio.com/](https://code.visualstudio.com/)  
   - Recommended Extensions: Live Server, Prettier, ES7+ React/Redux/React-Native snippets  

2. **Install a modern web browser**  
   - Google Chrome: [https://www.google.com/chrome/](https://www.google.com/chrome/)  
   - Mozilla Firefox: [https://www.mozilla.org/firefox/](https://www.mozilla.org/firefox/)  

3. **Install Git and create a GitHub account**  
   - Git: [https://git-scm.com/downloads](https://git-scm.com/downloads)  
   - GitHub: [https://github.com/join](https://github.com/join)  

   **Basic Git Commands:**  
   ```bash
   git init                  # Initialize Git repository
   git clone <repository>    # Clone a repository
   git status                # Check Git status
   
4. **Install Node.js and npm**
    Download: [https://nodejs.org/en/download/]([https://nodejs.org/en/download/])
    Check Installation:
    node -v
    npm -v

 5. **Use the Terminal / Command Line**
    - Windows: Command Prompt or Git Bash
    - macOS/Linux: Built-in Terminal

    Useful Commands:
    cd <folder_name>          # Navigate directories
    mkdir <folder_name>       # Create a new folder


 6. **Create a React App**

    cd <your-project-folder>       # Navigate to your project folder
    npx create-react-app my-portfolio   # Create a new React app
    cd my-portfolio                # Navigate into the project
    npm start                       # Start the development server

    React Documentation: [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)

7. **Install and Configure Tailwind CSS**

    cd my-portfolio
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p


    **Configure tailwind.config.js:**

    /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



**Add Tailwind directives to src/index.css:**

@tailwind base;
@tailwind components;
@tailwind utilities;


**Start the project:**

npm start


Tailwind Documentation: [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)





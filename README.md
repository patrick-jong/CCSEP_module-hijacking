CCSEP Assignment 1
Topic: JavaScript Module Hijacking

DESCRIPTION:
A simple application written with Node.js with a front-end with a button which executes a module. Pressing 'run module' will execute 'trusted-module.js', which simply returns a string saying the module has executed and returns the number of users in a database.json file. However, the routes.js file can be exploited and the path can be updated to the 'untrusted-module.js' which can executes malicious code, such as stealing sensitive information from the database.


HOW TO RUN:
1. Install Node.js (through website)
2. Install dependencies:
      npm install express
3. Run on https://localhost:3000 using
      npm start

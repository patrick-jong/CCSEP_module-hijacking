CCSEP Assignment 1
Topic: JavaScript Module Hijacking

HOW TO RUN:
1. Install Node.js (through website)
2. Install dependencies:
      npm install express
3. Run on https://localhost:3000 using
      npm start

Pressing 'run module' will execute 'trusted-module.js', which simply returns a string saying the module has executed. 
However, routes.js can be exploited and the path can be updated to the 'untrusted-module.js' which can potentially execute malicious code.

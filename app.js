const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/routes'); // Path to routes.js

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes for API calls
app.use('/', routes);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});

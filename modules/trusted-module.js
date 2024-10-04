// This is the module that returns the number of users in the 'database'

const fs = require('fs');
const path = require('path');

module.exports = {
    run: function () {
        console.log("Trusted module is running!!! :)");

        // Read and parse the sensitive data from the JSON file
        const dataPath = path.resolve(__dirname, '../data/database.json');
        const data = fs.readFileSync(dataPath, 'utf8');
        const jsonData = JSON.parse(data);

        // Get the number of users
        const numberOfUsers = jsonData.users.length;

        // Return the number of users
        return `Trusted module execution completed :) \nNumber of users: ${numberOfUsers}`;
    }
};


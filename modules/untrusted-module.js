// This is the unsafe module 
const fs = require('fs');
const path = require('path');  

module.exports = {
    run: function () {
        console.log("Unsafe module is running !!!"); 
        
        const dataPath = path.resolve(__dirname, '../data/database.json');
        const data = fs.readFileSync(dataPath, 'utf8');
        console.log("Sensitive data stolen:", data);

        var stolenData = "Unsafe module is being executed :( \n Stolen data:\n";
        stolenData += data;

        return stolenData;
    }
};


const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');
const crypto = require('crypto');


// MIGIATION METHOD - Integrity check, through validateModule() method 
/*
function validateModule(modulePath) {
    const expectedHash = 'b14c76a1b32226e20bafabbd0287b5d2deec81ea84b520cf2fd325ce4e678082';  
        // Hash found using: shasum -a 256 modules/trusted-module.js
    const fileBuffer = fs.readFileSync(modulePath);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    const calculatedHash = hashSum.digest('hex');
    return calculatedHash === expectedHash;
}
*/

// Endpoint to run the module
router.get('/run-module', (req, res) => {
    const modulePath = path.resolve(__dirname, '../modules/trusted-module.js');     // Path to module - can alter to unsafe module
    
    // UNSAFE CODE (no validation). Comment out this, and uncomment mitigation methods to run the mitigation methods.
    const trustedModule = require(modulePath);
    res.send(trustedModule.run());

    // MITIGATION METHOD
    /*
    if (validateModule(modulePath)) {
       const trustedModule = require(modulePath);
        res.send(trustedModule.run());
    } else {
        res.send("Module integrity check failed! Possible hijacking attempt.");
    }
    */

});

module.exports = router;

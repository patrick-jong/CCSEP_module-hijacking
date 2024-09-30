const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');
const crypto = require('crypto');


// MIGIATION METHOD - Integrity check, through validateModule() method 
/*
function validateModule(modulePath) {
    const expectedHash = 'bd3445ad7bb66033fa5522d860d4dbeb2af6cd174c19f1920876bb0b9fe53eaf';  
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
    const modulePath = path.resolve(__dirname, 'modules', 'trusted-module.js');     // Path to module - can alter to unsafe module
    
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

// This is the unsafe module 

module.exports = {
    run: function () {
        console.log("Unsafe module is running !!!"); 
        
        // Can exploit code here, e.g. stealing sensative data

        return "Unsafe module is being executed !!! :(";
    }
};

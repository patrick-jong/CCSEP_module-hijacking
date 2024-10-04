// This is the unsafe module 

module.exports = {
    run: function () {
        console.log("Unsafe module is running !!!"); 
        
        const dataPath = path.resolve(__dirname, '../data/sensitive-data.json');
        const data = fs.readFileSync(dataPath, 'utf8');
        console.log("Sensitive data stolen:", data);

        return "Unsafe module is being executed !!! :(";
    }
};


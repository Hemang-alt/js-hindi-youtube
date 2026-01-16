// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB connected`);
    
})();

// ()()

((name) => {
    console.log(`DB connected Two ${name}`);
})("Hemang")

// semicolon is mandatory if there are two iifes


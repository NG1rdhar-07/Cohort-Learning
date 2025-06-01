let promise1 = new Promise((resolve, reject) => {
    let success = false;
    if(success) {
        resolve("promise fulfilled 1\n");
    }
    else{
        reject("promise rejected\n");
    }
} );

// concept of chaining promises
promise1.then((message) => {
    console.log("First Message: " + message);
    return "promise fulfilled 2";
}).then((message) => {
    console.log("Second Message: " + message);
    return "promise fulfilled 3";
}).catch((error)=> {
    console.log("Error Occured, we f*ck you students !!\n");
    return null;
})
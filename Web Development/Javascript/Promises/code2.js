let promise1 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
});

let promise2 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 2000, "Second");
});

Promise.all([promise1, promise2]); // all promises inside must be resolved !!
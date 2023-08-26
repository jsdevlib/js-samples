//1
setTimeout(() => {
    console.log("1", "is the loneliest number");
}, 0);
setTimeout(() => {
    console.log("2", "can be as bad as one");
}, 10);

//2
Promise.resolve("hi").then(data => console.log("2", data));

//3
console.log("3", "is a crowd");

Promise.resolve("asyncfail")
    .then(response => {
        console.log(response);
        throw new Error("#1 fail");
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error("error", err.message);
    })
    .then(response => {
        console.log("hi am I still needed?", response);
        return "done";
    })
    .catch(err => {
        console.error(err);
        return "failed";
    });

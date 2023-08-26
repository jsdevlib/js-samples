const data = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
]);

data.set(4, "four").set(5, "five");

export const Run = () => {
    data.forEach((value, key) => {
        console.log(`${key} = ${value}`);
    });

    for (const [key, value] of data) {
        console.log(`${key} = ${value}`);
    }

    for (let key of data.keys()) {
        console.log(key);
    }

    for (let value of data.values()) {
        console.log(value);
    }
};

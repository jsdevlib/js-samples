function multiply(a, b) {
    return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));

var b = {
    name: "jay",
    say() {
        console.log(this);
    },
};

var c = {
    name: "jay",
    say() {
        return function() {
            console.log(this);
        };
    },
};

var d = {
    name: "jay",
    say() {
        return () => console.log(this);
    },
};

const character = {
    name: "Simon",
    getCharacter() {
        return this.name;
    },
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

console.log("?", giveMeTheCharacterNOW());

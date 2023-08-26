//Exercise:
const a = function() {
    console.log(this);
    const b = function() {
        console.log(this);
        const c = {
            hi: function() {
                console.log(this);
            },
        };
        c.hi();
    };
    b();
};

a();

//JS is weird:
const obj = {
    name: "Billy",
    sing: function() {
        console.log(this); // in this case, it's a method on an object.
        var anotherFunc = function() {
            console.log(this); // this points to windows!
        };
    },
};

//Function Scope
function loop() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

//Block Scope
function loop2() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

// Scope:
function sayMyName() {
    var a = "a";
    return function findName() {
        var b = "b";
        console.log(c);
        return function printName() {
            var c = "c";
            return "Andrei Neagoie";
        };
    };
}

sayMyName()()();

function findName() {
    var b = "b";
    return printName();
}

function printName() {
    var c = "c";
    return "Andrei Neagoie";
}

function sayMyName() {
    var a = "a";
    return findName();
}

sayMyName();

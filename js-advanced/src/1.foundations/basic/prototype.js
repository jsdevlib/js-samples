const Draco = {
    name: "Draco",
    fight() {
        return 5;
    },
};

var harry = "potter";
var voldemort = "He who must not be named";

function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
}

fight(harry, voldemort);

import Draco from "./draco";

const Drogon = {
    name: "Drogon",
    Speed() {
        return 10;
    },
};

Drogon.__proto__ = Draco;

Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
};

const x = new Date().lastYear();

Array.prototype.map = function() {
    arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(this[i] + "🗺");
    }
    return arr;
};
console.log([1, 2, 3].map());

Function.prototype.bind = function(whoIsCallingMe) {
    const self = this;
    return function() {
        return self.apply(whoIsCallingMe, arguments);
    };
};

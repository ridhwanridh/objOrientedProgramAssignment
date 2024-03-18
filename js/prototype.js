const output = document.getElementById('output');

function Coffee(size, decaf, cream, sugar) {
    this.size = size;
    this.decaf = decaf;
    this.cream = cream;
    this.sugar = sugar;
}

Coffee.prototype.decaffeinated = function () {
    return this.decaf ? "Decaffeinated" : "Not Decaffeinated";
};

Coffee.prototype.description = function () {
    return `Size: ${this.size}, Decaf: ${this.decaffeinated()}, Cream: ${this.cream}, Sugar: ${this.sugar}`;
};

let priyanshCoffee = new Coffee("Medium", false, true, 2);

let robertCoffee = Object.create(priyanshCoffee);


let meganCoffee = new priyanshCoffee.constructor("Small", true, false, 1);


Coffee.prototype.someMethod = function () {
    return "This is a new method added to Coffee prototype";
};



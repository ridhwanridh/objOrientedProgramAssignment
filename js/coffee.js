const output = document.querySelector('#output');

class Coffee {
    constructor(name, size, caffeineLevel) {
        this.name = name;
        this.size = size;
        this.caffeineLevel = caffeineLevel;
    }

    serveIt() {
        output.innerHTML += `<p>Serving ${this.size} ${this.name}</p>`;
    }

    generateImage() {
        const img = document.createElement('img');
        img.src = 'images/coffee.svg'; 
        img.setAttribute('height', this.size * 20); 
        img.setAttribute('title', `${this.name} - Caffeine Level: ${this.caffeineLevel}`);
        output.appendChild(img); 
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Size: ${this.size}, Caffeine Level: ${this.caffeineLevel}`);
    }
}

const myCoffee = new Coffee('Latte', 3, 'Medium');

myCoffee.serveIt();

myCoffee.serveIt();

class Latte extends Coffee {
    constructor(size, caffeineLevel) {
        super('Latte', size, caffeineLevel);
    }

    latteDesc() {
        console.log(`This is a ${this.size} Latte with caffeine level ${this.caffeineLevel}`);
    }
}

const myLatte = new Latte(2, 'Low');

myLatte.latteDesc();


const anotherLatte = new Latte(1, 'High');
anotherLatte.latteDesc();
anotherLatte.serveIt();

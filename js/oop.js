const output = document.getElementById('output');
const output2 = document.getElementById('output2');

function createNewPerson(firstName, lastName, age, interests) {
    let obj = {};
    obj.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    obj.age = age;
    obj.interests = interests;
    obj.greetings = function () {
        output.textContent = `Hello, I am ${this.name.firstName}.`;
    }
    return obj;
}

let person1 = createNewPerson("P1", "LP1", 20, ["swimming", "painting"]);
let person2 = createNewPerson("P2", "LP2", 60, ["coding", "painting"]);

function Person(firstName, lastName, age, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    this.age = age;
    this.interests = interests;
    this.greetings = function () {
        output.textContent = `Hello, I am ${this.name.firstName}.`;
    }
}

let person3 = new Person("P3", "LP3", 50, ["running", "sleeping"]);

function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        return `${this.name.firstName} ${this.name.lastName} is ${this.age} years old. They like ${this.interests.join(', ')}.`;
    };
    this.greetings = function () {
        output.textContent = `Hello, I am ${this.name.firstName}.`;
    };
}

let person4 = new Person("P4", "LP4", 30, "Male", ["reading", "writing"]);

console.log(person1['age']);
console.log(person1.interests[1]);
console.log(person1.bio());

let car = new Object();

car.brand = "honda";
car.model = "civic";
car.fun = function () {
    console.log(this.brand);
}



let anotherCar = Object.create(car);
anotherCar.brand = "toyota";

output2.textContent = anotherCar.brand;

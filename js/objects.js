const output = document.getElementById('output');

/* STEP 1: Create an object (looks a lot like declaring a variable, but with empty braces), 
then open this page in a browser and enter 'person' in the console */
let person = {
    name: {
        firstName: "Ridhwan",
        lastName: "Ridhwan"
    },
    age: 23,
    gender: "Male",
    address: {
        streetNo: 100,
        streetName: "Georgian Drive",
        city: "Barrie"
    },
    interests: ["swimming", "painting", "coding"],
    greetings: function () {
        alert(`Hello, I am ${this.name.firstName}.`);
    },
    bio: function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests}.`;
    },
    greeting: function () {
        alert(`Hello, I am ${this.name.firstName}.`);
    }
};

/* STEP 2a: Add other data items to the above object, like name, age, gender, address, and interests */

/* STEP 2b: Enter the following directly into the console:
    person.name[0]
    person.age
    person.gender
    person.interests[0]
*/
output.textContent = person.bio();


person.age = 16;
person.name.firstName = "Robert";

person.eyeColor = "green";

person.goodbye = function () {
    alert(`This is ${this.name.firstName} signing off!`);
}

let key = "hairColor";
let value = "black";
person[key] = value;


let person1 = {
    name: "P1",
    hello: function () {
        alert(`Hi, I am ${this.name}`);
    }
}

let person2 = {
    name: "P2",
    hello: function () {
        alert(`Hi, I am ${this.name}`);
    }
}


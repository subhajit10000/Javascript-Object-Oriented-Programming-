
class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Cat meows");
    }
}

let animal1 = new Dog();
let animal2 = new Cat();

animal1.sound(); // Dog barks
animal2.sound(); // Cat meows

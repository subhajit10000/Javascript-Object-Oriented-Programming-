// Parent class
class Parent {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(`Name: ${this.name}`);
    }
}

// Child class
class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    showAge() {
        console.log(`Age: ${this.age}`);
    }
}


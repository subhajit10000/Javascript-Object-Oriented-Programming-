class Car {
    // Public method
    start() {
        this.engine();
        console.log("Car started");
    }

    // Internal method
    engine() {
        console.log("Engine started");
    }
}

const car = new Car();

car.start();

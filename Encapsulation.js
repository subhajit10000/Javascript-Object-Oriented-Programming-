class Student {
    // Private variables
    private name;
    private marks;

    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Public functions
    public display() {
        console.log(this.name);
        console.log(this.marks);
    }

    public setMarks(marks) {
        this.marks = marks;
    }
}

class Student {
    // Constarctor Method
    constructor(name, age) {
        this.name = name; // property
        this.age = name; // property
    }

    // Method
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Object from student Class

let student1 = new Student('Rahim', 20);

// dispalyInfo() method call
student1.displayInfo(); // OutPut: Name Rahim, Age: 20
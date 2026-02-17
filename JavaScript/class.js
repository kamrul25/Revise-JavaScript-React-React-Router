console.log("JavaScript Class");

class Human {
    // Can't declare let or const as a class fields
    // let name, age, religion, profession;

    // Human class fields
    // name = "kamrul"; age; religion; profession; 
    constructor(name, age, religion, profession) {
        // let age = 25;  // Local variable (private to constructor)

        // Use this keyword to create create instance properties
        /* 
        this.name and this.age are created when an object is instantiated
        They become instance properties
        They are not class fields declared ahead of time
        */
        this.name = name;
        this.age = age;
        this.religion = religion;
        this.profession = profession;
    }
    // Without "fucntion" keyword declare function inside a class
    // This is the normal way to decalre a function in a class. Sotred on prototype. More memory effcient. Share by all instances
   // Normal function: shared between objects, this binding dynamically, when I want better performance and writing most OOP-style code
    details() {
        console.log(`
            Details about the human
            Name: ${this.name}
            Age: ${this.age}
            Religion: ${this.religion}
            Profession: ${this.profession}
            `);
    }

    /*
    Arrow function in moder js class.
    Sotred on : instance
    Shared between objects: No
    this binding: Lexically bound or auto-bind
    You need automatic this binding
    You're using callbacks (React class components often did this)
    */

    greet = () =>{
        console.log("Form arrow function");
        console.log(`Name : ${this.name}`);
        
        
    }
}

const kamrul = new Human("Kamrul Hasan Jaman", 22, "Islam", "Engineer");
kamrul.details();
kamrul.greet();

class Person{
    constructor(name, age){
        this.name = name //PROPERTY
        this.age = age   //PROPERTY
    }

    introduce(){ //METHOD
        console.log(`
            Hi my name is ${this.name} 
            and I am ${this.age} years old!
        `)
    }
}

let p = new Person("kevin", 55)
p.introduce()

list = [
    new Person("Bob", 22),
    new Person("Carol", 44),
    new Person("Ted", 25),
    new Person("Alice", 33),
]
list.forEach(p => {
    p.introduce()    
});

class Student extends Person {
    constructor(name, age, grade, major) {
        super(name, age); //parent class's constructor e.g. Person
        this.grade = grade
        this.major = major
    }
    // You can also use methods defined in the parent class
    // from the extended class
    introduce() { //OVERIDE replace existing method
        console.log( "My name is " + this.name +
        " and I am " + this.age + " years old" +
        " and I am a " + this.grade +
        " and I study " + this.major + "!" );
    }
}
let s = new Student("Tara", 21, "senior", "Computer Science")
s.introduce()

//complete this code
class Person { 
	constructor(name, age) {
    this._name = name;
    this._age = age;
	}
	get name() {
    return this._name;
  }
	set age(age) {
    this._age = age;
  }
}

class Student extends Person {
	study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
	teach() {
    console.log(`${this._name} is teaching`);
  }
}

const John = new Person("John", 35);
console.log(John.name); 
John.age = 36; 

const John = new Student("John", 20);
console.log(John.name); 
John.study(); 

const Alice = new Student("Alice", 20);
console.log(Alice.name); 
Alice.study(); 

const John = new Teacher("John", 50);
console.log(John.name); // Output: Mr. Smith
John.teach(); // Output: Mr. Smith is teaching.

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

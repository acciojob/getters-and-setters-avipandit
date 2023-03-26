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
    console.log(`${this._name} is studying.`);
  }
}

class Teacher extends Person {
	teach() {
    console.log(`${this._name} is teaching.`);
  }
}

const john = new Person("John", 35);
console.log(john.name); // Output: John
john.age = 36; // set age to 36

const mary = new Student("Mary", 20);
console.log(mary.name); // Output: Mary
mary.study(); // Output: Mary is studying.

const mrSmith = new Teacher("Mr. Smith", 50);
console.log(mrSmith.name); // Output: Mr. Smith
mrSmith.teach(); // Output: Mr. Smith is teaching.

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

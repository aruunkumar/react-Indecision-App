
class Person {
 constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
 }

 getGreetings() {
     return `Hi. I am ${this.name}!`;
 }

 getDescription() {
    return `${this.name} is ${this.age} years old`; 

 }

}
class Student extends Person {
constructor(name, age, major) {
        super(name, age); 
        this.major = major;
    }
hasMajor() {
    return !!this.major  // evaulation of empty string will be false and double not will return true for non-empty string and false for empty string. 
}
getDescription() {
    let description = super.getDescription();
    description += `. Major is ${this.major}`;
    return description;
}
}

class Traveler extends Person {
constructor (name, age, homeLoc) {
    super(name, age);
    this.homeLoc = homeLoc;
}

hashomeLoc() {
    return !!this.homeLoc;
}

getGreetings() {
    let description = super.getGreetings();
    if (this.hashomeLoc()) {
        description += ` I'm visting from ${this.homeLoc}.`;
    }
    return description;

}

}
const me = new Person('Aruun', 32);
const stdnt = new Student('AK', 25, 'Music');
const tvl = new Traveler('Kumar', 28, 'Chennai');
const tvl2 = new Traveler('jacob');
console.log(me.getGreetings());
console.log(me.getDescription());
console.log(stdnt.getDescription());
console.log(tvl.getGreetings());
console.log(tvl2);

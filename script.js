//Function Constructor
/*
let john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};
*/

let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    };

Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';


let john = new Person('John', 1990, 'teacher') ;
let jane = new Person('Jane', 1996, 'actor');
let mark = new Person('Mark', 1972, 'engineer');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.name + " " + john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
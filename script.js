//Function Constructor
/*
let john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};
*/

/*
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
*/
/*
// Object.create
let personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

let john = Object.create(personProto); 
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

let jane = Object.create(personProto,{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969},
    job: { value: 'designer' },
});
 */

 
 // Primitives vs objects

let a = 23;
let b = a;
a = 46;
console.log(a); //46
console.log(b); //23 

let obj1 = {
    name: 'John',
    age: 26
};
let obj2 = obj1;
obj1.age = 30;
console.log (obj1.age); //30
console.log (obj2.age); //30
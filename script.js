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

 /*
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

///// Passiing functions

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if (el >= 18 && el <= 81){
        
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }


}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

///interview
/*
function interviewQuestion(job){
    if (job == 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job == 'teacher') {
        return function(name) {
            console.log('What subjet do you teach, ' + name + '?');
        }
    } else {
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
let designerQuestion = interviewQuestion('designer');

teacherQuestion('John')
designerQuestion('Johhn');

interviewQuestion('teacher')('Mark');

*/

// IIFE
/*
function game(){
    let score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/

/*
(function (){
    let score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck){
    let score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

//retire
/*
function retirement(retirementAge) {
     var a = ' years left until retirement.';
     return function(yearOfBirth){
         var age = 2020 - yearOfBirth;
         console.log((retirementAge - age) + a);
     }
}

var retirementUS = retirement(66);
var retirementD = retirement(65);
var retirementIZ= retirement(67);

retirementUS(1993);
retirementD(1993);
retirementIZ(1993);

retirement(66)(1993);
*/

/////////////
// Bind, call and apply

/*
var john = {
    name: "John",
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old.' );
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.' );
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer',
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['frienly'])

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

*/

////////////
//  CODING CHALLENGE

var Question = function(q, answers, correctAnswer) {
    this.q = q;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

var eyes = new Question('What color are my eyes?', ['green','blue','brown'], 2);
var whatname = new Question('What is my name?', ['Jack', 'Pistyu', 'Jano', 'Ali'], 3);
var language = new Question('What programming language is this?', ['C++', 'JS', 'PHP', 'GO'], 1);

var allQuestions = [eyes, whatname, language];
var randomQuestion = Math.floor(Math.random() * allQuestions.length)

console.log(allQuestions[randomQuestion]);

// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;

        
    }
    speak(){
        console.log(`Hello my name is ${this.name} and I am from ${this.location}`)
        
        
    }

}

class Instructor extends Person{
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;

    }

    demo(subject){
        console.log(`Today we are learning about 
        ${subject}`);

    }

    grade(student,subject){
        const name = student.name;
        console.log(`${name} recieves a perfect score on ${subject}`);

    }



}

class Student extends Person{
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }

    listsSubjects(){
        const subjects = this.favSubjects;
        subjects.array.forEach(element => {
            console.log(element);
        });
    }

    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}`);

    }

    sprintChallenge(sprint){
        console.log(`${student.name} has begun sprint challenge on ${sprint}`);

    }
}

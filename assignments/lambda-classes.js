// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;

        
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
        subjects.forEach(element => {
            console.log(element);
        });
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);

    }

    sprintChallenge(sprint){
        console.log(`${this.name} has begun sprint challenge on ${sprint}`);

    }
}

class PM extends Instructor{
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }

    standUp(channel){
        console.log(`${PM.name} announces to ${channel}, @channel standy times!​​​​​`);
    }

    debugsCode(subject, student){
        console.log(`${PM.name} debugs ${student.name}'s code on ${subject}`);

    }
}


const kevinSilvestre = new Student({
    name: "Kevin Silvestre",
    age: 25,
    location: "Boston,MA",
    previousBackground: "Design",
    className: "WPT16",
    favSubjects: ['HTML', 'CSS','JS']

  });
  

console.log(kevinSilvestre);
kevinSilvestre.listsSubjects();
kevinSilvestre.PRAssignment("HTML");
kevinSilvestre.sprintChallenge("Advanced CSS");
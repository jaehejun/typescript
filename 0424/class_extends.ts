export {}

// //클래스 확장
// //다른 클래스를 확장하거나 하위 클래스를 만드는 자바스크립트 개념에 타입 검사 추가
// class Teacher {
//     teach() {
//         console.log('teaching!');
//     }
// }

// class StudentTeacher extends Teacher {
//     learn() {
//         console.log('Learning!');
//     }
// }

// const teacher = new StudentTeacher();
// teacher.teach();
// teacher.learn();

// // const t:StudentTeacher = new Teacher(); //Fail 다운캐스팅 불가
// const teacher1:Teacher = new StudentTeacher(); //OK 업캐스팅
// teacher1.teach();
// // teacher1.learn(); // property 'learn' not exist on type 'Teacher'


// //클래스확장(상속) - 할당 가능성 확장
// class Lesson {
//     subject:string;
//     constructor(subject:string) {
//         this.subject = subject;
//     }
// }
// class OnlineLesson extends Lesson {
//     url:string;
//     constructor(subject:string, url:string) {
//         super(subject); //this를 사용하기 전에 먼저 호출해야함
//         this.url = url;
//         this.subject = '';
//     }
// }

// let lesson:Lesson; //부모타입
// lesson = new Lesson('coding');
// console.log(lesson.subject);
// lesson = new OnlineLesson('coding', 'orelly.com');
// console.log(lesson.subject);
// // console.log(lesson.url);  // lesson의 type:Lesson

// let online:OnlineLesson;

// online = new OnlineLesson('coding', 'orelly.com');
// console.log(online.subject);
// console.log(online.url); //online의 type:OnlineLesson
// // online = new OnlineLesson('coding');
// //Error: expected 2 args, but got 1
// //argument for 'url' not provided


//클래스 확장 - 할당 가능성 확장 (Cont'd)
class PastGrades {
    grades:number[] = [];
}

class LabeledPastGrades extends PastGrades {
    label?:string; //있으나마나! ==> 부모와 동일구조
}

let subClass:LabeledPastGrades;

subClass = new LabeledPastGrades(); //OK
subClass = new PastGrades(); //OK (structually TypeChecking)
//LabeledPastGrades는 구조적으로 PastGrades와 동일하며
//추가된 label 속성이 선택적이기 때문에
//타입 검사에서 PastGrades 인스턴스를 대신 사용할 수 있음

// class Animal{
//     grades:number[] = [];
// }

// class Dog extends Animal {
//     label?:string;
//     // bark() {console.log('멍멍!');}
// }

// let doggy:Dog;

// doggy = new Dog(); //OK
// // doggy.bark();
// doggy = new Animal(); //OK 단 label이 optional이 아니거나 bark있다면 Error


// //클래스 확장 - 재정의(override)된 생성자
// class GradeAnnouncer {
//     message:string;
//     constructor(grade:number) {
//         this.message = grade <= 65 ? "maybe next time...":"You pass!";
//     }
// }

// class PassingAnnouncer extends GradeAnnouncer {
//     constructor() {
//         super(100);
//     }
// }

// class FailingAnnouncer extends GradeAnnouncer {
//     // constructor() {} //Error:Constructors for derived classes must contain a 'super' call
//     constructor() {
//         super(50);
//     }    
// }

// let pass = new PassingAnnouncer();
// console.log(pass.message);
// let fail = new FailingAnnouncer();
// console.log(fail.message);


// //클래스 확장 - 재정의된 생성자 (Cont'd)
// class GradeTally {
//     grades:number[] = [];
//     addGrades(...grades:number[]){
//         this.grades.push(...grades);
//         return this.grades.length;
//     }
// }

// class ContinuedGradesTally extends GradeTally {
//     constructor(previousGrades:number[]){
//         // 'super' must be called befor accessing 'this'
//         //하위클래스 생성자는 this또는 super에 접근하기 전에 반드시 기본 클래스 생성자 호출
//         super();
//         this.grades = [...previousGrades];

//         console.log("Starting with length", this.grades.length);
//     }
// }
// let cgt:GradeTally = new ContinuedGradesTally([1,2,3]); //3
// // console.log(cgt.addGrades(4,5));


// //클래스 확장 재정의 override된 메소드
// //하위 클래스의 메소드가 기본 클래스의 메소드에 할당될 수 있는 한
// //클래스는 기본 클래스와 동일한 이름으로 새 메소드 다시 지정가능

// class GradeCounter {
//     countGrades(grades:string[], letter:string) {
//         return grades.filter(grade => grade === letter).length;
//     }
// }
// //기본(super)의 GradeCounter의 반환 타입과 매개변수가 작기 때문에 허용
// class FailureCounter extends GradeCounter {
//     //countGrades() { //OK:작기때문에
//     // return 0;
//     // }
//     countGrades(grades:string[]) {
//         return super.countGrades(grades,'F');
//     }
// }
// class AnyFailureChecker extends GradeCounter {
//     countGrades(grades:string[]) {
//         //Type (grades:string[]) => boolean is not assignable to type 
//         //grades:string[],letter:string => number
//     }
//     //type boolean is not assignable to type number
//     return super.countGrades(PastGrades,'F') !== 0; //boolean
// }

// const gc:GradeCounter = new FailureCounter();
// console.log("GradeCounter", gc.countGrades(['A','C','F','F'],'F'));
// // console.log("GradeCoounter", gc.countGrades(['A','C','F','F']));
// //Error:expected 2 args, but got 1



// //클래스 확장 - 재정의된 속성(멤버 변수)
// //하위 클래스는 새 타입을 기본 클래스의 타입에 할당할 수 있는 한 
// //동일한 이름으로 기본 클래스의 속성을 명시적으로 다시 선언할 수 있음
// //재정의된 메소드와 마찬가지로 하위 클래스는 기본 클래스와 구조적으로 일치해야함!
// class Assignment {
//     grade?:number; //기본 클래스에서 number|undefined로 선언
//     //grade:number|undefined //cf.이것도 OK
// }

// class GradedAssignment extends Assignment {
//     grade:number;
//     //하위 클래스에서 grade를 필수(항상존재하는)number 타입으로 선언
//     constructor(grade:number) {
//         super();
//         this.grade = grade;
//     }
// }

// console.log(new Assignment().grade?.toFixed(2)); //undefined
// console.log(new GradedAssignment(100).grade.toFixed(2)); //100.00


// //클래스 확장 - 재정의된 속성
// //속성의 유니언 타입의 허용된 값 집합을 확장할수 없음
// //하위(자식)클래스는 더 구체적(작아야)이어야함
// //만약 확장한다면 하위 클래스 속성은 더 이상 기본 클래스 속성 타입에 할당할수없음
// class NumericGrade {
//     // value = 0; //number 오류 피하려면 value:number|string = 0;
//     value:number|string = 0;
// }
// class VagueGrade extends NumericGrade {
//     value = Math.random() > 0.5 ? 1 : '...'; //number|string
//     //Error:property value in VagueGrade not assignable to same property in base type NumericGrade
//     //type string|number not assignable to type number
//     //type string not assignable to type number
// } //VagueGrade의 value는 기본 클래스 NumericGrade의 number 타입에 |string 추가하려고하므로 에러발생

// const instance4:NumericGrade = new VagueGrade();
// //예상한타입:number
// //실제타입:number|string
// console.log(instance4.value);



// //추상클래스 Abstract Class
// abstract class School {
//     readonly name:string;
//     constructor(name:string) {
//         this.name = name;
//     }
//     abstract getStudentTypes():string[];
// } //School 클래스와 getStudentTypes메소드는 abstract로 표시됨
// class Preschool extends School {
//     getStudentTypes() {
//         return ["preschooler"];
//     }
// }
// // class Absence extends School {} //하위클래스인 Preschool과 Absence는 getStudentTypes를 구현해야함
// //Error:Non-abstract class 'Absence' does not implement all abstract member of 'School'

// let school:School;
// school = new Preschool("Sunnyside");
// console.log(school.name);
// console.log(school.getStudentTypes()); //['preschooler]
// // school = new School('Cloudy'); //Error:Cannot create an instance of an abstract class


// // 멤버 접근성 private/public/protected
// class Base {
//     isPublicimplicit = 0;
//     public isPublicExplicit = 1;
//     protected isProtected = 2;
//     private isPrivate = 3;
//     #truePrivate = 4;
// }
// class Subclass extends Base {
//     example() {
//         this.isPublicimplicit; //OK
//         this.isPublicExplicit; //OK
//         this.isProtected; //OK
//         // this.isPrivate; //Error
//         // this.#truePrivate; //Error
//     }
// }
// console.log(new Subclass().isPublicimplicit); //OK
// console.log(new Subclass().isPublicExplicit); //OK
// // console.log(new Subclass().isProtected); //Error
// // console.log(new Subclass().isPrivate); //Error
// // console.log(new Subclass().#truePrivate); //Error


// class TwoKeywords {
//     private readonly name:string = 'Sam';
//     // readonly private name:string; // private modifier must precede readonly modifier
//     //접근성 제한자는 readonly키워드와 함께 표시할수없음
//     //readonly와 명시적 접근성 키워드로 멤버 선언하려면 접근성 키워드 먼저 적어야함
//     constructor() {
//         this.name = "Tom"; //생성자 안에서는 할당 가능
//                             // Sam -> Tom 생성자 내에서 최초 1회 재할당 가능능
//     }
//     log() {
//         // this.name = "Jane"; //readonly 속성으로 변경 불가
//         console.log(this.name); //클래스 내부에서는 private 프로퍼티 접근가능
//     }
// }

// const two = new TwoKeywords();
// two.log();
// // two.name = "Paul"; // Error : private Property
// //Error


// 멤버 접근성 - 정적 필드 제한자
class Question {
    protected static readonly answer = 'bash';
    protected static readonly prompt = 'favorite programming language?';
    guess(getAnswer:(prompt:string) => string) {
        const answer = getAnswer(Question.prompt);
        if (answer === Question.answer) {
            console.log('You got it!');
        } else {
            console.log('Try again...');
        }
    }
}
// Question.answer;
//Error:Property 'answer' is protected and only accessible within class 'Question' and its subclasses
const q = new Question();
q.guess((prompt) => {
    console.log(prompt);
    return 'bash';
})
q.guess((prompt) => {
    console.log(prompt);
    return 'typescript';
})

class User {
    private constructor(public id:number, protected name:string) {
        this.id = id;
        this.name = name;
    }
}
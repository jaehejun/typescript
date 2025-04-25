export {}

// //클래스 속성 non-null assertion
// class ActivitiesQueue {
//     pending!:string[]; //OK

//     initialize(pending:string[]){
//         this.pending = pending;
//     }
//     next() {
//         return this.pending.pop();
//     }
// }
// const activities = new ActivitiesQueue();
// activities.initialize(['eat','sleep','learn']);
// console.log(activities.pending);
// activities.next();
// console.log(activities.pending);
// activities.next();
// console.log(activities.pending);
// activities.next();
// console.log(activities.pending);


// //클래스 속성 - 선택적 속성 : 속성이름 뒤에 ?를 추가해 옵션으로 선언 -> |undefined포함하는 유니언타입과 동일하게 작동
// class MissingInitializer2 {
//     property?:string;
// }
// console.log(`property`, new MissingInitializer2().property);
// new MissingInitializer2().property?.length;
// // new MissingInitializer2().property.length; //Error: Object is possibly undefined


// // 클래스 속성 - 읽기 전용 속성 readonly(ts에만 존재 js컴파일시 삭제됨) 
// // readonly 속성은 선언된 위치 또는 생성자에서 초기값만 할당 가능
// class Quote {
//     readonly text: string;
//     constructor(text:string){
//         this.text = 'hello'; //constructor에서만 가능!
//     }
//     emphasize() {
//         // this.text += '!'; //Error:Cannot assign to 'text' (readonly property)
//     }
// }
// const quote = new Quote('Hello');
// // quote.text = 'hi!'; //Error: property 'text' does not exist on type 'typeof Quote'
// console.log(quote.text);


// //클래스 속성 - readonly literal
// // 값의 타입이 가능한 한 좁혀진 리터럴 타입으로 유추됨
// class RandomQuote {
//     readonly explicit:string = 'Hello, Typescript';
//     readonly implicit = 'Hello, Typescript'; //Literal Type!

//     constructor() {
//         if (Math.random() > 0.5) {
//             this.explicit = 'Hi'; // OK
//             // this.implicit = 'Hi'; //Error: Type 'Hi' <-> type "Hello, Typescript"
//         }
//     }
// }
// const quote2 = new RandomQuote();
// console.log(quote2.explicit); // type:string
// console.log(quote2.implicit); // type:'Hello, Typescript'


// //타입으로서의 클래스
// class Teacher {
//     sayHello() {
//         console.log('Take chances, make mistakes, get messy!');
//     }
// } //Teacher 클래스의 이름은 teacher 변수에 주석(타입정의)을 다는데 사용됨

// let teacher:Teacher;
// //teacher 변수에는 Teacher 클래스의 자체 인스턴스처럼 Teacher 클래스에
// //할당할 수 있는 값만 할당해야함을 타입스크립트에 알려줌

// teacher = new Teacher(); //OK
// teacher.sayHello(); //OK
// // teacher = 'Hello'; //Error:Type 'string' not assignable to type 'Teacher'
// // teacher = {} //Error

// teacher = {
//     sayHello() {
//         console.log("dd")
//     }
// }; // 구조적 타입 체킹 - 구조만 같으면 통과! Exact-matching은 fressness체크X)
// teacher.sayHello();

// type Teacherx = {
//     sayHello:() => void;
// }


// // 타입으로서의 클래스 (Cont'd)
// class SchoolBus {
//     getAbilities() {
//         //() => string[]
//         return ['magic','shapeshifting'];
//     }
// }
// function withSchoolBus(bus:SchoolBus) {
//     console.log(bus.getAbilities());
// }
// withSchoolBus(new SchoolBus()); //OK
// withSchoolBus ({
//     getAbilities: () => ['transmogrification'], //OK(Structured-type-checking)
// });
// // withSchoolBus({
// //     getAbilities:() => 123,
// // });
// //Error: Type 'number' not assignable to type 'string[]'


//클래스와 인터페이스
//클래스 이름 뒤에 implements 키워드와 인터페이스 이름 추가해서
//클래스의 인스턴스가 해당 인터페이스를 준수한다고 선언
// interface Learner {
//     name:string|number;
//     study(hours:number):void;
// }
// class Student implements Learner {
//     name;
//     constructor(name:string) {
//         this.name = name;
//     }

//     study(hours:number) {
//         for (let i = 0; i < hours; i += 1) {
//             console.log('studying...');
//         }
//     }
// }
// let stu1 = new Student('conan');
// stu1.study;
// // stu1.study(3);


// //클래스와 인터페이스 - 다중 인터페이스 구현
// //클래스에 구현된 인터페이스 목록은 인터페이스 이름 사이에 쉼표를 넣고,
// //개수 제한 없이 인터페이스 사용 가능
// interface Graded {
//     grades:number[];
// }
// interface Reporter {
//     report: () => string;
// }
// class ReportCard implements Graded, Reporter {
//     grades;

//     constructor(grades:number[]) {
//         this.grades = grades;
//     }
//     report() {
//     return this.grades.join(',');
//     }
// }

// let grade = new ReportCard([1,2,3]);
// console.log(grade.report());

// class Empty implements Graded, Reporter{
//     grades;
//     constructor(grades:number[]) {
//         this.grades = grades;
//     }
//     report() {
//         return this.grades.join('-');
//     }
// }
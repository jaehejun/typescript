export {}

// //클래스 메소드(멤버함수)
// //constructor 없어도 컴파일러가 constructor() {} 빈 생성자 자동 생성
// class Greeter {
//     greet(name:string) {
//         console.log(`${name}, do your stuff!`);
//     }
// }

// new Greeter().greet('Miss Frizzle');
// // greet 클래스 메소드에는 string 타입의 매개변수가 필요
// // new Greeter().greet(123); //Error
// // new Greeter().greet(); //Error

// class Greeted {
//     constructor(message:string) {
//         console.log(`As I always say: ${message}!`);
//     }
// }
// new Greeted("Practice makes perfect");
// // Greeted 클래스의 생성자는 message:string 매개변수 필요
// // new Greeted();


// //클래스 속성(attribute,멤버변수)
// //클래스 속성을 읽거나 쓰려면 명시적으로 선언해야함!
// class FieldTrip {
//     destination:string;
//     // nonexistent:string; //Error
//     constructor(destination:string){
//         this.destination = destination;
//         console.log(`We're going to ${destination}!`);
//     }
//     // this.nonexistent = destination; //Error
// }
// const trip = new FieldTrip('Roma');
// trip.destination;
// // trip.nonexistent; // Error


// //클래스속성 - method
// class WithMethod{
//     myMethod() {}
// }
// console.log(new WithMethod().myMethod === new WithMethod().myMethod); //true(:prototype)

// class WithProperty{
//     myProperty!: () => void; //Type 정의 !:Definite Assignment Assertion 연산자
//     //!는 나중에 이 속성을 확실히 초기화하려는 의미(strict mode 피하려고 사용)
// }
// console.log(new WithProperty().myProperty === new WithProperty().myProperty);
// //true (undefined === undefined)
// const instance = new WithProperty();
// // instance.myProperty(); //TypeError: instance.myProperty is not a function

// class WithProperty2{
//     myProperty:() => void; //call signature
//     constructor(){
//         this.myProperty = () => {
//             console.log('Hello, this is myProperty!');
//         }
//     }
// }
// const instance2 = new WithProperty2();
// instance2.myProperty();
// const instance3 = new WithProperty2();
// console.log(instance2.myProperty() === instance3.myProperty()); //true(undefined === undefined)
// console.log(instance2.myProperty === instance3.myProperty); //false


// //클래스 속성 - 함수 속성
// //메소드 접근 방식 VS 값이 함수인 속성을 선언하는 방식
// class WithPropertParameters {
//     takeParameters = (input:boolean) => input? 'Yes':'No';
// }
// const instance3 = new WithPropertParameters();
// instance3.takeParameters(true);
// // instance3.takeParameters(123); // Error: type 'number' not assignable to type 'boolean'


//클래스 속성 - 초기화 검사 : optional이 아니면 필수값!
//strictPropertyInitialization 에서 ts는 undefined타입으로 선언된 각 속성이 생성자에서 할당되었는지 확인함
// strictNullChecks 도 true여야 strictPropertyInitialization true 가능
class WithValue {
    immediate = 0; //OK
    later:number; //OK (constructor에서 할당)
    mayBeUndefined:number|undefined; //OK(undefined허용)
    // unused:number; //strictPropertyInitialization:true(tsconfig.json)
    //Error:Property 'unused' has no initializer and is not definitely assigned in the constructor
    
    constructor() {
        this.later = 1;
    }
}
// console.log(new WithValue().unused); //strictInitializer false이면 undefined

// function sum(a:number, b:number){
//     return a+b;
// }
// console.log(sum(10,20));
// const num:number = 123;
// const str:string = "123";
// function func(n:number){
// }
// func(str)
// function double(n){
//     return n * 2;
// }
// console.log(double(2)); //4
// console.log(double("z")); //NaN
// function double2(n:number){
//     return n * 2;
// }
// console.log(double2(2));
// console.log(double2("z"));
// let isDone: boolean = false;
// let decimal: number = 6;
// let color:string = "blue";
// let list:number[] = [1,2,3];
// let x:[string,number]; //tuple
// interface Animal {
//     name: string
// }
// interface Dog {
//     name: string
//     age: number
// }
// let ani: Animal;
// let dog: Dog = {name: "Conan", age: 10};
// //OK
// ani = dog;
// console.log(ani,dog);
// interface Animal{
//     name:string
// }
// let dog = {name:"Conan", age:10};
// function sayHello(ani:Animal) {
//     console.log(`Hello, ${ani.name}`);
//     // // Animal타입에 age 속성 없어서 컴파일 에러
//     // console.log(`Hello, ${ani.age}`); 
// }
// sayHello(dog); //OK
var state;
// state = {value:0}; //객체 할당
// state = 100; //숫자를 할당
// state = "hello world"; //문자열 할당
state.foo.bar = function () { return console.log("any type 임"); };
// //중첩 구조로 들어가 함수를 할당해도 문제없음
// let unknownValue: unknown;
// unknownValue = 100; //any 타입과 유사하게 숫자이든
// unknownValue = "hello world"; //문자든
// unknownValue = () => console.log("unknown type");
// //함수이든 상관없이 할당 가능
// //(O) any 타입으로 선언된 변수만 할당 가능
// let someValue1: any = unknownValue;
// // let someValue2:number = unknownValue; //X
// // let someValue3:string = unknownValue; //X
// //할당하는 시점에서는 에러가 발생하지 않음
// const unknownFunction: unknown = () =>
//     console.log("unknown type");
// //호출 시에는 에러가 발생: Error: Object is of type 'unknown'.ts
// // unknownFunction();
// if (typeof unknownFunction === "function") {
//     unknownFunction();
// }

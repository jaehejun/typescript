export {}

// function Circle(center, radius) {
//     this.center = center;
//     this.radius = radius;
// }
// Circle.prototype.area = function() {
//     return Math.PI*this.radius*this.radius;
// }

// //클래스 선언문은 엔진이 끌어올리지 않음, new Class() 사용하기 전에 클래스 선언해야함
// class Circle{
//     //생성자를 사용하 초기화
//     constructor(center,radius) {
//         this.center = center;
//         this.radius = radius;
//     }
//     //prototype 메소드
//     area() {
//         return Math.PI.this*this.radius;
//     }
// }


// //접근자
// class Person {
//     constructor(name) { //초기화
//         this.name = name; //접근자(getter/setter)를 호출함
//     }
//     //prototype 메소드
//     get name() {
//         return this._name;
//     }
//     set name(name) {
//         this._name = name;
//     }
//     sayName() {
//         console.log(this.name);
//     }
// }
// let person = new Person('코난');
// console.log(person.name);
// person.name = '장미';
// //_name 프로퍼티 추가되고 '장미'를 _name에 저장
// console.log(person.name);
// // person.name('미란'); // TypeError:person.name is not a function
// person.sayName();

// //정적 메소드
// class Person{
//     constructor(name){ //초기화
//         this.name = name; //접근자(getter/setter)호출함
//         Person.personCount++;
//     }
//     //prototype메소드
//     get name(){
//         return this._name;
//     }
//     set name(name){
//         this._name = name;
//     }
//     sayName(){
//         console.log(this.name);
//     }
//     //정적메소드
//     static count(){
//         return Person.personCount;
//     }
// }
// console.log(Person.count());
// Person.personCount = 0;

// let person1 = new Person('코난'); //1
// console.log(Person.count());
// let person2 = new Person('장미'); //2
// console.log(Person.count());


// //상속(extends) (javascript)
// class Circle {
//     constructor(center, radius){
//         this.center = center;
//         this.radius = radius;
//     }
//     area() {
//         return Math.PI*this.radius*this.radius;
//     }
//     toString() {
//         return "Circle"
//             + " 중심점 ("+this.center.x + "," + this.center.y
//             + "), 반지름 = "+this.radius;
//     }
// }

// class Ball extends Circle {
//     move(dx,dy) {
//         this.center.x += dx;
//         this.center.y += dy;
//     }
//     toString() { //Overriding
//         var str = super.toString(); //super:부모클래스
//         return str.replace("Circle", "Ball");
//     }
// }

// var ball = new Ball({x:0,y:0},2);
// console.log(ball.toString());
// console.log(ball.area());
// ball.move(1,2);
// console.log(ball.toString());


//클래스 메소드(멤버함수)


// const str:string = 'hello';
// const num:number = 1;
// const flac:boolean = false;
// const n:null = null;
// const u:undefined = undefined;
// const sym:symbol = Symbol('sym');
// const big:bigint = 100000000n;
// const obj:object = {hello:'world'};


// var favorite:{title:string, author:string} 
// = {title:'the mousetrap', author:'Christie'};
// console.log(favorite);


// const sym1 = Symbol.for('sym');
// //const sym1:typeof sym1 -> unique symbol
// console.log(sym1);

// const sym2 = Symbol.for('sym');
// //const sym2:typeof sym2 -> unique symbol
// console.log(sym2);

// let sym3 = Symbol.for('sym'); //let sym3:symbol
// let sym4 = Symbol.for('sym'); //let sym4:symbol

// if(sym1 === sym2) {console.log('true')}
// if(sym3 === sym4) {console.log('true')}
// if(sym2 === sym3) {console.log('true')}


// 연습문제
// let project = {
//     member: ['코난','장미','미란'],
//     days:30,
//     started:true
// }
// 
// type Project = {
//     member: string[];
//     days: number;
//     started: boolean;
// };

// let project: Project = {
//     member: ['코난','장미','미란'],
//     days:30,
//     started:true,
// };

// console.log(project);


// function sum(x:number,y:number):number{
//     return x+y;
// }

// const result1:number = sum(1,2);
// const result2  = sum(1,2);

// function sum2(x,y){
//     return x+y;
// }

//리터럴 타입
// const str = 'hello'; //const str:'hello'
// const num = 1; //const num:1
// const flag = false; //const flag:false
// const n = null; //const n:null
// const u = undefined; //const u:undefined
// const sym = Symbol('sym'); //const sym:typeof sym
// const big = 100000000n; //const big:100000000n
// const obj = {hello:'world'}; //const obj:{hello:string;}
// obj.hello = 'hihihi';
// console.log(obj.hello);

// const str1:'hello' = 'hello'; //const str1:"hello"
// const str2:string = 'hello'; //const str2:string
// const str3:{} = 'hello'; //const str3:{}
// //{}타입 -> null,undefined를 제외한 모든 타입

//let을 사용한 경우 추론 -> Type Widening
// let str = 'hello'; //let str:string
// let num = 1; //let num:number
// let flag = false; //let flag:boolean
// let n = null; //let n:any
// let u = undefined; //let u:any
// let sym = Symbol('sym'); //let sym:symbol
// let big = 100000000n; //let big:bigint
// let obj2 = {hello:'world'}; //let obj:{hello:string;}
// obj2.hello = 'hihihi';
// console.log(obj2.hello);


//다음의 조건을 만족하는 type alias 만들기
// object 자료형
// color라는 속성을 가질 수도 있으며 항상 문자여야함
// size라는 속성이 있어야 하며 항상 숫자여야함
// position이라는 변경불가능한 속성이 있어야 하며 항상 숫자가 담긴 array자료여야함

// let x:MyType = {
//     size:123,
//     position:[1,2,3]
// };

// type MyType = {
//     color?:string // ?string또는undefined
//     size:number
//     readonly position:number[] //readonly:읽기전용속성성
// };
// console.log(x);
// x.position=[1,2,3,4]; // cannot assign because read-only property


/// 유니언과 리터럴

// let str:'hello' = 'hello'; //리터럴타입
// str = 'world';
// //Type "world" is not assignable to type "hello"

//리터럴 타입
// let str:string = 'hello';
// str = 'world';
// str = 123; //Type 'number'is not assignable to type 'string

//객체 리터럴 부정확하게 추론론
// const obj:{name:'conan'} = {name:'conan'};
// const arr:[1,2,'one'] = [1,2,'one'];
// const func(amount:number, unit:string) => string
//     =(amount,unit) => amount+unit;

// const obj1 = {name:'conan'};
// //const obj:{name:string;}
// const arr1 = [1,2,'one'];
// //const arr:(string|number)[]

// // as const 접미사 -> 타입 고정되어 추론
// const obj2 = {name:'conan'} as const;
// //const obj2:{readonly name:"conan";}
// const arr2 = [1,2,'one'] as const;
// //const arr:readonly [1,2,"one"]
// obj2.name = 'rose';
// console.log(obj2.name);
// //Cannot assign to 'name' because it is a read-only property
// arr2.push(3);
// console.log(arr2);
// //Property 'push' does not exist on type 'readonly[1,2,"one"]'


//유니언 타입

// type Person = {
//     name:string;
//     age:number;
//     phone:number|string;
//     addr?:string;
// };

// const conan:Person = {
//     name:'코난',
//     age:10,
//     phone:'010-0000-0000'
// };

// conan.name = '장미'; //only string
// // conan.name = 1000; //Type 'number' is not assignable to type 'string'

// conan.age = 17; //only number
// // conan.age = '17세';

// conan.phone = '010-1111-2222'; //string|number OK
// conan.addr; //string|undefined;

// console.log(conan);


//연습문제
// 다음 변수에 타입을 지정하기
// let user = '코난';
// let age = undefined;
// let married = false;
// let conan = [user,age,married];
// let user:string = '코난';
// let age:number|undefined = undefined;
// let married:boolean = false;
// let conan:[string|number|undefined|boolean] = [user,age,married];



// // 오류가 발생하지 않도록 타입 지정하기
// let school:School = {
//     score:[100,97,84],
//     teacher:'키팅',
//     friend:'키드'
// }

// type School = {
//     score:(number|boolean)[]; //number[]|boolean[];
//     teacher:string;
//     friend:(string|string[]);
// };

// school.score[4] = false;
// school.friend = ['장미',school.teacher];
// console.log(school);


//유니언타입 Cont'd
// type Member = {
//     name:string,
//     addr:string,
//     discountRate:number;
// };
// type Guest={
//     name:string,
//     age:number,
// };
// type Customer = Member|Guest;

// let customer:Customer;
// customer = {
//     name:'홍길동',
//     addr:'용산구',
//     discountRate:0.1,
// }; //Member 타입에 맞음
// customer = {
//     name:'홍길동',
//     addr:'용산구',
//     discountRate:0.1,
//     age:26,
// }; // Member 타입에 맞음
// customer = {
//     name:'홍길동',
//     age:26,
// }; //Guest 타입에 맞음
// customer = {
//     name:'홍길동',
//     age:26,
//     addr:'용산구',
// }; // Guest타입을 만족
// // customer = {
// //     name:'홍길동',
// //     addr:'용산구',
// // } //Error!

// const member:Member = {
//     name:'홍길동',
//     addr:'용산구',
//     discountRate:0.1,
// };

// const guest:Guest = {
//     name:'김길동',
//     age:28,
// };

// const who = Math.random() > 0.5 ? member:guest;
// const who2 = member;
// // const who3 = guest;
// who.name = '마길동'; //OK 접근가능

// // const price = 10000-(10000*who.discountRate);
// //Property 'discountRate' does not exist on type 'Guest'.
// const price2 = 10000-(10000*who2.discountRate);
// // const price3 = 10000-(10000*who3.discountRate);
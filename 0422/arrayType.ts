export {}

// 배열 타입

// let numbers:number[];
// numbers = [1,2,3,4,5]; //OK
// numbers.push('six'); //Error: Argument of type 'string' 
// // is not assignable to parameter of type 'number'

// //배열과 함수 타입
// // string 배열을 반환하는 함수
// let getNames:() => string[];
// // string을 반환하는 함수 배열
// let nameGetter:(() => string)[];
// //유니언 타입 배열
// //string 또는 number 배열
// let stringOrArrayOfNumber:string|number[];
// //string 또는 number를 요소로 갖는 배열
// let ArrayOfStringOrNumber:(string|number)[];

// //any[]타입의 진화
// let values = []; //타입:any[]
// values.push('hong'); // 타입:string[]
// values.push(123); // 타입:(string|number)[]

// const value = Math.random() > 5 ? values[0] : values[1];
// value.toLocaleString; // value의 타입:string|number
// value.toString;
// value.valueOf

// let values2:any[] = []; //타입:any[] "고정타입"

// values2.push('hong'); //타입:any[]
// values2.push(123); //타입:any[]
// const value2 = Math.random() > 5 ? values2[0] : values2[1];
// // value2. // value의 타입:any


// // noUncheckedIndexedAccess (Cont'd)
// const oneToTen = [1,2,3,4,5,6,7,8,9,10];
// console.log(oneToTen[400].toFixed(2));


// //스프레드
// //concat을 이용한 결함
// const nums1 = [1,2,3,4,5];
// const nums2 = [10,20,30,40,50];

// const result1 = nums1.concat(nums2);
// //당연히 result1은 number[]
// const strings1 = ['lim','eun','ha'];
// // const result2 = result1.concat(strings1);

// //spread를 이용한 결합 -> 타입이 다른 배열 결합
// const result3 = [...result1, ...strings1];
// //const result3: (string|number)[]
// console.log(result3);



// type TUser = {id:number; name:string};
// const obj = {id:1, name:'aa', addr:'1212'};
// let user: TUser = obj;
// console.log(user);
// const kim = {id:2, name:'Kim', addr: 'Pusan'};
// const users:TUser[] = [{id:3, name:'aa', addr:'1212'}, kim];
// //kim과 TUser가 할당될 때 TUser|typeof kim

// type A = {
//     name:string;
//     age:number;
// };
// type B = {
//     name:string;
//     addr:string;
// };
// const onlyA:A[] = [
//     {name:'lim',age:10},
//     {name:'hong',age:20},
// ];
// const onlyB:B[] = [
//     {name:'jang',addr:'Seoul'},
//     {name:'park',addr:'Busan'},
// ];
// const aOrB = [...onlyA, ...onlyB]; //(A|B)[]

// aOrB.push({ //가능! union은 freshness에서 제외!
//     name:'Tan',
//     age:30,
//     addr:'Incheon'
// });



//나머지 매개변수를 위한 인수로 사용되는 배열은
//나머지 매개변수와 동일한 배열 타입을 가져야한다
const greeting = (greeting:string,...names:string[]) => {
    for (const name of names) {
        console.log(`${greeting}~! ${name}!`);
    }
};

const names = ['lim','hong','jang'];
greeting('Hi',...names);

const nums = [1,2,3];
// greeting('Hello',...nums); // Error 'number' not assignable to 'string'


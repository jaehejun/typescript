//유니언 타입 - narrowing과 type guard (Cont'd)

// function f(p:number|string) {
//     if (typeof p === 'number') //narrowing
//         return p.toFixed();
//     return p.toUpperCase();
// }
// console.log(f(123.456));
// console.log(f('abc'));


// let arr:number[]|number = Math.random()>0.5?[1,2,3]:0;
// if(Array.isArray(arr)) //arr=[1] isArray()->static f()
//     arr.length+=1;
// console.log(arr);

// type Member = {
//     name:string,
//     addr:string,
//     discountRate:number,
// };
// type Guest = {
//     name:string,
//     age:number,
// };

// let who:Member|Guest;
// who = {
//     name:'홍길동',
//     addr:'용산구',
//     discountRate:0.1,
// };
// //who; //const who:Member
// const price = 10000 - (10000*who.discountRate);
// console.log(price);

// let m:Member;
// let g:Guest;
// let xxx = {
//     id:123,
//     name:'홍길동',
//     age:26,
//     addr:'용산구',
// };
// g = xxx;
// // g = { // Member도 Guest도 일치하지 않음(freshness)
// //     id:123,
// //     name:'홍길동',
// //     age:36,
// //     addr:'용산구'
// // };
// console.log(g);
// if ('age' in xxx) g = xxx; //age속성이 있으면 xxx를 Guest로 간주
// else m = xxx;
// console.log(xxx);
// console.log(g);


// type Member = {
//     id:string,
//     name:string,
//     addr:string,
//     discountRate:number;
// };
// type Guest = {
//     id:number,
//     name:string,
//     age:number,
// };
// let m:Member;
// let g:Guest;
// let xxx = { //Member도 Guest도 일치하지 않음
//     id:123,
//     name:'홍길동',
//     age:26,
//     addr:'용산구',
//     discountRate:0.1
// };
// m = xxx;
// //Type '{id:number;name:string;age:number;addr:string;discountRate:number;}'
// //is not assignable to type 'Member'.
// //Types of property 'id' are incompatible.


//typeof 검사를 통한 내로잉

// type Member = {
//     name:string,
//     spend:number[],
//     addr:string,
//     discountRate:number;
// };

// type Guest = {
//     name:string,
//     spend:number,
//     age:number,
// };

// const member:Member = {
//     name:'hong',
//     spend:[1000,30000,50000],
//     addr:'yong',
//     discountRate:0.1
// };
// console.log(typeof member.spend); // object
// const guest:Guest = {
//     name:'kim',
//     spend:5500,
//     age:28,
// };
// console.log(typeof guest.spend); // number

// const who = Math.random() > 0.5 ? member:guest;

// let totalAmount:number;
// if (typeof who.spend !== 'number') {
//     //reduce()는 Array타입에만 존재
//     //s:누적값,c:현재값,0:초깃값
//     totalAmount = who.spend.reduce((s,c) => s+c, 0);
//     // who.spend의 타입이 number[]타입이라고 해서 who의 타입이 Member로 narrowing된것이 아님
//     // typeof who.spend !== 'number'라고 검사해도 그게 Member라는 확실한 증거는 아님
//     // who.discountRate; // Error Property 'discountRate' does not exist on type 'Member|Guest'.
// } else {
//     totalAmount = who.spend;
// }
// //who.spend.reduce((s,c) => s+c,0); //Error!
// console.log(totalAmount);


// let gildong = Math.random() > 0.5 && 'HongGilDong';
// // &&연산자는 왼쪽이 true면 오른쪽 값을 반환, false이면 false 반환
// // const gildong = Math.random() > 0.5 && 'HongGilDong';

// if (gildong) {
//     console.log(gildong.toUpperCase()); //string
// } else {
//     gildong; //false | string
// }
// console.log(gildong);


//strictNullChecks (tsconfig.json의 strictNullChecks:false)

// let a:string;
// a = undefined;
// const b = a??null; // b가 null 또는 undefined일 때만 오른쪽 값 반환
// console.log(a.length,b);

// let c:number|undefined;
// c = undefined;
// c = Math.random() > 0.5 ? 1:undefined;
// c.toFixed();

// let d:number = 0;
// d = null;



let onlyString:string = Math.random() > 0.5 ? '문자열할당' : undefined;

const tenObject: {
    id:number;
    value:number;
}

const someObjects = Array.from({ length:5}, (_, idx) => ({
    id: idx + 1,
    value: (idx + 1) * 10,
}));

const tenObject = someObjects.find(({value}) => value === 10);

tenObject.id; //Type Error 'tenObject' is possibly 'undefined'
tenObject?.id; //OK
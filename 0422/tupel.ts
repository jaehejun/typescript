//튜플 : 고정된 크기의 배열. 각 인덱스에 알려진 특정 타입을 갖는다

// const lim = ['Lim',26]; //const lim:(string|number)[]

// // let limTup:[string,number] = lim;
// //Type '(string|number)[]' is not assignable to type '[string,number]'.

// const a:[number,string,boolean] = [1,'lim',false];

// // let b:[number,string] = a;
// //Type [number,string,boolean] is not assignable to type [number,string]
// //Source has 3 elements but target allows only 2

// const greeting = (greet:'Hi'|'Hello', name:string, age:number) => {
//     console.log(`${greet}~! ${name}(${age})`);
// };

// const tup:[string,number] = ['Lim', 26];
// const arr = ['Park',30];

// greeting('Hello',...tup); //OK
// // greeting('Hi',...arr); //Error

function f(name:string,age:number) {
    let a:IArguments;
    console.log(arguments);
}
f(...['zzz',10]);

const arr2:[string,number] = ['hong',22];
f(...arr2);

const x = ['aaa',1] as const;
f(...x);


type A = {
    name:string,
    age:number,
};

function ff({name,age}:A) {
    console.log(name,age);
}
ff({...{name:'ggg',age:12,addr:'yong'}}) //spread를 거쳐서 검사를 완화함
export {}

//유틸리티 타입 : 이미 정의되어 있는 타입 구조를 변경하여 재사용
//내장 유틸리티 타입
// Awaited:Promise를 한 번 풀어주는 타입
// Omit & Pick
// Partial & Required
// Record
// Parameters & ReturnType



// //Awaited

// // T = Promise<string>
// // Awaited<T> = string
// // T = Promise<Promise<number>>
// // Awaited<T> = number
// // T = boolean|Promise<number>
// // Awaited<T> = boolean|number

// type A = Awaited<Promise<string>>; //string
// type B = Awaited<Promise<Promise<number>>>; //number
// type C = Awaited<boolean|Promise<number>>; //number|boolean

// async function f(p:Promise<string>) {
//     let a: Awaited<string> = await p; //let a:string
//     return a;
// }

// async function gf<T>(promi:T) {
//     const a = await promi; //const a: Awaited<T>
//     const b = await Promise.resolve("yyy"); //string
//     console.log("a: ", a,b);
//     return a;
// }
// //즉즉시 실행함수 IIFE(Immediately Invoked Function Expression)
// (async () => {
//     const gg = await gf(Promise.resolve("xxx"));
//     console.log("gg: ", gg);
// })();

// //const z:[string|Promise<number>, string|Promise<number>] in Ts4.4 and below ㅠ ㅡㅠ
// //const z:[string}number, string|number] in TS4.5 and above ^ ㅡ^
// async function ff(
//     x:Promise<string|Promise<number>>,
//     y:Promise<string|Promise<number>>
// ) {
//     const z = await Promise.all([x,y]);
// }

// (async () => {
//     const promise1:Promise<string> = Promise.resolve("hello");
//     //Promise.resolve는 중첩을 풀어버림
//     //number도 받아들이려면 new Promise로 중첩된 Promise<number>를 생성
//     const inner:Promise<number> = Promise.resolve(42);
//     const promise2:Promise<Promise<number>> = new
//     Promise(resolve => resolve(inner));
//     await ff(promise1, promise2);
// })();



// //Omit & Pick
// //Pick : 특정 타입의 속성을 뽑아서 새로운 타입을 생성
// //Omit : 특정 타입에서 속성 몇 개를 제외한 나머지 속성으로 새로운 타입을 생성
// //Omit<Type, keys> : 주어진 타입에서 지정된 키를 제거한 새로운 타입을 생성
// type User = {id:number; name:string; age:number};
// type OmitedAgeUser = Omit<User, "age">; // "age"를 제거한 타입 --> {id:number; name:string}
// type OmitedIdAgeUser = Omit<User,"id"|"age">;

// //ex1)다음 UserProfile 타입을 type 또는 interface로 정의
// type UserProfile = Omit<User,"age"> & {addr:string};
// // interface UserProfile extends Omit<User,"age"> {
// //     addr:string;
// // }
// let iUser:UserProfile = {id:1, name:'Hong', addr:'Seoul'};
// //Pick<Type,keys>:주어진 타입에서 트정 키들만 선택하여 새로운 타입을 생성
// type PickIdName = Pick<User,"id"|"name">; //User타입에서 "id"와"name"속성만 선택하여 새로운 타입생성



// //Partial & Required
// //Partial:특정 타입의 모든 속성을 모두 옵션 속성으로 타입을 생성
// //HTTP PUT에서 데이터를 수정하는 RESTAPI전송
// //Partial<Type>:주어진 타입의 모든 속성을 선택적(optional)로 만듦
// type User = {id:number; name:string; age:number};
// type PartialUser = Partial<User>;
// type PartialUser2 = Partial<User> & {name:string}; //name만 필수
// let pu:PartialUser2 =  {name:'Seoul'};

// //Required<Type>:주어진 타입의 모든 속성을 필수(required)로 만듦
// type RequiredUser = Required<PartialUser>;
// type RequiredUser2 = Required<PartialUser> & {addr:string};
// let ru:RequiredUser2 = {id:1, name:'Kim', age:23, addr:'Seoul'};



// //Parameters<FunctionType>
// function registUser(name:string, age:number) {
//     const id = 100;
//     return {id, name, age};
// }
// //Parameters<T>는 타입스크립트의 유틸리티 타입
// //T가 있을 때, 그 함수의 매개변수 타입만 뽑아서 튜플(tuple)형태로 만듦
// type RegistUser = Parameters<typeof registUser>; // type Register = [name:string, age:number]

// const param:RegistUser = ['Hong',32];
// const newUser = registUser(...param);
// console.log("newUser: ", newUser); //newUser:{id:100, name:'Hong', age:32}



//ReturnType
function registUser(name:string, age:number) {
    const id = 100;
    return {id, name, age};
}

//ReturnType<T>:함수 타입 T의 반환타입을 가져오는 타입스크립트 유틸리티
type RegistReturn = ReturnType<typeof registUser>;
//cf. let timer:ReturnType<typeof setTimeout>;

type RegistUser = Parameters<typeof registUser>;
const param:RegistUser = ['Hong', 32];
const newUser:RegistReturn = registUser(...param);
console.log("newUser: ", newUser);
appendUserCache(newUser);
function appendUserCache(p:ReturnType<typeof registUser>) {
    console.log("returnedUser: ", p);
}
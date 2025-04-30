export {}

// // 두 타입을 합치는 Combine 유틸리티 타입 만들기
// // 힌트: 두 타입의 같은 key 라면 union type, 그렇지 않다면 각 타입의 key type
// // -공통키 : 키들의 교집합(keyof T & keyof U)
// // cf. 키들의 합집합: keyof(T & U)
// //     키들의 교집합:keyof T & keyof U

// interface IUser {
//     id:number;
//     age:number;
//     name:string;
// }

// interface IDept {
//     id:number;
//     age:string;
//     dname:string;
//     captain:string;
// }

// // type Combine<T, U> = //이부분을 작성
// type Combine<T, U> = {
//     [K in keyof T | keyof U]:
//         K extends keyof T & keyof U ?
//             T[K] | U[K]:
//         K extends keyof T ?
//             T[K]:
//         K extends keyof U ?
//             U[K] :
//         never;
// };
// // type Combine<T, U> = {
// //     [K in keyof T | keyof U]: 
// //     K extends keyof T ? K extends keyof U
// //         ? T[K] | U[K]
// //         : T[K]
// //     : K extends keyof U
// //     ? U[K]
// //     : never;
// // };

// type ICombined = Combine<IUser, IDept>;

// // type ICombined = {
// //     id:number;
// //     age:string | number;
// //     name:string;
// //     dname:string;
// //     captain:string;
// // }



// 특정 함수의 인자 타입을 추출하는 유틸리티 타입 작성 (infer)
function add(a: number, b: string) {
    return `${a} - ${b}`;
}

type A = FirstArgs<typeof add>; //number
type B = SecondArgs<typeof add>; //string
type C = Args<typeof add>; //number|string

type AX = Args<typeof String.prototype.endsWith>;
// => string | number | undefined
type AX2 = Args<typeof String.prototype.charAt>;
// => number

// type FirstArgs<F> = //이부분 작성
// type SecondArgs<F> = //이부분 작성
// type Args<F> = //이부분 작성
type FirstArgs<F> = F extends (first: infer FirstParam, second: any) => any ? FirstParam : never;
type SecondArgs<F> = F extends (first: any, second: infer SecondParam) => any ? SecondParam : never;
type Args<F> = F extends (...args: infer Params) => any ? Params[number] : never;
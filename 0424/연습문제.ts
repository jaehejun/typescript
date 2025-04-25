export {}

// 다음과 같이 실행되는 class Word 선언하기


// class Word {
//     num:number[] = [];
//     str:string[] = [];
//     constructor(...args:(string|number)[]) {
//         for (let i of args) {
//             if (typeof i === 'number') {
//                 this.num.push(i);
//             } else {
//                 this.str.push(i);
//             }
//         }
//     }
// }
class Word {
    num:number[];
    str:string[];
    constructor(...args:(string|number)[]) {
        this.num = args.filter(arg => typeof arg === 'number');
        this.str = args.filter(arg => typeof arg === 'string');
    }
}

let obj = new Word('conan', 123, 45, 'rose');
console.log(obj.num); //[123,45]
console.log(obj.str); //['conan','rose']
export{}

// function add(a:number, b:number) {
//     return a + b;
// }

// // add(1);
// add(1,2);
// // add(1,2,3);

// const introduce = (name:string, height?:number) => {
//     console.log(`이름:${name}`);
//     if (typeof height === 'number') {
//         console.log(`키:${height+10}`);
//     }
//     // console.log(`키:${height+10}`);
//     //Error:'height' is possibly 'undefined'.
// };

// introduce("김현준"); //OK
// introduce("김현준", undefined); //OK
// introduce("김현준", 170); //OK


// const introduce2 = (name:string, height:number|undefined) => {
//     console.log(`이름:${name}`);
//     if (typeof height === 'number') {
//         console.log(`키:${height+10}`);
//     }
// };

// // introduce2("김현준"); //Error:Expected 2 argumetns, but got 1
// introduce2("김현준", undefined); //OK
// introduce2("김현준", 170); //OK


// //선택적 파라미터required parameter는 가장 뒤에 있어야함
// // const instroduce3 = (name:string, height?:number, age:number) => {
// const introduce3 = (name:string, age:number, height?:number) => {
//     console.log(`이름:${name}`);
//     console.log(`나이:${age} 살`);
//     if (height) {
//         return console.log(`키${height+10}cm`);
//     }
// }
// introduce3('a',1,10);

// const introduce4 = (name:string, height = 0) => {
//     console.log(`이름${name}`);
//     console.log(`키${height+10}`);
// };

// introduce4("김현준");
// introduce4("김현준",undefined);
// introduce4("김현준",170);
// // introduce4("김현준","이재현");

// function f(x?:number,y=1){
//     console.log(x,y);
//     // y=undefined; // 호출은 가능하지만 undefined할당은 불가
// }
// f(1,undefined); //호출하는 코드에서는 선택적 number|undefined



// const getSum = (...rest:number[]) => {
//     let sum = 0;
//     rest.forEach((el) => (sum += el));
//     return console.log(sum);
// };

// getSum(1);
// getSum(1,2,3);
// getSum(1,2,3,4,5);
// getSum();

// const getSum2 = (a:number, ...rest:[number,number]) => {
//     let sum = 0;
//     rest.forEach((el) => sum += el);
//     return console.log(sum);
// }
// getSum2(3,2,1);
// getSum2(1,2,3,4,5); //Error:Expected 3 arguments, but got 5.



// 연습문제
// 이름을 패러미터로 입력하면 "안녕하세요 코난"을 출력하고,
// 입력하지 않으면 "입력된 이름이 없음" 출력하는 함수 만들기

function sayHi(name?:string): void {
    if (typeof name === 'string') {
        console.log(`안녕하세요 ${name}`);
    } else {
        console.log('입력된 이름이 없음');
    }
}
sayHi('코난'); //안녕하세요 코난
sayHi(); //입력된 이름이 없음

// 숫자 또는 문자열을 입력받아 자릿수를 세어 반환하는 함수 만들기

function count(num:number|string): number {
    if (typeof num === 'string')
        return num.length;
    else if (typeof num === 'number')
        return num.toString().length;
    else
        throw new Error('Invalid type!');
}
console.log(count(123)); //3
console.log(count("1234")); //4

// array에는 숫자 여러 개가 저장되어 있는데 '4','5'와 같은 문자타입의 숫자 발견
// 4,5로 바꿔주는 함수 작성

function str2num(arr:(number|string)[]): number[]{
    return arr.map(item => {
        const num = Number(item);
        if (isNaN(num)) {
            throw new Error(`Invalid number: ${item}`);
        }
        return num;
    });
}
try {
    console.log(str2num([123,'4','5','aa'])); //[123,4,5]
}
catch(e) {
    console.log('exception:',String(e));
}

// 다음과 같은 함수 만들기
// 학생들의 취미 중 가장 마지막 1개를 리턴하는 함수 만들기
// 츼미가 1개인 경우 문자열 하나로 저장되어 있고,
// 2개 이상인 경우 array 자료로 저장됨

let conan = {hobby:['탐정놀이','축구','추리소설 읽기']}
let ran = {hobby:['태권도','요리']}
let kid = {hobby:'마술'}

type Student = {
    hobby: string|string[];
};
function lastHobby(student:Student): string|undefined {
    if (typeof student.hobby === 'string') {
        return student.hobby;
    } else {
        return student.hobby[student.hobby.length - 1];
    }
}

console.log(lastHobby(ran)); //요리
console.log(lastHobby(kid)); //마술
console.log(lastHobby(conan)); //추리소설 읽기
// console.log(lastHobby({hello:'world'})); //타입에러
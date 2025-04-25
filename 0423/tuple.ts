export {}
// //튜플 추론

// const getPerson = () => {
//     //do something...
//     return ['Lim',20];
// }

// const person1 = ['Lim',20];
// const person11:[string,number] = ['Lim',20];
// const person2 = getPerson();
// person1.push('aaa');
// console.log('person1',person1);
// person2.push('bbb');
// console.log('person2',person2);


// //명시적 튜플 타입

// const getNameAgeTuple = ():[string,number] => {
//     //do something...
//     return ['Lim',20];
// }
// const nameAndAge = getNameAgeTuple();
// console.log(nameAndAge);
// nameAndAge.push('a',1);
// console.log(nameAndAge);
// nameAndAge.push('b','c'); // push()는 튜플타입 엄격하게 체크하지 않아 ts설정에 따라 오류 못잡아낼수도있음
// console.log(nameAndAge);
// const [myName,age] = getNameAgeTuple();
// console.log(myName, age);


// //const assertion - readonly 튜플로
// const myInfo = ['Lim',20]; // (string|number)[]

// const yourInfo:[string,number] = ['Park',30]; //[string, number]
// const dogInfo = ['Jama',3] as const; //tuple + readonly

// yourInfo[0] = 'Hong'; //OK
// dogInfo[0] = 'Cream'; //수정불가(readonly property)

// const getNameAgeArr = () => ['Lim',30];
// const getNameAgeTuple = () => ['Jang',20] as const;

// const [name1,age1] = getNameAgeArr();
// //name1:string|number
// //age1:string|number
// const [name2,age2] = getNameAgeTuple();
// //const name2:"Jang"
// //const age2:20



// //primitive 타입 값 뒤에 as const -> 값 자체가 type으로(readonly)
// let a = 'a' as const; //a의 타입은 "a"
// let b10 = 10 as const; //b10의 타입은 10
// //object 타입 값 뒤에 as const
// let cObj = {name:'Lim',age:26} as const;
// //cObj 타입 -> {readonly name:'Lim', readonly age:26}
// let dArr = ['hello','lim',26,true] as const;
// //dObj 타입 -> readonly ['hello', 'lim', 26, true]
// //const assertion은 enum 멤버에 대한 참조 또는 string,number,boolean,array,object리터럴에만 적용가능
// let eArr = [1,2,3]; // number[]
// // let fArr = eArr as const; //Error
// let fArr = ['a','b','c'] as const; //object 리터럴로 적용가능


//타입 선언에서의 Spread와 Tuple
//TypeScript AST Viewer -> parser
type A = [string,number]; //[string,number]
type AA = (string|number)[]; //(string|number)[]

type B = [boolean,...A]; //[boolean,string,number]
type B2 = [boolean,A]; //[boolean,A]
type BB = [boolean,...AA]; //[boolean,...(string|number)[]]

type CC = [boolean,AA]; //[boolean, AA]

const b:B = [false,'hi',10];
// const b2:B = [false]; //[boolean,string,number] 튜플형식필요
const b3:B2 = [false,['a',1]];
const bb:BB = [false,'hi','hello','good',10,20,'world'];
const bb2:BB = [false];
const cc:CC = [false,['hi','bye']];
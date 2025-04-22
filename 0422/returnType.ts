export {}

// //타입:function singSong(songs:string[]):number
// function singSong(songs:string[]) {
//     for(const song of songs) {
//         console.log(`${song}`);
//         return songs.length;
//     }
// }
// //타입:(songs:string[],index:number) => string|undefined
// function getSongAt


// const songs = ['Juice','Painkiller','Candy'];

// function runOnSongs(getSongAt:(index:number) => string) {
//     for (let i=0; i<songs.length; i+=1) {
//         console.log(getSongAt(i));
//     }
// }
// function getSongAtX(index:number) {
//     return `${songs[index]}`;
// }
// runOnSongs(getSongAtX); //OK
// function logSong(song:string) {
//     return `${song}`;
// }
// // runOnSongs(logSong); //Error: (song:string) => string not assignable to (index:number)


// let singer:(song:string) => string;
// singer = function(song) {
//     //song:string타입
//     return `Singing:${song.toUpperCase()}!`; //OK
// }

// const songs = ['One More Time', 'I AM', 'Cry'];
// //song:string
// //index:number
// songs.forEach((song,index) => {
//     console.log(`${song} is at index ${index}`);
// });


// // 함수 type alias
// const add = (a:number,b:number):number => a + b;
// const sub = (a:number,b:number):number => a - b;
// const mul = (a:number,b:number):number => a * b;
// const div = (a:number,b:number):number => a / b;

// type operation = (a:number,b:number) => number;
// const add1:operation = (a,b) => a+b;
// const sub1:operation = (a,b) => a-b;
// const mul1:operation = (a,b) => a*b;
// const div1:operation = (a,b) => a/b;

// type NumberToString = (input:number) => string;
// function usesNumberToString(numberToString:NumberToString) {
//     console.timeLog(`The String is : ${numberToString(1234)}`);
// }
// // usesNumberToString((input) => input * 2);
// //Error: Type 'number' is not assignable to type 'string'.



// function logSong(song:string) :void {
//     if(!song) {
//         return ; //return undefined; 도 OK
//     }
//     console.log(`${song}`);
//     // return true; //Error! void반환하도록 선언했으므로 값 반환 허용하지않음
// }

// //But 다음과 같이 화살표 함수는 구문 오류 없음
// type VoidReturn = () => void;
// const test2:VoidReturn = () => 11; //반환하더라도 사용하지 않으면 OK
// console.log(test2.toString()); // () => 11

// let songLogger:(song:string) => void;
// songLogger = (song) => {
//     console.log(`${song}`);
//     return true; //OK
// }
// songLogger("HeartBeat"); //OK! 타입스크립트가 무시함
// // if (songLogger("HeartBeat")) //Error!
//     console.log('*******');

// // function returnVoid(): void
// function returnVoid() {
//     return ;
// }
// let lazyValue:string|undefined;
// // lazyValue = returnVoid(); // Type 'void' is not assignable to type 'string|undefined'

// // function saveRecords(newRecords:string[]):void
// const records:string[] = [];
// function saveRecords(newRecords:string[]) {
//     newRecords.forEach((record) => records.push(record));
// }
// saveRecords(['Go','Walk','Run']);
// console.log(records);


// //never 반환 함수는 (의도적으로) 항상 오류를 발생시키거나 무한 루프를 실행하는 함수
// function fail(message:string):never {
//     throw new Error(`invariant Failure:${message}`);
//     //JS는 return undefined; 가 생략
// }

// function workWithUnsafeParam(param:unknown) {
//     if (typeof param !== 'string') {
//         fail(`param should be a string, not ${typeof param}`);
//     }
//     //여기에서 param의 타입은 string으로 알려짐
//     param.toUpperCase();
// }

// workWithUnsafeParam(1);
// workWithUnsafeParam('abc');



// //함수 오버로드 

// //서로 다른 버전의 함수들(선언부) -> '오버로드 시그니처'
// function func(a:number):void;
// function func(a:number,b:number,c:number):void;

// //실제 구현부 -> '구현 시그니처'
// function func(a:number,b?:number,c?:number) {
//     if (typeof b === 'number' && typeof c === 'number') {
//         console.log(a+b+c);
//     } else {
//         console.log(a*20);
//     }
// }
// func(1);
// func(1,2,3);
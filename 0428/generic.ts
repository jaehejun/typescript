export {}

// // static member vs 제네릭
// class BothLogger<OnInstance> {
//     instanceLog(value:OnInstance) {
//         console.log("instanceLog.value > ", value);
//         return value;
//     }

//     // static A: OnInstance; //OnInstance는 인스턴스 생성 시
//     //결정되는 타입이므로 static 변수에 사용 불가
//     //클래스와는 별개의 제네릭 타입 선언
//     static staticLog<OnStatic>(value:OnStatic) {
//         // let instancLogValue:OnInstance; //static 메소드 내부에서 사용 불가
    
//     console.log("staticLog.value > ", value);
//     return value;
//     }
// }

// const logger = new BothLogger<number[]>();
// const value = logger.instanceLog([1,2,3]); //[1,2,3]
// // logger.instanceLog(['A','B','C]); //arguments must be number[]

// const logger2 = new BothLogger();
// const value2 = logger2.instanceLog("Hello"); //Hello
// const value3 = logger2.instanceLog(123); //123
// BothLogger.staticLog('Hi'); //staticLog.value > Hi


// //Generic Type Alias 제네릭 타입 별칭
// //interface, class와 마찬가지로 타입 별칭에 제네릭 사용 가능
// type Nullish<T> = T|undefined|null;

// function someFn(param:string):Nullish<number> {
//     return param.length;
// }
// const len = someFn('hello TS');
// console.log(len?.toFixed());
// // -> len?.toFixed...옵셔널 체이닝 대신 다른 방법 생각해보기



// //판별된(discriminated)유니언 판별자
// //type property:어떤 객체가 자기 자신의 타입 구분할수 있게 해주는 속성
// interface IUser { //유저 정보
//     id:number;
//     name:string;
//     age:number;
// }
// interface IDept { //부서 정보
//     id:number;
//     dname:string;
//     age:string;
//     captain:number;
// }
// interface FailureResult { //실패
//     error:Error;
//     succeeded:false; //판별자(type property)
// }
// interface SuccessfulResult<Data> { //성공
//     data:Data;
//     succeeded:true; //판별자(type property)
// }
// type Result<T> = FailureResult|SuccessfulResult<T>;

// function isSuccess<Data>(result:Result<Data>):result is SuccessfulResult<Data> {
//     return result.succeeded;
// }
// function handleResult<Data>(result:Result<Data>) {
//     if (isSuccess(result)) {
//         console.log('we did it!! ', result.data); //SuccessfulResult<Data>타입으로 내로잉
//     } else {
//         console.log(`Awww...${result.error}`); //FailureResult타입으로 내로잉
//     }
// }

// /* Usage Example*/
// function getUser():Result<IUser> { //사용자 정보를 가져오는 함수
//     return Math.random() > 0.5 ? {error:new Error(), succeeded:false}
//     : {data:{id:1, name:'hong', age:25}, succeeded:true};
// }
// function getDept():Result<IDept> { //부서 정보를 가져오는 함수
//     return Math.random() > 0.5 ? {error:new Error(), succeeded:false}
//     : {data: {id:1, dname:'dev', captain:10, age:'30'}, succeeded:true};
// }
// handleResult(getUser());
// handleResult(getDept());



// //제네릭 제한자 - 제네릭 기본값
// interface Pair<K,V = K> {   //Pair는 두 개 타입 매개변수를 전달받음,
//                             //  V를 안주면 자동으로 K랑 같은타입
//     key:K;
//     value:V;
// }

// const pair1:Pair<string,number> = {key:'key', value:10};
// const pair2:Pair<number> = {key:1, value:100}; //V는 지정 안했으므로 V = K = number
// // const pair3:Pair = {key:'key', value:'value'}; //Error
// const pair3:Pair<string> = {key:'key', value:'value'};



// //제네릭 제한자 - 제한된 제네릭 타입(extends)
// interface User {
//     id:number;
//     name:string;
// }
// interface Post {
//     id:number;
//     title:string;
//     content:string;
//     user:User;
// }
// interface Product {
//     id:number;
//     name:string;
//     price:number;
// }

// const post = {
//     id:10,
//     title:'post',
//     content:'content',
//     user:{id:1, name:'hong'}
// };

// const product = {id:100, name:'TV', price:1000000};

// function getUserInfoX<T>(params:T) {
// // return params.user; //Error!, T가 반드시 user 속성을 가지고 있는지 모름
// }
// function getUserInfo<T extends {user:User}>(params:T) {
//     return params.user;
// }

// console.log(getUserInfo(post)); //post는 user를 가지고 있음
// // console.log(getUserInfo(product)); //getUserInfo(product); //Error! product는 user를가지고있음
// function getUserInfo2<T extends Post>(params:T) {
//     return params.user; //Post안에는 이미 user:User가 들어있음
// }
// console.log(getUserInfo2(post));

// type BloodType<T extends unknown[]> = T[number]; //배열 안 모든 요소 타입을 뽑아 유니온 타입을 생성
// type MyBloods = ['A','B','O','AB'];
// type Result = BloodType<MyBloods>; //type Result = "A"|"B"|"O"|"AB"



// //Generic - extends operator
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

// //T가 U의 키(keyof U)안에 있으면 boolean, 없으면 number
// type BN<T,U> = T extends keyof U ? boolean:number;
// type IdBN1 = BN<'id', IDept>; //boolean
// type IdBN2 = BN<'idd', IDept>; //number

// //T가 U의 키 안에 있으면 T, 없으면 U
// type TX<T,U> = T extends keyof U ? T:U;
// type TXID1 = TX<'id',IDept>; //"id" 
// type TXID2 = TX<'idd',IDept>; //IDept 

// //T가 U안에 있으면 never(제외) 없으면 T --> 안겹치는 것만 남김
// type Except<T,U> = T extends U ? never:T;
// type Ex0 = Except<IUser,IDept>; //IUser
// // IUser type Ex1 = Except<key of IUser, keyof IDept>; //name
// type Ex2 = Except<keyof IDept, keyof IUser>; // dname|captain

// //T가 U안에 있으면 T, 없으면 never(제외) --> 겹치는 것만 남김
// type Intersect<T,U> = T extends U ? T :never;
// type Ext1 = Intersect<keyof IUser, keyof IDept>; //id|age
// type Ext2 = Intersect<keyof IDept, keyof IUser>; //id|age

// //cf.Omit (<=> Except)
// //Omit: 특정 객체에서 지정한 속성을 제거하는 타입
// type O<T> = Omit<T,'id'|'age'>;
// type Odept = O<IDept>; // dname, captain

// //cf.Pick (<=> Intersect)
// //객체에서 지정한 속성만 골라냄
// type P<T> = Pick<T,'id'|'age'>; // 오류발생:T에대한 제한걸어야함
// type Pdept = P<IDept>; //id, age



// //extends of keyof
// //keyof:전체 키 대상
// //extends keyof:해당 property의 키를 특정
// interface User {
//     id:number;
//     name:string;
// }
// interface Post {
//     id:number;
//     title:string;
//     content:string;
//     user:User;
// }
// const post = {
//     id:10,
//     title:"post",
//     content:"content",
//     user:{id:1, name:"hong"},
// };

// //한 개 제네릭 + keyof T
// //keyof T --> "id"|"title"|"content"|"user"
// function get1<T>(container:T, key:keyof T) {
//     return container[key]; //T[keyof T]
// }
// const user1 = get1<Post>(post,"user"); //const user: string|number|User

// //2개의 제네릭 + T[K]
// //K extends keyof T (키 하나하나를 나타내는 리터럴 타입)
// function get<T,K extends keyof T>(container:T, key:K) {
//     return container[key];
// }
// const user = get<Post,'user'>(post,'user'); //const user: User
// console.log("user:", user)

// const user2 = get(post,"user"); //함수 타입 매개변수의 타입 인수는 생략 가능(ts가 유추함)
// console.log("user2: ",user2); //const user2: {id:number; name:string;}



// //in keyof
// interface IDept {
//     id:number;
//     age:string;
//     dname:string;
//     captain:string;
// }
// type X<T> = {
//     [x in keyof T]:T[keyof T]
// }
// //매핑한 키마다 키의 원래 타입을 보존하는 것이 아니라 같은 유니온 타입으로 덮어씀
// type XDept = X<IDept>; //keyof IDept = "id"|"age"|"dname"|"captain"
// //T[keyof T]
// // = IDept["id"|"age"|"dname"|"captain"]
// // = number | string | string | string
// // = number | string

// type Y<T> = { //원래 타입 T를 그대로 복제, 나중에 원하는 변형을 적용할 수 있음
//     [x in keyof T]:T[x]
// };
// type YDept = Y<IDept>; //Good!

// //T타입의 일부 프로퍼티만 골라서 새로운 타입을 만드는 Mapped Type
// //선택할 프로퍼티(K)를 T 타입의 유효한 키만 받도록 제한
// type Z<T,K extends keyof T> = {
//     [x in K]:T[x]
// }

// type ZDept = Z<IDept, 'id'|'dname'>;



// //keyof와 &(intersection)
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

// type KeyIntersection<T,K> = (keyof T) & (keyof K); //key들의 intersection은 교집합
// type KeysOfIntersection<T,K> = keyof (T & K); //두 타입의 &(합친)타입의 key들
// // --> IUser & IDept;
// // id:number; age:number&string;//never name:string; dname:string captain:string

// type Txx = KeyIntersection<IUser, IDept>; //"id"|"age"
// type Tyy = KeysOfIntersection<IUser,IDept>; //"id"|"dname"|"age"|"captain"|"name"



// //Promise
// //최종적으로 resolve된 값을 나타내는 단일 타입 매개변수를 갖는다

// //타입이 명시되지 않음
// const resolvesUnknown = new Promise((resolve) => {
//     setTimeout(() => resolve("Done!!!"), 1000);
// });
// const resolveString = new Promise<string>((resolve) => {
//     setTimeout(() => resolve("Done!!!"), 1000);
// });

// const textEventually = new Promise<string>((resolve) => {
//     setTimeout(() => resolve("Done!!!"), 1000);
// });
// const lengthEventually = textEventually
// // .then<number>((res) => res.length);
// .then((res) => resolveString.length);

// function f():Promise<string> {
//     return new Promise((res,rej) => {
//         if (Math.random() > 0.5) 
//             res('str');
//         else 
//             rej(new Error('Error'));
//     });
// }



// //async 함수
// function lengthAfterSecond(text:string) { 
//     //또는 function lengthAfterSecond(text:string):Promise<number>
//     return new Promise<number>((resolve) => 
//     setTimeout(resolve,1000,text.length)
//     );
// }

// async function lengthImmediately(text:string) {
//     // async함수는 반환값이 Promise가 아닌 경우(Thenable이 아닌 경우)Promise로 래핑된다
//     return text.length;
// }

// lengthAfterSecond('!!!!!').then(console.log); //(text:string):Promise<number>
// lengthImmediately('@@@@@@@@@@').then(console.log); //(text:string):Promise<number>

// async function a():Promise<string> {
//     return new Promise((res,rej) => {
//         if (Math.random() > 0.5) res ("str");
//         else rej(new Error("Error"));
//     });
// }



// //제네릭 황금률 / 제네릭 명명 규칙
// //타입 매개변수가 최소 두 번 이상 사용되었는가?
// //적어도 하나의 다른 매개변수 또는 함수의 반환 타입에서도 사용되었는가?
// //제네릭 버전 Input이 매개변수 타입, 반환 타입에 사용됨
// function logInput<Input extends string>(input:Input):Input {
//     return input;
// }

// function logInput2(input:string) {
//     return input;
// }



//valueof
const UserState = {
    준비:1,
    진행중:2,
    done:3,
    cancel:8,
    withdraw:9,
    etc:0
} as const;

type State<T> = T[keyof T];
type Ustate = (typeof UserState)[keyof typeof UserState];

type User = {
    id:number,
    name:string,
    state:State<typeof UserState>
}

type User2 = {
    id:number,
    name:string,
    state:Ustate;
}

const hong:User = {id:1, name:'Hong', state:8};
const kim:User = {id:2, name:'Kim', state:0};
console.log('hong', hong);
console.log('kim', kim);

const hong2:User2 = {id:1, name:'Hong2', state:8};
const kim2:User2 = {id:2, name:'Kim2', state:0};
console.log('hong2', hong2);
console.log('kim2', kim2);
export {}

// //Mapped Typed
// //이미 정의된 타입을 가지고 새로운 타입을 생성할 때 사용하는 문법
// //존재하는 타입에 keyof 연산자 사용해 키를 가져오는 방식
// //존재하는 타입의 키를 매핑하도록 타입에 지시하면 새로운 타입으로 매핑
// type Animals = 'dog'|'cat'|'pig';

// //Animals에 있는 각각 dog,cat,pig를 ket로 해서
// //number 타입 값을 가지는 객체를 생성
// type AnimalCounts = {
//     [key in Animals]:number;
// };

// //T는 string타입을 상속(T extends string),
// //T에 있는 각 요소들을 key로 삼는 객체 타입을 생성
// type AnimalCounts2<T extends string> = {
//     [key in T]:number;
// };
// type Ac2 = AnimalCounts2<Animals>;



//매핑된 타입과 시그니처
interface Researcher {
    researchMethod():void; //메소드 구문
    researchProperty:() => string; //프로퍼티 구문 -> 이것만 꺼내보기
}
//T타입의 모든 키를 하나씩 돌면서
//그 키와 매칭되는 타입을 그대로 복사해서 타입을 생성 -> 매핑된 타입
type JustProperties<T> = {
    [key in keyof T]:T[key];
};
type ResearcherProperties = JustProperties<Researcher>;

// type ResearchPropertyType = Researcher['researchProperty'];
type ResearchPropertyType = Pick<Researcher, 'researchProperty'>;



// //Mapped Type - 제한자(readonly,?)변경
// type CreateMutable<T> = { //readonly 제거
//     -readonly[key in keyof T]:T[key];
// }
// type CreateImmutable<T> = { //readonly 추가
//     readonly[key in keyof T]:T[key];
// }
// type LockedAccount = {
//     readonly id:number;
//     readonly name:string;
// };
// type UnlockedAccount = CreateMutable<LockedAccount>;
// type LockedAccount2 = CreateImmutable<UnlockedAccount>



// //Conditinal Type - 조건부 타입
// //condition ? trueExpression : falseExpressiono 형식의 조건부 타입은
// //함수에 제공된 옵션 객체를 기반으로 함수 반환 타입 변경시 유용함
// interface QueryOptions {
//     throwIfNotFound:boolean;
// }
// //throwIfNotFound가 true이면 결과 타입은 string, false이면 string|undefined
// type QueryResult<T extends QueryOptions>
// = T['throwIfNotFound'] extends true ? string:string|undefined;

// //declare 실제 구현은 없는데 타입만 알려줌, 타입 검사용(런타임에 영향을 주지 않음)
// declare function retrieve<Options extends QueryOptions>(
//     key:string,
//     options?:Options,
// ):Promise<QueryResult<Options>>;

// async function doQuery() {
//     //옵션이 없음 (options 전달 안 함) --> {throwIfNotFound:boolean}
//     const res1 = await retrieve('GET/api/1.0/users'); //string|undefined
//     //throwIfNotFound:false로 명시됨 --> Options['throwIfNotFound'] === false
//     const res2 = retrieve('GET/api/1.0/users/1', {throwIfNotFound:false}); //Promise<string|undefined>
//     //throwIfNotFound:true로 명시됨 --> Options['throwIfNotFound'] === true
//     const res3 = await retrieve('POST/api/1.0/posts', {throwIfNotFound:true}); //Promise<string> => string
// }



// //Conditional Type - 조건부 타입
// //제네릭 타입에 유니언 타입 제공할 경우 결과 타입은 
// // 각 구성 요소에 조건부 타입을 적용하는 유니언이 된다(분배법칙)
// // type HalfArrayified = string|number[]
// type ArrayifyUnlessString<T> = T extends string ? T:T[];
// //string extends string ? string:string[] -> string
// //number extends string ? number:number[] -> number[]
// type HalfArrayified = ArrayifyUnlessString<string|number>;
// type HalfArrayified2 = ArrayifyUnlessString<'str'|1|2>;
// //?T = 'str'|1|2인 경우, 'str'은 string이라 그대로, 숫자들은 배열(1[],2[])로 변형

// // type HalfArrayified2 = "str"|1[]|2[]
// type Book = {title:string, price:number};
// type Food = {name:string, country:string};
// //T가 {title:string}구조를 가지고 있으면 -> 그냥 T
// //그렇지 않으면 -> T[] (배열)
// type ArrayifyUnlessTitle<T> = T extends {title:string} ? T:T[];
// //Book에는 title:string이 있으므로 그냥 Book
// type HalfArrayified3 = ArrayifyUnlessTitle<Book|Food>;



//Conditional Type - 조건부 타입 -> 유추된 타입(infer)
//infer:inference system(추론):inline에서 Generic 선언(만들기)
//유추된 타입(infer) (cf.number[] <==> Array<number>)
type ArrayItems<T> =      // T extends unknown[] ? T[number]:T
    T extends(infer Item)[] ?   //참이라면 Item이라는 Generic Type을 선언(생성)
        Item : T;               //거짓일때는 정확히 추론할 수 없으므로 사용하면 안됨

type StringItem = ArrayItems<string>; //string
type StringArrayItem = ArrayItems<string[]>; //string, 배열 안의 요소 타입
type NumberArrayItem = ArrayItems<number[]>; //number, 배열 안의 요소 타입
type BooleanArrayItem = ArrayItems<boolean[]>; //boolean, 배열 안의 요소 타입
type StringArrayItem2 = ArrayItems<Array<string>>; //string[] => string, 배열 안의 요소 타입
type String2DItem = ArrayItems<string[][]>; //string[] --> 배열 안에 다시 배열

// //Conditional type - never
// //never와 교차, 유니언타입
// //Conditional type - never
// // never & SomeType => never
// // never | SomeType => SomeType
// type NeverIntersection = never & string; //never
// type NeverUnion = never|string; //string
// type NeverIntersection2 = never & Person; //never
// type NeverUnion2 = never|Person; //Person
// // (cf.union = 덧셈, intersection = 곱셈, never = 0)

// // unknown
// type UnknownUnion = string|unknown; //unknown
// type UnknownIntersection = string & unknown; //string
// // (cf.union = 합집합, intersection = 교집합, unknown = 전체집합)

// //never와 Conditional Type
// // never는 유니언에서 무시되기 때문에 유니언 타입에서 제네릭조건부의 결과는 never가 아닌 것이 된다
// //즉 never는 유니언에서 무시된다다
// type OnlyString<T> = T extends string ? T : never;
// //T가 string이라면 T 그대로 반환하고, 그렇지 않으면 never를 반환하는 조건부 타입
// //'red'|'blue'
// type RedOrBlue = OnlyString<'red'|'blue'|0|false>;



// //never와 Mapped Type
// //유니언에서 never는 무시됨
// //Mapped Type은 타입의 멤버를 매핑할 수 있다
// //조건부 타입은 조건이 충족되는 경우 타입을 never로 변환하는데 사용할 수 있다
// type OnlyStringProperties<T> = {
//     //T의 모든 키(k in keyof T)를 하나씩 검사[k] 타입이 string이면 k를 그대로,
//     //아니면 never로 변환
//     [k in keyof T]:T[k] extends string ? k:never;
// } [keyof T]; // 그 결과값을 모아서 하나의 타입으로 생성
// interface AllEventData {
//     participants:string[]; //string 아님 --> never
//     location:string; //string임
//     name:string; //string임
//     year:number; //string아님 --> never
// }
// //'location'|'name'
// type OnlyStringEventData = OnlyStringProperties<AllEventData>;
// // never|'location'|'name'|never --> 'location'|'name' union은 반복문으로 수행된다



// //Template Literal Type - 템플릿 리터럴 타입
// //문자열이 일부 문자열 패턴과 일치함을 나타내고 싶을 때 사용할 수 있다
// //Symbol 제외한 primitive타입만 사용 가능
// type Greeting = `Hello${string}`; //Hello로 시작해야함
// let matches:Greeting = 'Hello, TS!';
// // let mismatches:Greeting = 'TS, Hello!' //Error

// //문자열 리터럴 타입
// type Method = 'get'; //'GET'|'POST'|'PATCH'|...
// type Version = '1.0'|'2.0';
// type Model = 'user'|'post';
// //템플릿 리터럴 타입(\${}'')으로 문자열 포멧을 강제
// type Req = `${Method}/api/${Version}/${Model}s${`/${number}`|''}`;
// function sendRequest(req:Req) {
//     //send request...
// }
// sendRequest('get/api/1.0/users'); //OK
// sendRequest('get/api/1.0/posts/10'); //OK
// // sendRequest('get/api/1.0/users/hong'); //Error

// // Intrinsic String Manipulation Type
// // -Uppercase
// // -Lowercase
// // -Capitalize
// // -Uncapitalize
// type X = 'id'|'name';
// type U = Uppercase<X>;
// type L = Lowercase<U>;
// type C = Capitalize<X>;
// type UC = Uncapitalize<C>;

// type Command = "StartEngine";
// type CommandUncapitalized = Uncapitalize<Command>;
// const command:Command = "StartEngine"; //'StartEngine'
// const uncapitalizedCommand:CommandUncapitalized = "startEngine"; //'startEngine'
// console.log('command:', command);
// console.log('uncapitalizedCommand:', uncapitalizedCommand);



// //Template Literal Type (Cont'd)
// type DataKey = 'location'|'name'|'year'
// type ExistenceChecks = {
//     [key in `check${Capitalize<DataKey>}`]: () => boolean;
//     //Datakey를 기반으로 키 이름을 동적으로 생성
// }
// function checkExistence(checks:ExistenceChecks) {
//     checks.checkLocation();
//     checks.checkName();
//     checks.checkYear();

//     // checks.checklocation(); //Error Capitalize<DataKey> -> Location
//     // checks.checkWrong(); //Error
// }
// // `check${Capitalize<DataKey>}`로 매핑된 DataKey에 있는 모든 문자열을 키로 사용
// // ExistenceChecks 타입에서 사용된 키는 checkLocation,checkName,checkYear

// interface DataEntry<T> {
//     key:T;
//     value:string;
// }
// type DataEntryGetters = {
//     [key in DataKey as `get${Capitalize<key>}`]:() => DataEntry<key>;
//     //key in DataKey:DataKey에 있는 각 키를 순차적으로 반복
//     //key에 get을 앞에 붙이고, key의 첫 글자를 대문자로 바꿔서 새로운 키 이름을 생성
// }
// const getters:DataEntryGetters = {
//     getLocation:() => ({key:'location', value:'New York'}),
//     getName:() => ({key:'name', value:'conan'}),
//     getYear:() => ({key:'year', value:'2025'}),
// };
// const locationData = getters.getLocation();
// console.log(locationData.key); //'location'
// console.log(locationData.value); //'New York'
// //as키워드로 결과 타입의 키가 템플릿 리터럴 타입과 일치하도록 변경
// //DataEntryGetters 타입에서 사용된 key는 location,name,year임




// //Template Literal Type (Cont'd)
// //Keyof typeof
// const config = {
//     location:'unknown',
//     name:'anonymous',
//     year:0,
// };

// type LazyValues = {
//     [k in keyof typeof config as `${k}Lazy`]: () => Promise<typeof config[k]>;
// };

// async function withLazyValues(configGetter:LazyValues) {
//     await configGetter.locationLazy;
//     await configGetter.nameLazy;
//     await configGetter.yearLazy;
// };

// //기존 객체에 keyof typeof를 사용해 해당 객체의 타입에서 매핑된 타입을 만들 수 있다!
// type LazyValues2 = {
//     locationLazy: () => Promise<string>;
//     nameLazy: () => Promise<string>;
//     yearLazy: () => Promise<number>;
// }




//Template Literal Type (Cont'd)
// type TurnIntoGettersDirect<T> = { //Error
//     [key in keyof T as `get${key}`]:() => T[key];
// }

type GettersJustString = {
    getStringkey: () => string;
}

const someSymbol = Symbol('');

interface HasStringAndSymbol {
    StringKey:string;
    [someSymbol]:number;
}

type TurnIntoGetters<T> = { //StringLike인지 검사하는 구문
    [key in keyof T as `get${key & string}`]: () => T[key];
}

type GettersJustString2 = TurnIntoGetters<HasStringAndSymbol>;
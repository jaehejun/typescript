export {}

//제네릭 함수
// function func<MyType>(x:MyType[]):MyType|undefined {
//     return x[0];
// }
// let a = func<number>([4,2]);
// console.log(a);
// let b = func<string>(['conan', 'rose']);
// console.log(b);

// //generic 타입 제한하기(constraints)
// // function func2<MyType>(x:MyType) {
// //     return x-1;
// // }
// // let a = func2<number>(100);

// function func3<MyType extends number>(x:MyType) {
//     return x-1;
// }
// let b = func3<number>(100);

// // function func4<MyType>(x:MyType) {
// //     return x.length;
// // }
// // let c = func4<string>('hello');

// interface lengthCheck {
//     length:number;
// }
// function func5<MyType extends lengthCheck>(x:MyType) {
//     return x.length;
// }
// let d = func5<string>('hello'); //가능
// // let e = func5<string>(1234); //에러


// //제네릭 함수
// // 입력 타입에 따라 결과 타입도 동적으로 정해지는 함수
// // 호출하는 방식에 따라 다양한 타입으로 작동하도록 의도한다
// function identity<T>(input:T) {
//     return input;
// }
// //화살표 함수(주의:.tsx파일에서는 <T>가 JSX 태그로 오해할 수 있음)
// const identity2 = <T>(input:T) => input;

// //명시적 제네릭 타입 인수 사용! 해당 타입 인수가 무엇인지 명시함
// const s1 = identity<string>('me'); //string, 명시적 타입 전달
// console.log('s1',s1);
// const n1 = identity<number>(123); //number
// console.log('n1',n1);

// // identity 함수에 제공된 인수를 사용해 해당 함수 매개변수의 타입 인수를 유추!
// const s2 = identity('me'); //'me'
// console.log('s2',s2);
// const n2 = identity(123); //123
// console.log('n2',n2);

// const s3 = identity2<string>('2me');
// console.log('s3',s3);
// const n3 = identity2(222);
// console.log('n3',n3);


// function logWrapper<Input>(callback:(input:Input) => void) {
//     return (input:Input) => {
//         callback(input);
//     }
// }

// const doCallbackc1 = logWrapper((input:string) => { //유추가능
//     console.log('input>',input,'length>',input.length);
// });
// const doCallbackc2 = logWrapper<string>((input) => { //타입명시
//     console.log('input>',input,'length>',input.length);
// });
// // const doCallbackc3 = logWrapper(input) => { //Error! 유출 불가능
// //     console.log('input>',input,'length>',input.length);
// // });

// doCallbackc1('callback1 : (input:string)');
// doCallbackc2('callback2 : <string>(input)');



// //제네릭 함수 (Cont'd) 다중 함수 타입 매개변수
// function makeTuple<First, Second> (first:First, second:Second) {
//     return [first, second] as const; //readonly 튜플
// }

// const [userName, age] = makeTuple('lim',25);
// const [level,agree] = makeTuple<number,boolean>(10,true);
// const [emp,dept] = makeTuple({
//     id:1,
//     name:'hong',
// }, {
//     id:3,
//     dname:'develpoment',
// });

// // makeTuple<boolean>(true,false);
// //다중타입 매개변수 선언시 명시적으로 제네릭 타입 모두 선언하거나
// //타입스크립트가 유추할 수 있도록 모두 선언하지 않아야함

// makeTuple<boolean,boolean>(true,false); //또는 makeTuple(true,false);


// //제네릭 인터페이스
// type Color = 'red'|'blue'|'green';
// type Address = {sigungu:string, zipcode:string};

// interface Info<T> {
//     id:number;
//     name:string;
//     additinal?:T;
// }
// const info1:Info<Color> = {
//     id:1,
//     name:'lim',
//     additinal:'red'
// };
// console.log('info1',info1);

// const info2:Info<Address> = {
//     id:2,
//     name:'hong',
//     additinal:{sigungu:'Seoul', zipcode:'04112'}
// }
// console.log('info2',info2);

// interface MyNode<T> {
//     value:T; //해당 노드가 저장하는 값
//     next:MyNode<T>|null; //다음노드
// }
// function push<T>(currNode:MyNode<T>, nextNode:MyNode<T>) {
//     currNode.next = nextNode;
//     //currNode.next에 nextNode 할당해 리스트처럼 이어줌
// }
// function createNode<T>(value:T): MyNode<T> {
//     //주어진 값으로 새 노드를 만들어 반환
//     return {
//         value,
//         next:null
//     }
// }
// const defaultNode = createNode({name:'lim',age:25});
// push(defaultNode, {
//     value:'hong', //value: defaultNode2
//     next:null
// });

// let defaultNod2:MyNode = {
//     value:{name:'lim', age:25}, next:null
// };
// let defaultNod3:MyNode<{name:string; age:number}> = {
//     value:{name:'lim',age:25}, next:null
// };



// //제네릭 클래스 - 다양한 타입의 상품을 처리할 수 있는 공장 클래스(Factory<T>)
// class Factory<T> {
//     protected products:T[];
//     constructor(product:T) {
//         this.products = [product];
//     }
//     create(product:T) {
//         this.products.push(product);
//     }
//     getProducts() {
//         return[...this.products];
//     }
// }

// const factory = new Factory({name:'KIA', description:'car factory'});
// console.log('factory:', factory);
// factory.create({name:'HYUNDAI', description:'car factory2'});
// const products = factory.getProducts();
// console.log('products:', products);

// type Car = {name:string, description:string};
// new Factory<Car>({name:'car', description:'desription'});



// //공통 제네릭 클래스
// class Factory<T> {
//     protected products:T[];
//     constructor(product:T) {
//         this.products = [product];
//     }
//     create(product:T) {
//         this.products.push(product);
//     }
//     getProducts() {
//         return [...this.products];
//     }
// }

// type Car = {model:string, year:number};
// type Laptop = {cpu:string, memory:string};

// class Carfactory extends Factory<Car> {} //제네릭 T를 Car로 고정한 클래스:Car만 다룰수있음

// class LaptopFactory extends Factory<Laptop> {} //Laptop으로 고정

// const carFactory = new Carfactory({model:'a-model',year:2020});
// carFactory.create({model:'b-model',year:2021});
// console.log(carFactory.getProducts());

// const laptopFactory = new LaptopFactory({cpu:'4core',memory:'32GB'});
// laptopFactory.create({cpu:'8core',memory:'64GB'});
// console.log(laptopFactory.getProducts());

// //Additional
// class CoffeeFactory<T> extends Factory<T> {} //T를 그대로 유지한 채 상속

// const coffeeFactory = new CoffeeFactory<{menu:string, price:number}> ({
//     menu:'americano',
//     price:2000,
// });
// console.log(coffeeFactory.getProducts());



// //제네릭 인터페이스 구현
// type Address = {sigungu:string, zipcode:string};

// interface Info<T> {
//     id:number;
//     name:string;
//     additional:T; //유동적
// }
// //implements로 인터페이스에 제네릭 타입 사용
// class MyInfo<T> implements Info<T> {
//     id:number;
//     name:string;
//     additional:T;

//     constructor(id:number, name:string, additinal:T) {
//         this.id = id, this.name = name;
//         this.additional = additinal;
//     }
// }

// const me = new MyInfo<Address>(1,'lim', {
//     sigungu:'Seoul',
//     zipcode:'04222',
// });
// console.log(`I live in ${me.additional.sigungu} ${me.additional.zipcode}`);


// //클래스 제네릭,메소드 제네릭 & 정적 메소드 제네릭
// // T : 클래스의 제네릭 타입 (Box의 내부 값 타입)
// // U : map 메소드에서 사용하는 메소드 자체 제네릭
// // V : static wrap 메소드에서 사용하는 또 다른 메소드 자체 제네릭
// class Box<T> {
//     private value:T;

//     constructor(value:T) {
//         this.value = value;
//     }
//     getValue(): T {
//         return this.value;
//     }
//     //Box<T>에서 값을 꺼내서 가공하고 다시 Box<U>로 감쌈
//     map<U>(fn:(v:T) => U): U {
//         return fn(this.value);
//     }

//     //어떤 값이든 Box로 감싸주는 헬퍼 메소드
//     static wrap<V>(value:V):Box<V> {
//         return new Box(value);
//     }
// }

// const numberBox = new Box<number>(100);

// //클래스 제네릭 T는 number
// const doubled = numberBox.map((n) => n * 2); //U는 number

// //static 메소드에서 제네릭 따로 부여
// const stringBox = Box.wrap('hello'); //V는 스트링
// console.log(stringBox.getValue()); //'hello'



//메소드 제네릭
class Factory<T> {
    protected products: T[];

    constructor(product:T) {
        this.products = [product];
    }
    create(product: T) {
        this.products.push(product);
    }
    getProducts() {
        return [...this.products];
    }
}
type Syrup = 
| {syrup: 'choco'; price:500}
| {syrup: 'strawbery'; price:800};
type Topping = 'java' | 'cherry';
type Coffee = {menu:string; price:number};

class CoffeeFactory extends Factory<Coffee> {
    order<T>(menu:string, topping:T[]) {
        const coffee = this.products.find(({menu:_coffee}) =>
        _coffee === menu);

        return coffee ? {...coffee, additives:topping} : null;
        //menu와 일치하는 커피를 찾고 있으면 additives라는 새로운 속성 추가
    }
}

const coffeeFactory = new CoffeeFactory({
    menu: 'americano',
    price: 2000,
});

const myCoffee = coffeeFactory.order<Syrup | Topping> (
    'americano', [
        {syrup:'choco', price:500},
        'java',
        'cherry',
    ]
);

const myAdditionalPrice = myCoffee?.additives.reduce(
    (sum, item) => (sum += item.price),
    0
);  //item은 Syrup|Topping 중 하나, Toppin은 그냥 문자열 -> price not exist on type 'java'

const yourCoffee = coffeeFactory.order<Syrup>(
    'americano', [
        {syrup:'choco', price:500},
        {syrup:'strawbery', price:800},
    ]
);

const yourAdditionalPrice = yourCoffee?.additives.reduce(
    (s,c) => (s += c.price),
    0
); // OK? Error? OK!


export{}
// 연습문제
// 인터페이스를 이용해서 타입 만들기
let product = {brand:'Apple', serialNumber:12345, model:['tablet','phone']};

interface Product {
    brand:string;
    serialNumber:number;
    model:string[];
}
let product2:Product = {
    brand:'Apple',
    serialNumber:12345,
    model:['tablet','phone'],
};
console.log(product2);

//array 안에 여러 개의 object들을 위한 타입 지정
let cartList = [{product:'청소기',price:120000}, {product:'애플워치',price:450000}];

let cartList2:CartList[] = [
    {product:'청소기',price:120000},
    {product:'애플워치',price:450000},
];

interface CartList {
    product: string;
    price: number;
}

//일부 상품은 결제기능(payment)속성이 추가되어야 함 extends해서 타입 만들어보기
// {product:'애플워치',price:450000,payment:true}

interface Order extends CartList {
    payment?:boolean;
}

let cartList3:Order[] = [
    {product: '청소기', price:120000},
    {product: '애플워치', price:450000, payment:true},
];
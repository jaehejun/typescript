// 주문상품 총 금액 요금표 참고해 계산
// 에러가 발생하는 이유와 해결 방법 고민
// 사이즈에 M이 아니라 MM으로 사이즈 잘못 기입했을 경우 TS 오류가 나면 통과

// const SIZE = [
//     {id: 'XS', price: 8000},
//     {id: 'S', price: 10000},
//     {id: 'M', price: 12000},
//     {id: 'L', price: 14000},
//     {id: 'XL', price: 15000},
// ]

// sizeOption[size.id]에 접근할 때 타입이 보장되지 않아서 에러 발생
//해결방법 1: size.id에 타입을 제한
//해결방법 2 : SIZE에 as const를 사용해서 size.id가 SizeId 값으로 추론되도록 함
// type SizeId = 'XS'|'S'|'M'|'L'|'XL';

// const SIZE: {id:SizeId; price:number}[] = [
//     {id: 'XS', price: 8000},
//     {id: 'S', price: 10000},
//     {id: 'M', price: 12000},
//     {id: 'L', price: 14000},
//     {id: 'XL', price: 15000},
// ];

const SIZE: { id: "XS" | "S" | "M" | "L" | "XL"; price: number }[] = [
    { id: "XS", price: 8000 },
    { id: "S", price: 10000 },
    { id: "M", price: 12000 },
    { id: "L", price: 14000 },
    { id: "XL", price: 15000 },
  ] as const;

const sizeOption = {XS:1, S:5, M:2, L:2, XL:4};

const totalPrice = SIZE.reduce((currPrice, size) => 
    currPrice + (sizeOption[size.id] * size.price), 0
);

console.log(sizeOption['XS']);
// console.log(sizeOption['MM']);
console.log(totalPrice);
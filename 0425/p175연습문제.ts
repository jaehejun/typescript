export {}

// 다음 코드가 오류가 나지 않도록 수정
// 단, itemPrices의 item에는 재고(stock)에 있는 item들만 가능

type Item = {item:string; price:number};
// type ItemPrice<T,U> = //이 부분을 작성;
type ItemPrice<T,U> = {
    item: keyof U; //U 객체의 키들만 가능
    price: number;
};

const stock = {X:1, Y:2, Z:30};
// 우리가 원하는 구조
// type ItemPrice<T,U> = {item: 'X'|'Y'|'Z'; price:number};

const itemPrices:ItemPrice<Item, typeof stock>[] = [
    {item: 'X', price: 1000},
    {item: 'Y', price: 2000},
    {item: 'Z', price: 3000},
];

const total = itemPrices.reduce((curr, itemPrice) => 
                curr + stock[itemPrice.item] * itemPrice.price, 0);

console.log(total);
// function sayHello() {
//     return 'Hello';
// }

// function sayWord(word) {
//     return word;
// }

// console.log(sayHello());
// console.log(sayWord('Hi'));

// function sayWord(word:string) {
// // function sayWord(word) { // Parameter 'word' implicitly has an 'any' type
//     return word;
// }
// console.log(sayWord('내이름은'));
// // console.log(sayWord('내이름은','코난')); // 파라미터 개수 != 인자 개수



// 연습문제
// 문자열을 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자열 type으로 return하는 함수
// console.log(removeZero('00afasadfdf00')); // afasadfdf00

function removeZero(str:string) {
    let res:string = '';
    for (let i = 0; i < str.length; i++)
    {
        if (str[i] === '0')
            continue;
        res += str[i];
    }
    let res2:string = '';
    return res;
}
console.log(removeZero('00afasadfdf00')); // afasadfdf00

// 문자를 하나 입력하면 대시기호'-'가 있으면 전부 제거하고 문자열 type으로 return하는 함수
// console.log(removeDash('010-2222-2222')); //01022222222

function removeDash(str:string) {
    let res:string = '';
    for (let i = 0; i < str.length; i++)
        if (str[i] === '-')
            continue;
        else
            res += str[i];
    return res;
}

console.log(removeDash('010-2222-2222')); //01022222222

// 문자를 하나 입력하면 대시기호'-'가 있으면 전부 제거하고 숫자 type으로 return하는 함수
// console.log(removeDash2Number('010-2222-2222')); //1022222222

function removeDash2Number(str:string) {
    let res:string = '';
    for (let i = 0; i < str.length; i++)
    {
        if(str[i] === '0')
            continue ;
        res += str[i];
    }
    let res2:string = '';
    for (let i = 0; i <res.length; i++)
    {
        if (res[i] === '-')
            continue ;
        res2 += res[i];
    }
    return parseInt(res2);
}

console.log(removeDash2Number('010-2222-2222')); //01022222222
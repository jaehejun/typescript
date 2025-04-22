export {} // 파일을 모듈로 인식해 전역스크립트 처리 방지
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

// function removeZero(str:string) {
//     let i = 0;
//     while(i < str.length && str[i] === '0') {
//         i++;
//     }
//     return str.slice(i);
// }
function removeZero(str:string): string {
    return str.replace(/^0+/,''); // 문자열의 시작 부분(^)부터 '0'이 연속된 부분(0+)을 찾아 한 번에 제거
}
console.log(removeZero('00afasadfdf00')); // afasadfdf00

// 문자열을 입력하면 대시기호'-'가 있으면 전부 제거하고 문자열 type으로 return하는 함수
// console.log(removeDash('010-2222-2222')); //01022222222

// function removeDash(str:string) {
//     return str.split('-').join('');
// }
function removeDash(str:string): string {
    return str.replace(/-/g,''); // 모든(g) '-' 문자를 찾아서 빈 문자열('')로 모두 제거
}

console.log(removeDash('010-2222-2222')); //01022222222

// 문자를 하나 입력하면 대시기호'-'가 있으면 전부 제거하고 숫자 type으로 return하는 함수
// console.log(removeDash2Number('010-2222-2222')); //1022222222

function removeDash2Number(str:string) {
    return parseInt(str.replace(/^0+/,'').replace(/-/g,''));
    // parseInt(str, base(기본10진수))
    // -> 문자열 앞부분부터 숫자 형태로 해석 가능한 부분까지만 반환:문자열에서 뽑거나 소수 무시할때 사용용
    // -> 문자열이 숫자로 시작하지 않으면 NaN반환
    // Number(str)
    // -> 문자열 전체가 유효한 숫자일 때만 정확하게 변환:정확한 숫자 필요할때 사용
    // -> 모든 숫자 형식 지원, 실패시 NaN반환
}

console.log(removeDash2Number('010-2222-2222')); //1022222222
//원윤서

// 문자열을 입력하면 맨 앞의 0을 제거하고 문자열 타입으로 반환하는 함수
const removeZero = (str: string): string => {
    let i = 0;
    while (i < str.length && str[i] === "0") {
      i++;
    }
    return str.slice(i);
  };
  
  console.log(removeZero("00fasadfdf00"));
  
  // 문자열을 입력하면 대시 기호를 전부 제거하고 문자열 타입으로 반환하는 함수
  const removeDash = (str: string): string => {
    let i = 0;
    const len = str.length;
    for (i; i < len; i++) {
      let c = str.charAt(i);
      if (c === "-") {
        str = str.replace("-", "");
      }
    }
  
    return str;
  };
  
  console.log(removeDash("010-2222-3333"));
  
  // 문자열을 입력하면 대시 기호를 전부 제거하고 숫자 타입으로 반환하는 함수
  const removeDash2Number = (str: string): number => {
    let i = 0;
    const len = str.length;
    for (i; i < len; i++) {
      let c = str.charAt(i);
      if (c === "-") {
        str = str.replace("-", "");
      }
    }
  
    const num = Number(str);
    return num;
  };
  
  console.log(removeDash2Number("010-2222-3333"));


//박승희
function removeZero(input: string): string {
    return input.replace(/^0+/, '');
}
function removeDash(input: string): string {
    return input.replace(/-/g, '');
}
function removeDash2Number(input: string): number {
    return parseInt(input.replace(/-/g, ''));
}
console.log(removeZero('00afasadfdf00'));
console.log(removeDash('010-1234-5678'));
console.log(removeDash2Number('010-1234-5678'));

//송유림
function removeZero(num: string) {
    let idx = 0;
    while (idx < num.length && num[idx] === '0') {
      idx++;
    }
    return num.slice(idx);
  }
  
  console.log(removeZero('00asdasd00'));
  
  
  function removeDash(num: string) {
    return num.split('-').join('');
  }
  
  console.log(removeDash('010-2222-2222'));
  
  
  function removeDash2Number(num: string) {
    let number = num.split('-').join('');
    return Number(number);
  }
  
  console.log(removeDash2Number('010-2222-2222'));
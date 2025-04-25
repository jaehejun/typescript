export{}
// p103 연습문제
// 다음을 interface로 어떻게 정의할까??
// type Ud2 = (TUser|TDept) & {addr:string};

interface User {
    id:number;
    name:string;
}
interface Dept {
    id:number;
    dname:string;
    captain:string;
}
interface Ud2 {
    id:number;
    //이부분을 작성하시오
    [x:string]:number|string;
    addr:string;
}

// 다음 코드가 오류 없으면 통과!
const ud2:Ud2 = {id:1, name:'HH', addr:'Seoul'};
console.log(ud2);
const ud3:Ud2 = {id:1, dname:'HH', captain:'HH', addr:'Seoul'};
console.log(ud3);
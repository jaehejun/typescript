export {}

// Utility Type 만들기
// 특정 key의 타입을 변경하는 Change 유틸리티 타입 만들기

interface IUser {
    id:number;
    age:number;
    name:string;
}
interface IDept {
    id:number;
    age:string;
    dname:string;
    captain:string; // DeptCaptain 타입에서는 captain:IUser;
}

// type Change<T, K extends keyof T, U> = //이부분을 작성
type Change<T, K extends keyof T, U> = {
    [P in keyof T]: P extends K ? U : T[P];
}
type DeptCaptain = Change<IDept, 'captain', IUser>;

// type Err = Change<IDept, 'xxx', IUser>; //존재하지 않는 키는 Error!!!
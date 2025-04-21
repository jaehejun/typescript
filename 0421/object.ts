// let xuser: {id:number, name:string};
// xuser = {id:1, name:'xx'}; //OK
// xuser = {id:1}; //Error (Property 'name' missing in type)
// xuser = {id:1, name:'xx', age:30}; 
// //Error ({id,name,age} is not assignable to type {id,name})
// // => Freshness! Fresh Object Literal : 갓 만들어진 객체 리터럴

// //타입 별칭(type alias)
// type TUser = {
//     id:number;
//     name:string;
// };

// let hong:TUser;
// hong = {id:1, name:'Hong'}; //OK
// hong = {id:1}; // Error(name property missing)
// hong = {id:1, name:'Hong', addr:'Pusan'}; //Error(not assignable) Freshness!
// hong = {id:1, name:'Hong', addr:'Pusan'} satisfies TUser; 
// hong = {id:1, name:'Hong',addr:'Pusan'} as TUser; //OK(turn-off Freshness!)
// //as TUser를 사용하면 타입을 강제함

// const kim = {id:2, name:'Kim',addr:'Pusan'};
// xuser = kim; //OK(:freshness off)

// type A = {id:number, name:string};
// type B = {id:number, name:string};

// let a:A = {id:1, name:'hi'};
// let b:B = a; //OK
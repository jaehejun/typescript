var team;
// console.log(team?.length); // error! why??
//Variable 'teamName' is used before being assigned.ts(2454)
team = 'blue';
console.log(team.length); //ok!
var coach; //Union Types -> coach는 문자열이거나 undefined
console.log(coach === null || coach === void 0 ? void 0 : coach.length); //ok! why??
headCoach = 'Han';
console.log(headCoach.length); // ok!

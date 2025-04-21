let rocker; // type : any

rocker = "Alice"; // type : string
console.log(rocker.toUpperCase()) //OK!

rocker = 12.34 // type : number
console.log(rocker.toPrecision(1)) // OK!

// rocker.toLowerCase()
//Error : 'toLowerCase' does not exist on type 'number'.
let found2: boolean = true;
let grade2: number = 99;
let firstName2: string = "Andrew";
let lastName2: string = "Derbak";
let stuff: any = {"class":"Biology"};

console.log(found2);
console.log(firstName2+" "+lastName2);
console.log(JSON.stringify(stuff)+" - grade:"+grade2);

// Use Template String
console.log(`Hi ${firstName2} ${lastName2}`)
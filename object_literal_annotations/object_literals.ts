
//type annotations for object literals
console.log("type annotations for object literals");
const myInfo:{name:string, age:number, address:{lat:number,lng:number}, isMarried:boolean} = {
	name: "Nishanth",
	age: 25,
	address: {lat:25, lng:25},
	isMarried: false

};

// destructuring object literals
console.log("destructuring object literals");
const {age} :{age:number} = myInfo;
console.log(age);


// const {name} :{name:string} = myInfo;
// console.log(name);

const {isMarried, address}: {isMarried: boolean, address:{lat:number, lng:number}} = myInfo;
console.log(isMarried, address);

//destructuring object literals in functions
console.log("destructuring object literals in functions");
const profile = {
	date: new Date(),
	genre: "Horror"
};

const printInfo = ({date, genre}: {date: Date, genre:string}):void =>{
console.log(date);
console.log(genre);
};

printInfo(profile);
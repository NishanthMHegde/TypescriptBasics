
//Type annotations around functions with return type
console.log("Type annotations around functions with return type");
const add = (a:number,b:number): number =>{
	return a+b;
};

//Type inference for the same
console.log("Type inference for the same around functions with return type");
const addNum = (a:number, b:number) =>{
	//this return statement is computed by typescript to return a number and hence it automatically inferences number as return type
	return a+b; 
}

//type annotation for string reeturning functions
console.log("type annotation for string reeturning functions");
const printHello = (name:string):string =>{
	return `Hello ${name}`;
};

//type annotation for boolean
console.log("type annotation for boolean reeturning functions");
const isAdult = (age:number):boolean =>{
	return age>18?true:false; 
};

//type annotations for function keyword
console.log("type annotation for function keyword");
const diff = function subtract(a:number, b:number):number{
	return a-b;
};

//type annotations for anonymous functions
console.log("type annotations for anonymous functions");
const quot = function(a:number ,b:number):number{
	return a/b; 
}

//void functions annotations

const printInfo = (city:string):void =>{
	console.log(`Born in city: ${city}`);
};

//never function: This function is bound to not complete fully and hence return nothing

const neverFunc = (age:number):never => {
	throw new Error("Oh no!");
};

//When there is a chance of function not reaching the end, we still use void. 
//This is because, there is also a chance of function terminating as well.

const tellMe = (name:string):void =>{
	if (name==='Nishanth'){
		try{
		throw new Error("He is the boss!");
	}
	catch(err){
		console.log("");
	}
	}
	console.log(`Welcome ${name}!!`);
};


console.log(add(10,5));
console.log(addNum(10,10));
console.log(printHello("Nishanth"));
console.log(isAdult(25));
console.log(diff(10,4));
console.log(quot(100,4));
printInfo("Bangalore");
neverFunc(14);
tellMe("Jadeja");
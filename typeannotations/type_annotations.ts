// Type annotations are used to explicitly specify the data type that the variable will hold. 
//Type annotations are useful when the variable is declared first and later a value is initialized to it.

//Type annotations for variables
console.log('Type annotations for variables');

let var1:number = 10;
let var2:string = 'hello';
let var3:boolean = false;
let var4:null = null;
let var5:undefined = undefined; 
//alternate way

let var6:number;
var6 = 15;

console.log(var1, var2, var3, var4, var5, var6);

//type annotations for object literals
console.log('Type annotations for object literals');

let var7:{x:number,y:boolean} = {x:10, y:true};
console.log(var7);

//type annotations for classes
console.log('Type annotations for classes');
class Color{
	color: string
}

let var8:Color = {color: "red"}; 
console.log(var8);

//type annotations for arrays
console.log('Type annotations for arrays');

let var9: string[] = ["Hellow", "world"];
let var10: number[] = [10, 20, 30];
let var11:boolean[] = [true, false];

console.log(var9, var10, var11);

//type annotations for functions
console.log('Type annotations for functions');
const func1: (x:number, y:string) => boolean = (x:number, y:string)=>{
console.log(x, y);
return true;
}
console.log(func1(100, 'hello'));


//MAIN REASON TO USE TYPE ANNOTATIONS

// When we declare a variable but dont initialize it, by default Typescript gives it a type of any. 
// Using any as a datatype is dangerous as it can get assigned any type of value.


let var12; 
//In the above example, var12 has a type of 'any'. This means var12 can have any type of value as seen below

console.log("MAIN REASON TO USE TYPE ANNOTATIONS");
var12 = 10;
console.log(var12);
var12 = "str";
console.log(var12);

//We can fix this by assinging a type using type annotations.

//Multiple Type Annotations for a single variable
console.log("Multiple Type Annotations for a single variable");

let foundNum:boolean|number = false;
console.log(`Initial foundNum: ${foundNum}`); 
let nums = [10,20,30,40];
for (let i=0; i<nums.length; i++){
	if (nums[i] == 20){
		foundNum = nums[i];
		break;
	}
}
console.log(`Final foundNum: ${foundNum}`); 
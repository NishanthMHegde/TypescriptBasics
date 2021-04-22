//Type inference is used when the variable declaration and initialization are on the same line. 
//In this way, Typescript learns the type of the variable by seeing the variable assigned to it.

let var1 = 10;
let var2 = "str";
let var3 = true;
//var3 = 10; This will not be possible as Type Inference leads Typescript to believe tha var3 can only get a boolean value

let var4 = ["str1", "str2"];
//var4 = [1,2]; This will not be possible as Typescript expects only an array of strings for var4

console.log(var1, var2, var3, var4);
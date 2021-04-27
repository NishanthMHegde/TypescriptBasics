
//Interfaces is a structure that allows proeprties and methods to be defined. These properties and methods,
//need to be compulsorily implemented by the classes/objects that implements the interface or have their types as the interface.

//There are 2 ways by which interfaces can be used:
//1. By having the interface name as the data type for an object
//2. By implementing  the Interface
interface reportSomething{
	name:string,
	summary(): void
}

//let us create 2 objects that would be of the type reportSomething interface


//USE INTERFACE BY OBJECT TYPE

const car = {wheels:4, 
	name:'Hyundai',
	summary():void{
		console.log(`I am a ${this.name}`);
	}
};

const lorry = {wheels:6, 
	name:'Volvo', 
	summary():void{
		console.log(`I am a ${this.name}`);

}};

const report = (vehicle:reportSomething):void =>{
	vehicle.summary();
}

report(car);
report(lorry);


//USE INTERFACE BY IMPLEMENTING IT

class Vehicle implements reportSomething{
	name: string;
	wheels: number;
	constructor(name,wheels){
		this.name = name;
		this.wheels = wheels;
	}
	summary():void{
		console.log(`I am a ${this.name} and I have ${this.wheels} wheels`);
	};
}


const ford = new Vehicle('Ford', 4);

ford.summary();
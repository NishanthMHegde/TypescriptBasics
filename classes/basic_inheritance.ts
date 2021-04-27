
//Class is a structure that consists of properties and methods that can be made use by the objects of the classes. 

//Inheritance is a process where one class inherits another class and thereby gains access to its properties and methods. 

//The parent class is usually generic in nature and the subclass that inherits the parent class is usually more detailed

//If a subclass extends superclass, then it must make a super call to the superclass and pass the constructor variables. 

class Vehicle{
	name:string;
	wheels:number;
	constructor(name:string, wheels:number){
		this.name = name;
		this.wheels = wheels;
	}

	drive = ():void =>{
		console.log('Vroom Vroom!');
	};

	honk = ():void =>{
		console.log('Beep Beep');
	};
	summary():void{
		console.log(this.name);
		console.log(this.wheels);
	}
}


//Car is also a vehicle it can have its own functions

class Car extends Vehicle{
	age:number;
	constructor(name:string, wheels:number, age:number){
		super(name, wheels);
		this.age = age;
	}
	drive = ():void =>{
		console.log('Hmmmmm zzzzmmmmmmm!');
	};

	honk = ():void =>{
		console.log('Keenk Keenk!');
	};

	summary():void{
		console.log(this.name);
		console.log(this.wheels);
		console.log(this.age);
	}
}

//create a vehicle object
const vehicle = new Vehicle('Ford', 4);
vehicle.drive();
vehicle.honk();
vehicle.summary();

//create a car object
const car = new Car('Ferrare', 4, 10);
car.drive();
car.honk();
car.summary();


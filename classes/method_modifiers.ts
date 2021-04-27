//Method modifiers determine what classes can access the variables and methods defined in the class.

//Method modifers are:
//Public: Any class can access the public propertty or method. 
//Private: Private property or methods can only be accessed within the same class.
//Protected: Protected proeprty or methods can only be accessd within the same class or by the subclass that extends the superclass. 


class Vehicle{
	private name:string;
	public wheels:number;
	protected honk_tune:string = "Beep Beep";
	constructor(name:string, wheels:number){
		this.name = name;
		this.wheels = wheels;
	}

	drive = ():void =>{
		this.honk();
		console.log('Vroom Vroom!');
		this.honk();
	};

	private honk = ():void =>{
		console.log(`${this.honk_tune} .. ${this.honk_tune}`);
	};
	summary():void{
		console.log(this.name);
		console.log(this.wheels);
	}
}

class Car extends Vehicle{
	age:number;
	
	constructor(name:string, wheels:number, age:number){
		super(name, wheels);
		this.age = age;
		//honk_tune is protected and hence can be accessed by the subclass
		this.honk_tune = "Keenk Keenk!";
	}
	drive = ():void =>{
		console.log(`${this.honk_tune} .. ${this.honk_tune}`);
		console.log('Hmmmmm zzzzmmmmmmm!');
		console.log(`${this.honk_tune} .. ${this.honk_tune}`);
	};

	//honk cannot be accessed by Car as it was private in Vehicle
	// honk = ():void =>{
	// 	console.log('Keenk Keenk!');
	// };

	summary():void{
		//name cannot be accessed as it is private in the superclass
		// console.log(this.name);
		//wheels can be accessed as it is public in the superclass
		console.log(this.wheels);
		console.log(this.age);
	}
}

//create a vehicle object
const vehicle = new Vehicle('Ford', 4);
vehicle.drive();
//honk cannot be accessed as it is protected in the Vehicle class
// vehicle.honk();
vehicle.summary();

//create a car object
const car = new Car('Ferrare', 4, 10);
car.drive();
car.summary();
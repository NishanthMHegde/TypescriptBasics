//Tuples is like an array that can hold a list of items which can be of different data type

//Tuples can sometimes be used as an alternate to classes

//Tuples are rarely used

//Tuples are usually used to store data read from CSV


//Consider below example object for Drinks

const drinks = {
	name: 'CocaCola',
	carbonated: false,
	price: 20
};

//The above object can be represented in the form of tuples 

//create a custom type

type Drink = [string, boolean, number];

const drink1: Drink = ['CocaCola', false, 20];

//alternatively we could also write

const drink2: [string, boolean, number] = ['Sprite', true, 15];

console.log(drink1);
console.log(drink2);

import axios from 'axios';


//define an interface with attributes that the response data will have
interface Event{
	userId: number,
	id: number,
	title: string,
	completed: boolean
}
axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
	//the resposne data properties need to have same attribs and types as the interface
	const data = response.data as Event; 
	printInfo(data.userId, data.id, data.title, data.completed);

});

const printInfo = (userId: number, id:number, title:string, completed:boolean) =>{
	console.log(userId);
	console.log(id);
	console.log(title);
	console.log(completed);
};
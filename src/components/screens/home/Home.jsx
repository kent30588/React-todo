import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './create-todo-field/CreateTodoField';
const data = [
	{
		_id: 'qweqzd1213',
		title: 'Finish the essay collaboration',
		isComplited: false,
	},
	{
		_id: 'qwesdv435623',
		title: 'Read next chapter of the book',
		isComplited: false,
	},
	{
		_id: 'qweqzsgcvw43',
		title: 'Send the finished assignment',
		isComplited: false,
	},
]
const Home = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo = (id) => {	
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isComplited = !current.isComplited
		setTodos(copy)
	}
	const removeTodo = id =>
		setTodos([...todos].filter(t => t._id !== id))

	
	return (
		<div className='text-white mx-auto w-4/5'>
			<h1 className="text-2xl font-bold mb-5 text-center">Todo for Junior</h1>
			{todos.map(todo => (
				<TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}/>
			))}
			<CreateTodoField setTodos={setTodos}/>
		</div>
	)
}

export default Home
import React from 'react'
import cn from 'classnames'
import Check from './Check'
import {BsTrash} from 'react-icons/bs'


const TodoItem = ({todo, changeTodo, removeTodo}) => {
	return (
		<div className="flex items-center justify-between mb-5 rounded-2xl bg-zinc-800 m-auto w-3/12 p-4 w-full" >
			<button onClick={() => changeTodo(todo._id)} className="flex items-center">
				<Check isComplited={todo.isComplited}/>
				<span className={cn({ 'line-through': todo.isComplited })}>{todo.title}</span>
			</button>
			<button onClick={() => removeTodo(todo._id)}>
				<BsTrash size={22} className="text-gray-400 hover:text-red-700 transition-colors ease-in-out duration-300"/>
			</button>
		</div>
	)
}

export default TodoItem
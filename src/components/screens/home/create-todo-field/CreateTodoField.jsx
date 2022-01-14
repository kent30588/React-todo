import React, { useState } from 'react'

const CreateTodoField = ({setTodos }) => {
	const [title, setTitle] = useState('');

		const addTodo = (title) => {
		setTodos(prev =>[ {
			_id: new Date(),
			title,
			isComplited: false
		}, ...prev,])
			setTitle('')
	}

	return (
		<div className="flex items-center justify-between mb-5 rounded-2xl border-zinc-800 border-2 m-auto w-3/12 px-5 py-3 w-full mt-20">
			<input
				tupe="text"
				onChange={e => setTitle(e.target.value)}
				value={title}
				onKeyPress={e => e.key === 'Enter' && addTodo(title)}
				className="bg-transparent w-full border-none outline-none"
				placeholder='Введите задачу'>
			</input>
		</div>
	)
}

export default CreateTodoField
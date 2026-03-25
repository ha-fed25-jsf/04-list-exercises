import { useState } from 'react'

const AddTodo = ({ addTodo }) => {
	const [what, setWhat] = useState('')

	return (
		<div>
			<input type="text"
				placeholder="Vad ska du göra?"
				value={what}
				onChange={event => setWhat(event.target.value)}
				/>
			<button onClick={() => addTodo(what)}> Lägg till </button>
		</div>
	)
}
export default AddTodo

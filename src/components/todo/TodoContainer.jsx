import { useState } from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import './TodoContainer.css'

const defaultTodos = [
	{ id: 'a', whatToDo: 'Plugga React', isDone: false },
	{ id: 'b', whatToDo: 'Plugga React', isDone: false },
	{ id: 'c', whatToDo: 'Tvätta', isDone: true }
]
const TodoContainer = () => {
	const [todos, setTodos] = useState(defaultTodos)

	const addTodo = whatToDo => {
		setTodos([ ...todos, { id: String(todos.length + 1), whatToDo: whatToDo, isDone: false } ])
	}
	const toggleTodo = id => {
		setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
	}
	
	return (
		<section className="todo-container">
			<AddTodo addTodo={addTodo} />
    		<TodoList todos={todos} toggleTodo={toggleTodo} />
		</section>
	)
}
export default TodoContainer

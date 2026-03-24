

const TodoList = ({ todos, toggleTodo }) => {
	return (
		<div>
			{todos.map(todo => (
				<div key={todo.id} className={cssClass(todo.isDone)}>
					<button onClick={() => toggleTodo(todo.id)}> {todo.isDone ? '✅' : '❌'} </button>
					{todo.whatToDo}
				</div>
			))}
		</div>
	)
}
export default TodoList

function cssClass(isDone) {
	if( isDone ) {
		return 'todo-item done'
	} else {
		return 'todo-item in-progress'
	}
}
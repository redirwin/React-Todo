// `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.

import React from 'react';

function TodoForm(props) {
	return (
		<form className="form" onSubmit={event => props.addTask(event)}>
			<input
				type="text"
				name="taskInput"
				placeholder="enter new task"
				value={props.taskInput}
				onChange={event => props.changeHandler(event)}
			/>
			<button>Add Item</button>
			<button>Clear Completed</button>
		</form>
	);
}

export default TodoForm;

// Holds input field and `Add Todo` and `Clear Completed` buttons.

import React from 'react';
// import './Todo.css';

function TodoForm(props) {
	return (
		<div>
			<form
				className="form"
				onSubmit={event => props.addTask(event)}
			>
				<input
					type="text"
					name="taskInput"
					placeholder="enter new task"
					value={props.taskInput}
					onChange={event =>
						props.changeHandler(event)
					}
				/>
				<button>Add Item</button>
			</form>
			<button onClick={event => props.clearCompleted(event)}>
				Clear Completed
			</button>
		</div>
	);
}

export default TodoForm;

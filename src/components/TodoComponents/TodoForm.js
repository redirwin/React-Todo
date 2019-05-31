// Holds input field and `Add Todo` and `Clear Completed` buttons.

import React from 'react';
import './TodoForm.scss';

const TodoForm = props => {
	return (
		<div className="form-container">
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
				<button
					onClick={event =>
						props.clearCompleted(event)
					}
				>
					Clear Completed
				</button>
			</form>
		</div>
	);
};

export default TodoForm;

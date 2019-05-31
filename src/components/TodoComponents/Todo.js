// Takes in the `todo` data and displays the task to the screen.

import React from 'react';
import './Todo.scss';

const Todo = props => {
	console.log(props.completed);
	return (
		<div
			// evaluate truthiness of 'completed' and set className
			className={`item${props.completed ? ' completed' : ''}`}
			onClick={event => props.toggleDone(event, props.id)}
		>
			{props.line}
		</div>
	);
};

export default Todo;

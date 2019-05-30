// Takes in the `todo` data and displays the task to the screen.

import React from 'react';

function Todo(props) {
	console.log(props.completed);
	return (
		<li
			// evaluate truthiness of completed to set className
			className={`item${props.completed ? ' completed' : ''}`}
			onClick={() => props.toggleDone(props.id)}
		>
			{props.line}
		</li>
	);
}

export default Todo;

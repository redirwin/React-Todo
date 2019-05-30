// Takes in the `todo` data and displays the task to the screen.

import React from 'react';

function Todo(props) {
	return (
		<li
			className={`item${props.completed ? ' completed' : ''}`}
			onClick={() => props.toggleDone(props.id)}
		>
			{props.line}
		</li>
	);
}

export default Todo;

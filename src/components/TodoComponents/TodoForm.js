// `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.

import React from 'react';

const TodoForm = () => {
	return (
		<form>
			<input placeholder="Enter New Todo" />
			<button>Add Todo</button>
			<button>Clear Completed</button>
		</form>
	);
};

export default TodoForm;

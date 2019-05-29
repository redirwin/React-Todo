// `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	// console.log(props);
	return (
		<div>
			<p>Hello from TodoList.js</p>
			<Todo />
		</div>
	);
};

export default TodoList;

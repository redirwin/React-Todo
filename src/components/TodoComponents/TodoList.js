// `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

import React from 'react';
import Todo from './Todo';

function TodoList(props) {
	return (
		<div>
			<h1>Dave's Todo List</h1>
			<ul>
				{props.list.map(function(item, i) {
					return (
						<Todo
							line={item.task}
							key={i}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default TodoList;

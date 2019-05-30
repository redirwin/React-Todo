// Receives Todos array and iterates over list generating a new `<Todo />` for each element in the array.

import React from 'react';
import Todo from './Todo';
// import './Todo.css';

function TodoList(props) {
	return (
		<div>
			<h1>My Todos</h1>
			<ul>
				{props.list.map(item => {
					return (
						<Todo
							key={item.id}
							line={item.task}
							toggleDone={
								props.toggleDone
							}
							id={item.id}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default TodoList;

// Receives Todos array and iterates over list generating a new `<Todo />` for each element in the array.

import React from 'react';
import Todo from './Todo';

function TodoList(props) {
	return (
		<div>
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
							completed={
								item.completed
							}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default TodoList;

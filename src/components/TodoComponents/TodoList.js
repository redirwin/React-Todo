// Receives Todos array and iterates over list generating a new `<Todo />` for each element in the array.

import React from 'react';
import Todo from './Todo';

// function TodoList(props) Why not this?? Does it have to do with binding 'this'?
const TodoList = props => {
	return (
		<div>
			<ul>
				{props.list.map(item => {
					return (
						<Todo
							key={item.id}
							line={item.task}
							id={item.id}
							completed={
								item.completed
							}
							toggleDone={
								props.toggleDone
							}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default TodoList;

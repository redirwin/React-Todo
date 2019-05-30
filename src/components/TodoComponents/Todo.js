// `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.

import React from 'react';

const Todo = props => {
	return <div>{props.item}</div>;
};

export default Todo;

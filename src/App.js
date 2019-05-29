// `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
// All of your application data will be stored here on `<App />`.
// All of your `handler` functions should live here on `<App />`.

import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	state = {
		task: 'Organize Garage',
		id: 1528817077286,
		completed: false
	};

	render() {
		return (
			<div>
				<TodoList />
				<TodoForm />
			</div>
		);
	}
}

export default App;

// `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
// All of your application data will be stored here on `<App />`.
// All of your `handler` functions should live here on `<App />`.

import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
// import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [
				{
					task: 'Organize Garage',
					id: 1528817077286,
					completed: false
				},
				{
					task: 'Bake Cookies',
					id: 1528817084358,
					completed: false
				},
				{
					task: 'take nap',
					id: 12345,
					completed: false
				}
			],
			newItem: ''
		};
	}

	addTask = event => {
		event.preventDefault();
		const newTask = {
			task: 'nap',
			id: Date.now(),
			completed: false
		};
		this.setState({
			list: [...this.state.list, newTask]
		});
	};

	handleChanges = event => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({
			newItem: event.target.value
		});
	};

	render() {
		return (
			<div>
				{<TodoList list={this.state.list} />}
				{/*<TodoForm />*/}

				<form className="form">
					<input
						type="text"
						name="taskInput"
						placeholder="Add New Item"
						value={this.state.newItem}
						onChange={this.handleChanges}
					/>
					<button onClick={this.addTask}>
						Add Todo
					</button>
					<button>Clear Completed</button>
				</form>
			</div>
		);
	}
}

export default App;

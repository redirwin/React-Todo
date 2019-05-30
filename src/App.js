// `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
// All of your application data will be stored here on `<App />`.
// All of your `handler` functions should live here on `<App />`.

import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [],
			taskInput: ''
		};
	}

	changeHandler = event => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	addTask = event => {
		event.preventDefault();
		const newTask = {
			task: this.state.taskInput,
			id: Date.now(),
			completed: false
		};
		this.setState({
			list: [...this.state.list, newTask],
			taskInput: ''
		});
	};

	render() {
		return (
			<div>
				<TodoList list={this.state.list} />
				<TodoForm
					taskInput={this.state.taskInput}
					changeHandler={this.changeHandler}
					addTask={this.addTask}
				/>
			</div>
		);
	}
}

export default App;

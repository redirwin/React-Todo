// Holds all the data needed for this project. It will also be the container for your Todo Components.
// All of your application data will be stored here on `<App />`.
// All of your `handler` functions should live here on `<App />`.

import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

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
					task: 'Eat',
					id: 152881707528,
					completed: false
				},
				{
					task: 'Sleep',
					id: 48,
					completed: false
				}
			],
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

	toggleDone = (event, id) => {
		event.preventDefault();
		this.setState(prevState => {
			return {
				list: prevState.list.map(item => {
					if (item.id === id) {
						// console.log(item);
						return {
							...item,
							completed: !item.completed
						};
					} else {
						// console.log(item);
						return item;
					}
				})
			};
		});
	};

	clearCompleted = event => {
		event.preventDefault();
		console.log(this.state.list);
		this.setState({
			list: this.state.list.filter(
				item => item.completed === false
			)
		});
	};

	render() {
		return (
			<div>
				<h1>My Todos</h1>
				<TodoList
					list={this.state.list}
					toggleDone={this.toggleDone}
				/>
				<TodoForm
					taskInput={this.state.taskInput}
					changeHandler={this.changeHandler}
					addTask={this.addTask}
					clearCompleted={this.clearCompleted}
				/>
			</div>
		);
	}
}

export default App;

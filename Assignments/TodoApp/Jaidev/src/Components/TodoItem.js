import React, { Component } from "react";
import "../Styles/TodoItem.css";

// todo component consisting of a checkbox, input box, and delete button
export class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.props.checkTodo(this);
	}

	// event handler for todo input box
	handleKeyUp(evt) {
		// add a new todo on pressing enter, if inside unchecked todos
		if (evt.keyCode === 13 && !this.props.isChecked) {
			this.props.addTodo();
			evt.preventDefault();
			return false;
		} else if (evt.keyCode === 8 && this.props.data.length === 0) {
			this.props.removeTodo(this);
		} else this.props.updateData(this, evt.target.value);
	}

	// event handler for remove button
	handleRemove(evt) {
		this.props.removeTodo(this);
	}

	render() {
		return (
			<div
				className={
					this.props.isChecked
						? "Todo-Item-checked Todo-Item-container"
						: "Todo-Item-container"
				}
			>
				<input
					type="checkbox"
					name="chx"
					className="checkbox"
					defaultChecked={this.props.isChecked}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					autoFocus
					className={
						this.props.isChecked ? "Todo-Item-checked Todo-Item" : "Todo-Item"
					}
					onKeyUp={this.handleKeyUp}
					placeholder="Add Item..."
					defaultValue={this.props.data}
				/>
				<button
					className={
						this.props.isChecked ? "Todo-Item-checked Remove-btn" : "Remove-btn"
					}
					onClick={this.handleRemove}
				>
					x
				</button>
			</div>
		);
	}
}

export default TodoItem;

import React from "react";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
	}
	// try {
	// 	async fetch("http://localhost:3000").then(console.log(response));
	// 	};
	// } catch (error) {
	// 	console.log(error);
	// }

	handleSubmit = (event) => {
		event.preventDefault();
		alert("Submitted: " + this.state.value);
	};

	tellYoda = (event) => {
		this.setState({ value: event.target.value });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				{/* {this.state.isToggleOn ? 'ON' : 'OFF'} */}
				<input
					onChange={this.tellYoda}
					type="text"
					name="sentance"
					id="sentance"
					value={this.state.value}
					placeholder="Speak, what say you would?"
				/>
			</form>
		);
	}
}

export default Form;

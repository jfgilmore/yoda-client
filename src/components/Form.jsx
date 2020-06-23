import React from "react";
import "../styles/Form.css";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = { yoda: "", value: "", translate: "", translated: "" };
	}

	// async componentDidMount() {
	// 	this.handleSubmit();
	// }

	handleSubmit = async (event) => {
		event.preventDefault();
		if (this.state?.value === "") {
			return;
		}
		try {
			const response = await fetch(
				`https://api.funtranslations.com/translate/yoda.json?text=${this.state.value}`,
				{
					method: "GET",
					keepalive: false,
				}
			);
			const data = await response.json();

			if (typeof data.error !== "undefined") {
				throw data;
			} else {
				this.setState({ data: data, value: "" });
			}
		} catch (error) {
			this.setState({
				data: {
					contents: {
						translated: error.error.message,
						translation: "The Server",
					},
					error: error,
				},
			});
		}
	};

	tellYoda = (event) => {
		this.setState({ value: event.target.value });
	};

	render() {
		const data = this.state?.data;
		return (
			<>
				{data && (
					<div>
						<blockquote
							className={
								data.contents.translation === "yoda" ? "result" : "error"
							}
							cite={data.contents.translated}
						>
							{data.contents.translated}
							<br />
							<cite>- {data.contents.translation}</cite>
						</blockquote>
					</div>
				)}
				<form onSubmit={this.handleSubmit}>
					<input
						autofocus
						onChange={this.tellYoda}
						type="text"
						name="sentance"
						id="sentance"
						value={this.state.value}
						placeholder="Speak, what say you would?"
					/>
				</form>
			</>
		);
	}
}

export default Form;

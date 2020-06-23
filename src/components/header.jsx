import React from "react";
import logo from "../images/logo.png";

const Header = () => {
	return (
		<>
			<img src={logo} className="App-logo" alt="logo" />
			<h1>The answers you seek</h1>
		</>
	);
};

export default Header;

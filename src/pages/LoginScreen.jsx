import React from "react";
import { Button } from "react-bootstrap";

const LoginScreen = ({ history }) => {
	const handleLogin = () => {
		history.push("/mans");
	};
	return (
		<div className='container mt-5 text-center'>
			<img src='/assets/animate.gif' alt='animation' />
			<h1 className='my-3'> Login Screen</h1>

			<Button variant='primary' onClick={handleLogin}>
				Login
			</Button>
		</div>
	);
};

export default LoginScreen;

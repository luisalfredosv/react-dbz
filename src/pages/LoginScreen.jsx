import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext"
import { authTypes } from "../types/authtypes"
import { useHistory } from "react-router"

const LoginScreen = () => {

	const { dispatch } = useContext(AuthContext)
	const history = useHistory();
	const handleLogin = () => {
		dispatch({type: authTypes.login})
		history.push("/");
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

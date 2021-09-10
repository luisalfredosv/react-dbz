import React from "react";
import { Container } from "react-bootstrap";
import { Characters } from "../models/Characters";
import Card from "../components/Card";

const ManScreen = () => {
	const mans = Characters.filter((caracter) => caracter.type === "h");
	return (
		<>
			<Container>
				<h1>Mans Screen</h1>
				<hr />

				<div className='row'>
					{mans.map((man) => (
						<Card key={man.id} {...man} />
					))}
				</div>
			</Container>
		</>
	);
};

export default ManScreen;

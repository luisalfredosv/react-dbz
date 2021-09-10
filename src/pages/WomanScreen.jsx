import React from "react";
import { Container } from "react-bootstrap";
import { Characters } from "../models/Characters";
import Card from "../components/Card";

const WomanScreen = ({ history }) => {
	const womans = Characters.filter((caracter) => caracter.type === "m");
	return (
		<>
			<Container>
				<h1>Womans Screen</h1>
				<hr />

				<div className='row'>
					{womans.map((woman) => (
						<Card key={woman.id} {...woman} />
					))}
				</div>
			</Container>
		</>
	);
};

export default WomanScreen;

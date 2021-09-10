import { useParams } from "react-router";
import { Container, Button, Image, Col, Row } from "react-bootstrap";
import { Characters } from "../models/Characters";

const CharacterScreen = ({ history }) => {
	const { id: idCharacter } = useParams();

	const { id, name, type, description } = Characters.find(
		(caracter) => caracter.id === idCharacter
	);

	const path = `/assets/${type}-${id}.png`;

	const handleReturn = () => {
		history.goBack();
	};

	return (
		<Container>
			<Row>
				<Col>
					<Image
						src={path}
						alt={id}
						className='img-thumbnail mt-3 fluid '
						style={{
							width: "500px",
							height: "auto",
						}}
						fluid
					/>
				</Col>

				<Col>
					<h2>Name: {name}</h2>
					<p>Description: {description}</p>

					<Button variant='warning' onClick={handleReturn}>
						To return
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default CharacterScreen;

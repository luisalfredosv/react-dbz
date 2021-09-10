import React, { useState, useEffect } from "react";
import {
	Container,
	Row,
	InputGroup,
	FormControl,
	Button,
	Form,
	Alert,
} from "react-bootstrap";
import { useLocation } from "react-router";
import Card from "../components/Card";
import parseString from "query-string";
import { Characters } from "../models/Characters";

const SearchScreen = ({ history }) => {
	const location = useLocation();

	const { q = "" } = parseString.parse(location.search);

	const [inputValue, setInputValue] = useState(q);
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		getCharacters();
	}, [q]);

	const [show, setShow] = useState(false);

	const handlerChange = (e) => {
		const value = e.target.value;
		setInputValue(value);
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		history.push(`?q=${inputValue}`);
	};

	const getCharacters = () => {
		if (inputValue.trim() !== "") {
			const value = inputValue.toLocaleLowerCase();
			const newValue = Characters.filter((character) =>
				character.name.toLocaleLowerCase().includes(value)
			);
			setShow(false);
			setCharacters(newValue);
		} else {
			setShow(true);
			setCharacters([]);
		}
	};

	return (
		<>
			<Container>
				<h1>Search</h1>

				<Row>
					<Form onSubmit={handlerSubmit}>
						<InputGroup className='mb-3'>
							<FormControl
								placeholder='Search...'
								aria-label='Search...'
								aria-describedby='basic-addon2'
								value={inputValue}
								onChange={handlerChange}
							/>
							<Button
								variant='primary'
								id='button-addon2'
								autoComplete='off'
								type='submit'
							>
								Button
							</Button>
						</InputGroup>
					</Form>
				</Row>
				<Row>
					<h3>Results: {characters.length}</h3>
				</Row>
				<Row>
					<Container>
						{show && (
							<Alert
								variant='warning'
								onClose={() => setShow(false)}
								dismissible
							>
								Please Search a Character!
							</Alert>
						)}
					</Container>
				</Row>
				<Row>
					{characters.map((character) => (
						<Card key={character.id} {...character} />
					))}
				</Row>
			</Container>
		</>
	);
};

export default SearchScreen;

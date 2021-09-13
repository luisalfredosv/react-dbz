import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ name, description, type, id }) => {
	const path = `/assets/${type}-${id}.png`;
	return (
		<div
			className='card m-3 col-12 col-md-4'
			style={{
				width: 200,
			}}
		>
			<img
				loading='lazy'
				src={path}
				alt={id}
				className='card-img-top fluid '
			/>

			<div className='card-body'>
				<h3 className='card-title'>{name}</h3>
				<p className='card-text'>
					<Link to={`/character/${id}`}>More view...</Link>
				</p>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default Card;

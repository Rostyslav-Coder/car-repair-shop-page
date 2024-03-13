// ========== REVIEW CARD COMPONENT MODULE ========== //

import PropTypes from 'prop-types';

const ReviewCard = ({ text, name, car }) => {
	return (
		<div className='card'>
			<p className='card__text text'>{text}</p>
			<p className='card__name text'>{name}</p>
			<p className='card__car text'>{car}</p>
		</div>
	);
};

ReviewCard.propTypes = {
	text: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	car: PropTypes.string.isRequired,
};

export default ReviewCard;

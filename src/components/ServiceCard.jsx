// ========== SERVICE CARD COMPONENT MODULE ========== //

import PropTypes from 'prop-types';

const ServiceCard = ({ image, text }) => {
	return (
		< div className='service__card' >
			<img src={image} alt={`${text} logo`} />
			<p className='text'>{text}</p>
		</div >
	);
};

ServiceCard.propTypes = {
	image: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default ServiceCard;

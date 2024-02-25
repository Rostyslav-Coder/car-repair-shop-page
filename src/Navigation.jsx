// =============== NAVIGATION MODULE ===============

import { useState } from "react";
import PropTypes from 'prop-types';

// Create NavButton Component 
const NavButton = ({ handleNavButtonClick, isOpen }) => {
	return (
		<div className="navigator__button" onClick={handleNavButtonClick} style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
			+
		</div>
	)
}

// Validate NavButton Component props
NavButton.propTypes = {
	handleNavButtonClick: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
}

// Create HeaderLogo Component 
const HeaderLogo = () => {
	return (
		<div className="header__logo">
			<img src="logo/ars-logo.png" alt="ARS logo" className="logo" />
		</div>
	)
}

// Create Button Component 
const Button = ({ baseUrl, handleLinkClick, name }) => {
	return (
		<a href={baseUrl} className="nav__button" onClick={handleLinkClick}>{name}</a>
	)
}

// Validate Button Component props
Button.propTypes = {
	baseUrl: PropTypes.string.isRequired,
	handleLinkClick: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
}

// Create Navigator Component 
const Navigator = ({ handleLinkClick }) => {
	return (
		<nav className="navigator">
			<Button baseUrl="#banner" handleLinkClick={handleLinkClick} name="Home" />
			<Button baseUrl="#about" handleLinkClick={handleLinkClick} name="About" />
			<Button baseUrl="#service" handleLinkClick={handleLinkClick} name="Service" />
			<Button baseUrl="#review" handleLinkClick={handleLinkClick} name="Review" />
			<Button baseUrl="#contact" handleLinkClick={handleLinkClick} name="Contact" />
		</nav>
	)
}

// Validate Navigator Component props
Navigator.propTypes = {
	handleLinkClick: PropTypes.func.isRequired,
}

// Create Navigation Component 
const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleNavButtonClick = () => {
		setIsOpen(!isOpen);
	};

	const handleLinkClick = () => {
		if (!window.matchMedia('(min-width: 1024px)').matches) {
			setIsOpen(false);
		}
	};

	return (
		<>
			<NavButton handleNavButtonClick={handleNavButtonClick} isOpen={isOpen} />

			<header className={`header ${isOpen ? 'header--open' : 'header--closed'}`}>

				<div className="header__wrapper">

					<HeaderLogo />
					<Navigator handleLinkClick={handleLinkClick} />

				</div>

			</header>
		</>
	);
};

export default Navigation;

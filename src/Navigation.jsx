// Navigation module

import { useState } from "react";

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
			<div className="navigator__button" onClick={handleNavButtonClick} style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
				+
			</div>
			<header className={`header ${isOpen ? 'header--open' : 'header--closed'}`}>
				<div className="header__wrapper">
					<div className="header__logo">
						<img src="logo/ars-logo.png" alt="ARS logo" className="logo" />
					</div>
					<nav className="navigator">
						<a href="#banner" className="nav__button" onClick={handleLinkClick}>Home</a>
						<a href="#about" className="nav__button" onClick={handleLinkClick}>About</a>
						<a href="#service" className="nav__button" onClick={handleLinkClick}>Service</a>
						<a href="#review" className="nav__button" onClick={handleLinkClick}>Review</a>
						<a href="#contact" className="nav__button" onClick={handleLinkClick}>Contact</a>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Navigation;

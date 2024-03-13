// ========== BANNER COMPONENT MODULE ========== //

import { useState, useEffect } from 'react';
import heroImage from '../assets/banner/employee.webp';
import heroesImage from '../assets/banner/employers.webp';

const Banner = () => {
	const [screenOrientation, setScreenOrientation] = useState(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');
	const [employeeStyle, setEmployeeStyle] = useState({});

	useEffect(() => {
		const timer = setTimeout(() => {
			setEmployeeStyle({
				transition: '2s',
				transitionProperty: 'opacity, transform',
				opacity: '1',
				transformOrigin: 'bottom',
				transform: 'scale(1.2)',
			});
		}, 1500);

		const handleResize = () => {
			setScreenOrientation(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');
		};

		window.addEventListener('resize', handleResize);

		return () => {
			clearTimeout(timer);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const imgSrc = (screenOrientation === 'landscape' ? heroesImage : heroImage);

	return (
		<section className='banner' id='banner'>
			<div className='banner__wrapper wrapper'>
				<div className='banner__content content'>
					<h1 className='banner__title title'>
						Professional Car Service in Boston.
					</h1>
					<h2 className='banner__subtitle subtitle'>
						We make cars happy.
					</h2>
					<p className='banner__text text'>
						Find a reliable partner for servicing your car.
						We offer high-quality repair and maintenance services for all car brands.
					</p>
					<p className='banner__text text'>
						Use our convenient parts search.
					</p>
					<form action='#' className='banner__form'>
						<select name='parts' id='parts'>
							<option value='void'>Select One</option>
							<option value='engine'>Car Engine</option>
							<option value='suspension'>Car Suspension</option>
							<option value='clutch'>Car Clutch</option>
							<option value='electrical'>Auto Electrical</option>
						</select>
						<input type='button' value='Search!' />
					</form>
				</div>
				<div className='banner__image image'>
					<img className='employers' src={imgSrc} alt='employers' style={employeeStyle} />
				</div>
			</div>
		</section>
	);
};

export default Banner;

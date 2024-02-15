// =============== SERVICE MODULE ===============

import { useRef, useEffect } from 'react';

function Service() {
	const employeeGirlRef = useRef(null);
	const serviceRef = useRef(null);

	useEffect(() => {
		const employeeObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
					const employee = employeeGirlRef.current;
					employee.style.transition = '2s';
					employee.style.transitionProperty = 'opacity, transform';
					employee.style.opacity = '1';
					employee.style.transformOrigin = 'bottom left';
					employee.style.transform = 'scale(1.2)';

					employeeObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0.6 });

		employeeObserver.observe(serviceRef.current);

		return () => {
			employeeObserver.disconnect();
		};
	}, []);

	return (
		<section className='service' id='service' ref={serviceRef}>

			<div className='service__wrapper wrapper'>

				<div className='service__content content'>

					<h1 className='service__title title'>
						Our Services
					</h1>

					<p className='service__text text'>
						We provide a wide range of services, including diagnostics, engine repair, part replacement, tire service, and more. Our goal is to ensure the safety and reliability of your vehicle.
					</p>

				</div>

				<div className='service__cards'>
					<div className='service__card'>
						<img src='service/tire.jpg' alt='tire logo'></img>
						<p className='text'>Tire Service</p>
					</div>
					<div className='service__card'>
						<img src='service/body.jpg' alt='body logo'></img>
						<p className='text'>Body Repair</p>
					</div>
					<div className='service__card'>
						<img src='service/paint.jpg' alt='painting logo'></img>
						<p className='text'>Painting Services</p>
					</div>
					<div className='service__card'>
						<img src='service/electric.jpg' alt='electrical logo'></img>
						<p className='text'>Electrical Services</p>
					</div>
					<div className='service__card'>
						<img src='service/engine.jpg' alt='engine logo'></img>
						<p className='text'>Engine Repair</p>
					</div>
					<div className='service__card'>
						<img src='service/suspension.jpg' alt='suspension logo'></img>
						<p className='text'>Suspension Maintenance</p>
					</div>
					<div className='service__card'>
						<img src='service/regular.jpg' alt='regular logo'></img>
						<p className='text'>Regular Maintenance</p>
					</div>
					<div className='service__card'>
						<img src='service/conditioning.jpg' alt='conditioning logo'></img>
						<p className='text'>Air Conditioning System</p>
					</div>
					<div className='service__card'>
						<img src='service/transmission.jpg' alt='transmission logo'></img>
						<p className='text'>Transmission and Gearbox</p>
					</div>
					<div className='service__card'>
						<img src='service/diagnostic.jpg' alt='diagnostic logo'></img>
						<p className='text'>Diagnostic and Computer Tuning</p>
					</div>
				</div>

				<div className='service__images'>
					<img className='employee_girl' src='service/employee-girl.png' alt='employee girl' ref={employeeGirlRef}></img>
				</div>
			</div>

		</section>
	);
}

export default Service;

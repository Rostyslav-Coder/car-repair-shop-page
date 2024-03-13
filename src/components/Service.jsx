// ========== SERVICE COMPONENT MODULE ========== //

import { useRef, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import SERVICE_DATA from '../data/serviseData';
import employeeGirlImage from '../assets/service/employee-girl.webp';

const Service = () => {
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
					{
						SERVICE_DATA.map(({ id, image, text }) => {
							return <ServiceCard key={id} image={image} text={text} />
						})
					}
				</div>
				<div className='service__images'>
					<img className='employee_girl' src={employeeGirlImage} alt='employee girl' ref={employeeGirlRef} />
				</div>
			</div>
		</section>
	);
};

export default Service;

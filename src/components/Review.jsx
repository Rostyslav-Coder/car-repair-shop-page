// ========== REVIEW COMPONENT MODULE ========== //

import { useRef, useEffect } from 'react';
import customerImage from '../assets/review/customer.webp';
import ReviewCard from './ReviewCard';
import REVIEW_DATA from '../data/reviewData';

const Review = () => {
	const customerRef = useRef(null);
	const reviewRef = useRef(null);

	useEffect(() => {
		const customerObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
					const customer = customerRef.current;
					customer.style.transition = '2s';
					customer.style.transitionProperty = 'opacity, transform';
					customer.style.opacity = '1';
					customer.style.transformOrigin = 'bottom right';
					customer.style.transform = 'scale(1.2)';

					customerObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0.6 });

		customerObserver.observe(reviewRef.current);

		return () => {
			customerObserver.disconnect();
		};
	}, []);

	return (
		<section className='review' id='review' ref={reviewRef}>
			<div className='review__wrapper wrapper'>
				<div className='review__content content'>
					<h1 className='review__title title'>
						What Our Customers Say
					</h1>
					<div className='review__cards cards'>
						{
							REVIEW_DATA.map(({ id, text, name, car }) => {
								return <ReviewCard key={id} text={text} name={name} car={car} />
							})
						}
					</div>
				</div>
				<div className='review__image'>
					<img src={customerImage} alt='customer' className='customer' ref={customerRef} />
				</div>
			</div>
		</section>
	);
};

export default Review;

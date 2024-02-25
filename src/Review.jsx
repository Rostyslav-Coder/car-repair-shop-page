// =============== REVIER MODULE ===============

import { useRef, useEffect } from 'react';

function Review() {
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

						<div className='card'>
							<p className='card__text text'>
								Professional and fast repair! Thanks.
								My Ford Mustang feels like new.
							</p>
							<p className='card__name text'>
								John Smith
							</p>
							<p className='card__car text'>
								Ford Mustang
							</p>
						</div>

						<div className='card'>
							<p className='card__text text'>
								Excellent service!
								My Chevrolet Silverado is back on the road.
							</p>
							<p className='card__name text'>
								Maria Johnson
							</p>
							<p className='card__car text'>
								Chevrolet Silverado
							</p>
						</div>

						<div className='card'>
							<p className='card__text text'>
								Reliable auto service.
								My Dodge Ram appreciates the attention to detail.
							</p>
							<p className='card__name text'>
								Peter Brown
							</p>
							<p className='card__car text'>
								Dodge Ram
							</p>
						</div>

					</div>

				</div>

				<div className='review__image'>
					<img src='review/customer.png' alt='customer' className='customer' ref={customerRef} />
				</div>

			</div>

		</section>
	);
}

export default Review;

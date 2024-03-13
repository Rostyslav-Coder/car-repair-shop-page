// =============== CONTACT MODULE ===============

import { ParallaxBanner, ParallaxBannerLayer, Parallax } from "react-scroll-parallax";
import contactBgImage from '../assets/contact/contact-bg.jpg';

const Contact = () => {
	return (
		<ParallaxBanner className='contact' id='contact'>
			<ParallaxBannerLayer className="contact__layer" image={contactBgImage} speed={-30} />
			<div className='contact__wrapper wrapper'>
				<Parallax className='contact__content content' speed={-10}>
					<h1 className='contact__title title'>
						Get in Touch
					</h1>
					<p className='contact__text text'>
						If you have any questions or want to schedule a repair, contact us by phone or email.
					</p>
					<div className='contact__group'>
						<a className='contact__link' href='tel:+15551234567'>+1 (555) 123-4567</a>
						<a className='contact__link' href='tel:+15551236789'>+1 (555) 123-6789</a>
						<a className='contact__link' href='mailto:info@autorepair-boston.com'>info@autorepair-boston.com</a>
					</div>
				</Parallax>
			</div>
		</ParallaxBanner>
	);
};

export default Contact;

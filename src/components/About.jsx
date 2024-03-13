// =============== ABOUT MODULE ===============

import mobil_1Logo from '../assets/logo/mobil1.webp';
import shellLogo from '../assets/logo/shell.webp';
import castrolLogo from '../assets/logo/castrol.webp';
import quakerLogo from '../assets/logo/quaker.webp';
import xadoLogo from '../assets/logo/xado.webp';

const About = () => {
	return (
		<section className='about' id='about'>
			<div className='about__wrapper wrapper'>
				<div className='about__content content'>
					<h1 className='about__title title'>
						Our experienced team
					</h1>
					<p className='about__text text'>
						Our team consists of highly qualified professionals specializing in car repair and maintenance.
						We have a wealth of experience and in-depth knowledge, which allows us to provide high quality
						services to our clients.
					</p>
					<h1 className='about__title title'>
						Official Partners!
					</h1>
					<p className='about__text text'>
						We are proud to be official partners of well-known brands in the USA, specializing in auto oils and auto parts. We have special prices for our partners products. Our competence is confirmed by certificates.
					</p>
				</div>
				<div className='about__images'>
					<img className='about__image' src={mobil_1Logo} alt='mobil 1 logo' />
					<img className='about__image' src={shellLogo} alt='shell logo' />
					<img className='about__image' src={castrolLogo} alt='castrol logo' />
					<img className='about__image' src={quakerLogo} alt='quaker logo' />
					<img className='about__image' src={xadoLogo} alt='xado logo' />
				</div>
			</div>
		</section>
	);
};

export default About;

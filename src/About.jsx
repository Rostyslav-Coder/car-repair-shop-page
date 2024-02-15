// =============== ABOUT MODULE ===============

function About() {
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
					<img className='about__image' src='logo/mobil-1.png' alt="mobil 1"></img>
					<img className='about__image' src='logo/shell.png' alt="shell"></img>
					<img className='about__image' src='logo/castrol.png' alt="castrol"></img>
					<img className='about__image' src='logo/quaker.png' alt="quaker"></img>
					<img className='about__image' src='logo/xado.png' alt="xado"></img>
				</div>
			</div>

		</section>
	)
}

export default About
